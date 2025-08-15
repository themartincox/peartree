#!/bin/bash

# ==============================================================================
# fix_comments_final.sh (v6 - Final Version)
# Uses a refined pattern to exclude items in lists (like imports),
# targeting only the true orphaned comments.
# ==============================================================================

# --- Configuration ---
TARGET_DIR="${1:-.}"
APPLY_CHANGES=false

if [ "$2" == "--apply" ]; then
  APPLY_CHANGES=true
fi

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
    
    temp_file=$(mktemp)
    file_changed=false

    while IFS= read -r line; do
        trimmed_line=$(echo "$line" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
        
        should_comment=false
        
        if [ -n "$trimmed_line" ]; then
            # Heuristic: A line is a candidate if it looks like prose AND does NOT contain common code characters.
            # The comma (,) is now included to prevent flagging items in import/array lists.
            if [[ "$trimmed_line" =~ [a-zA-Z].*\s.*[a-zA-Z] && \
                  ! "$trimmed_line" =~ (\/\/|\/\*|\*\/|\{|\}|\(|\)|\[|\]|=>|:|;|=|<|>|\`|\'|\"|,) ]]; then
                
                # SAFETY CHECK: Only consider lines with less than 4 spaces of indentation.
                if ! [[ "$line" =~ ^[[:space:]]{4,} ]]; then
                    should_comment=true
                fi
            fi
        fi
        
        if [ "$should_comment" = true ]; then
            echo "// $line" >> "$temp_file"
            file_changed=true
        else
            echo "$line" >> "$temp_file"
        fi
    done < "$file"

    if [ "$file_changed" = true ]; then
        echo "--- File: $file ---"
        if [ "$APPLY_CHANGES" = true ]; then
            echo "  ✅ Applying changes..."
            mv "$temp_file" "$file"
        else
            echo "  - Would make the following changes:"
            diff --color=always -u "$file" "$temp_file" | tail -n +3
            rm "$temp_file"
        fi
        echo ""
    else
        rm "$temp_file"
    fi
done

echo "=============================================================================="
echo "Script finished."
if [ "$APPLY_CHANGES" = true ]; then
  echo "Changes have been applied. Please review them with 'git diff'."
else
  echo "To apply these changes, re-run with the --apply flag:"
  echo "./fix_comments_safe.sh \"$TARGET_DIR\" --apply"
fi