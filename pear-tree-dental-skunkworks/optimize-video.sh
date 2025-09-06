#!/bin/bash

# Video Optimization Script for Pear Tree Dental
# Optimizes Haus.mp4 for web use

echo "🎥 Pear Tree Dental - Video Optimizer"
echo "======================================"

# Check if FFmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ FFmpeg not found. Please install:"
    echo "   Ubuntu/Debian: sudo apt install ffmpeg"
    echo "   macOS: brew install ffmpeg"
    echo "   Windows: Download from https://ffmpeg.org/"
    echo ""
    echo "🌐 Alternative: Use online tools:"
    echo "   1. https://cloudconvert.com/mp4-converter"
    echo "   2. https://www.freeconvert.com/video-compressor"
    echo "   3. https://clideo.com/compress-video"
    exit 1
fi

# Input and output files
INPUT_FILE="public/videos/Haus.mp4"
OUTPUT_DIR="public/videos"

# Check if input file exists
if [ ! -f "$INPUT_FILE" ]; then
    echo "❌ Input file not found: $INPUT_FILE"
    echo "Please ensure Haus.mp4 is in the public/videos/ directory"
    exit 1
fi

echo "📊 Original file info:"
echo "File: $INPUT_FILE"
echo "Size: $(du -h "$INPUT_FILE" | cut -f1)"
echo ""

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

echo "🎬 Starting optimization..."

# Desktop version (1920x1080, ~3-4MB)
echo "📱 Creating desktop version..."
ffmpeg -i "$INPUT_FILE" \
    -c:v libx264 -crf 23 -preset medium \
    -c:a aac -b:a 128k \
    -vf "scale='min(1920,iw)':'min(1080,ih)':force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:black" \
    -r 30 -movflags +faststart \
    -y "$OUTPUT_DIR/Haus-optimized.mp4"

# Tablet version (1024x576, ~2-3MB)
echo "📱 Creating tablet version..."
ffmpeg -i "$INPUT_FILE" \
    -c:v libx264 -crf 25 -preset medium \
    -c:a aac -b:a 96k \
    -vf "scale='min(1024,iw)':'min(576,ih)':force_original_aspect_ratio=decrease,pad=1024:576:(ow-iw)/2:(oh-ih)/2:black" \
    -r 30 -movflags +faststart \
    -y "$OUTPUT_DIR/Haus-tablet.mp4"

# Mobile version (720x405, ~1-2MB)
echo "📱 Creating mobile version..."
ffmpeg -i "$INPUT_FILE" \
    -c:v libx264 -crf 28 -preset medium \
    -c:a aac -b:a 96k \
    -vf "scale='min(720,iw)':'min(405,ih)':force_original_aspect_ratio=decrease,pad=720:405:(ow-iw)/2:(oh-ih)/2:black" \
    -r 30 -movflags +faststart \
    -y "$OUTPUT_DIR/Haus-mobile.mp4"

# WebM versions for modern browsers
echo "🌐 Creating WebM versions..."

# Desktop WebM
ffmpeg -i "$OUTPUT_DIR/Haus-optimized.mp4" \
    -c:v libvpx-vp9 -crf 30 -b:v 0 \
    -c:a libopus -b:a 128k \
    -y "$OUTPUT_DIR/Haus.webm"

# Tablet WebM
ffmpeg -i "$OUTPUT_DIR/Haus-tablet.mp4" \
    -c:v libvpx-vp9 -crf 32 -b:v 0 \
    -c:a libopus -b:a 96k \
    -y "$OUTPUT_DIR/Haus-tablet.webm"

# Mobile WebM
ffmpeg -i "$OUTPUT_DIR/Haus-mobile.mp4" \
    -c:v libvpx-vp9 -crf 35 -b:v 0 \
    -c:a libopus -b:a 64k \
    -y "$OUTPUT_DIR/Haus-mobile.webm"

echo ""
echo "✅ Optimization complete!"
echo "========================="

# Show file sizes
echo "📊 Results:"
echo "Original:  $(du -h "$INPUT_FILE" | cut -f1) - $INPUT_FILE"
echo "Desktop:   $(du -h "$OUTPUT_DIR/Haus-optimized.mp4" | cut -f1) - $OUTPUT_DIR/Haus-optimized.mp4"
echo "Tablet:    $(du -h "$OUTPUT_DIR/Haus-tablet.mp4" | cut -f1) - $OUTPUT_DIR/Haus-tablet.mp4"
echo "Mobile:    $(du -h "$OUTPUT_DIR/Haus-mobile.mp4" | cut -f1) - $OUTPUT_DIR/Haus-mobile.mp4"
echo ""
echo "WebM versions:"
echo "Desktop:   $(du -h "$OUTPUT_DIR/Haus.webm" | cut -f1) - $OUTPUT_DIR/Haus.webm"
echo "Tablet:    $(du -h "$OUTPUT_DIR/Haus-tablet.webm" | cut -f1) - $OUTPUT_DIR/Haus-tablet.webm"
echo "Mobile:    $(du -h "$OUTPUT_DIR/Haus-mobile.webm" | cut -f1) - $OUTPUT_DIR/Haus-mobile.webm"

echo ""
echo "🎯 Next steps:"
echo "1. Test video loading on different devices"
echo "2. Update your React components to use optimized videos"
echo "3. Deploy to production"
echo "4. Monitor Core Web Vitals improvement"

echo ""
echo "📱 Sample React component:"
echo "================================"
cat << 'EOF'
<video autoPlay muted loop playsInline>
  <source src="/videos/Haus.webm" type="video/webm" />
  <source src="/videos/Haus-optimized.mp4" type="video/mp4" />
</video>
EOF

echo ""
echo "🚀 SEO Benefits:"
echo "✅ Faster page load times"
echo "✅ Better Core Web Vitals scores"
echo "✅ Improved mobile experience"
echo "✅ Reduced bandwidth usage"
echo "✅ Higher search rankings"
