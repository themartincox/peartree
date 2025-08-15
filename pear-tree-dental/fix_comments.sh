#!/bin/bash

# ==============================================================================
# fix_comments.sh
# A script to find and comment out orphaned lines of text in TS/TSX files
# that are likely intended to be comments but lack the proper syntax.
# ==============================================================================

# --- Configuration ---
TARGET_DIR="${1:-.}" # Use the first argument as the target directory, or default to the current directory.
APPLY_CHANGES=false

if [ "$2" == "--apply" ]; then
  APPLY_CHANGES=true
fi

# --- Patterns ---
# This is the core logic. We define a pattern that matches most valid lines of code.
# If a line does NOT match this pattern, it's a candidate for being a comment.
# We look for keywords, operators, and structural characters.
CODE_PATTERN="(\/\/|\/\*|\*\/|\{|\}|\(|\)|=>|:|;|=|<|>|\[|\]|\`|'|\"|const|let|var|import|export|return|class|function|if|else|while|for|switch|case|break|continue|try|catch|finally|new|this|super|extends|implements|interface|type|enum|async|await|yield|debugger|@|export default)"

# This pattern identifies lines that look like prose (at least one space between words)
# and are not empty.
PROSE_PATTERN="[a-zA-Z].*\s.*[a-zA-Z]"


# --- Main Logic ---
if [ "$APPLY_CHANGES" = true ]; then
  echo "🟢 APPLY MODE: Files will be modified."
else
  echo "⚪️ DRY RUN MODE: No files will be changed. Run with '--apply' to modify files."
fi
echo "=============================================================================="
echo "Searching in directory: $(realpath "$TARGET_DIR")"
echo ""

# Find all .ts and .tsx files, excluding node_modules and .next directories
find "$TARGET_DIR" -type d \( -name "node_modules" -o -name ".next" \) -prune -o \( -name "*.ts" -o -name "*.tsx" \) -print | while read -r file; do
  
  lines_to_change=()
  mapfile -t lines < "$file"
  
  for i in "${!lines[@]}"; do
    line="${lines[$i]}"
    
    # Trim leading/trailing whitespace for pattern matching
    trimmed_line=$(echo "$line" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')

    # Skip empty lines
    if [ -z "$trimmed_line" ]; then
      continue
    fi

    # If the line does NOT look like code, but DOES look like prose, we flag it.
    if ! echo "$trimmed_line" | grep -qE "$CODE_PATTERN" && echo "$trimmed_line" | grep -qE "$PROSE_PATTERN"; then
        # This line is a candidate. Add its number and content to the list.
        lines_to_change+=("$((i+1)):$line")
    fi
  done

  # If we found lines to change in the current file, process them.
  if [ ${#lines_to_change[@]} -gt 0 ]; then
    echo "--- File: $file ---"
    
    for item in "${lines_to_change[@]}"; do
      line_num="${item%%:*}"
      line_content="${item#*:}"
      
      if [ "$APPLY_CHANGES" = true ]; then
        # Use sed to prepend '// ' to the specific line number (macOS compatible)
        sed -i '' "${line_num}s|.*|// &|" "$file"
        echo "  ✅ Fixed line $line_num: $line_content"
      else
        echo "  - Would fix line $line_num: $line_content"
      fi
    done
    echo "" # Add a newline for readability
  fi
done

echo "=============================================================================="
echo "Script finished."
if [ "$APPLY_CHANGES" = true ]; then
  echo "Changes have been applied. Please review them with 'git diff'."
else
  echo "To apply these changes, re-run with the --apply flag:"
  echo "./fix_comments.sh \"$TARGET_DIR\" --apply"
fi