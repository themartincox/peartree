# 🎥 Video Optimization Guide - Pear Tree Dental

## 📊 Current Status: Haus.mp4
- **Current Size**: 14MB (❌ Too large for web use)
- **Target Size**: 2-5MB (✅ Optimal for web)
- **SEO Impact**: Large videos slow page load, hurt Core Web Vitals
- **User Experience**: Slow loading on mobile, high bandwidth usage

## 🚀 Quick Solutions (No Software Installation Required)

### Option 1: Online Video Compressors (Immediate)
Use these free online tools to optimize your video right now:

#### **Recommended Online Tools:**
1. **CloudConvert** (https://cloudconvert.com/mp4-converter)
   - Upload Haus.mp4
   - Set quality to 70-80%
   - Choose dimensions: 1920x1080 max
   - Download optimized version

2. **Online-Convert.com** (https://video.online-convert.com/compress-mp4)
   - Upload your video
   - Set bitrate: 800-1200 kbps
   - Keep audio quality at 128 kbps
   - Download result

3. **FreeConvert.com** (https://www.freeconvert.com/video-compressor)
   - Drag & drop Haus.mp4
   - Adjust compression: 60-70%
   - Download compressed file

#### **Recommended Settings for Online Tools:**
```
Resolution: 1920x1080 (or original if smaller)
Bitrate: 800-1200 kbps
Audio: 128 kbps, AAC
Format: MP4 (H.264)
Frame Rate: 30 fps
Quality: 70-80%
```

### Option 2: Browser-Based Compression
Use **Clideo** (https://clideo.com/compress-video) for quick compression:
1. Upload Haus.mp4
2. Choose "Medium compression"
3. Download result (should be 3-6MB)

## 🛠️ Advanced Local Optimization (Recommended)

### Prerequisites
Install FFmpeg on your system:

**Windows:**
1. Download from https://ffmpeg.org/download.html
2. Extract and add to PATH
3. Restart terminal

**macOS:**
```bash
brew install ffmpeg
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt update && sudo apt install ffmpeg
```

### Using Our Optimization Script

#### Quick Start:
```bash
cd pear-tree-dental
node video-optimize.js
```

This will automatically optimize `public/videos/Haus.mp4` and create:
- ✅ **Haus-optimized.mp4** (Desktop - ~3-4MB)
- ✅ **Haus-optimized-tablet.mp4** (Tablet - ~2-3MB)
- ✅ **Haus-optimized-mobile.mp4** (Mobile - ~1-2MB)
- ✅ **WebM versions** for modern browsers
- ✅ **React component** for responsive video

#### Custom Optimization:
```bash
node video-optimize.js input.mp4 output.mp4
```

### Manual FFmpeg Commands

#### Basic Optimization (Recommended):
```bash
ffmpeg -i public/videos/Haus.mp4 \
  -c:v libx264 -crf 23 -preset medium \
  -c:a aac -b:a 128k \
  -vf "scale='min(1920,iw)':'min(1080,ih)':force_original_aspect_ratio=decrease" \
  -movflags +faststart \
  public/videos/Haus-optimized.mp4
```

#### Mobile-Optimized Version:
```bash
ffmpeg -i public/videos/Haus.mp4 \
  -c:v libx264 -crf 28 -preset medium \
  -c:a aac -b:a 96k \
  -vf "scale=720:405" \
  -r 30 -movflags +faststart \
  public/videos/Haus-mobile.mp4
```

#### WebM for Modern Browsers:
```bash
ffmpeg -i public/videos/Haus.mp4 \
  -c:v libvpx-vp9 -crf 30 \
  -c:a libopus -b:a 128k \
  -vf "scale='min(1920,iw)':'min(1080,ih)':force_original_aspect_ratio=decrease" \
  public/videos/Haus.webm
```

## 📱 Implementation in React

### Basic Video Component:
```tsx
// src/components/HausVideo.tsx
import React from 'react';

interface HausVideoProps {
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  controls?: boolean;
}

export const HausVideo: React.FC<HausVideoProps> = ({
  className = "",
  autoPlay = false,
  muted = true,
  controls = false
}) => {
  return (
    <video
      className={className}
      autoPlay={autoPlay}
      muted={muted}
      controls={controls}
      loop
      playsInline
      preload="metadata"
    >
      {/* WebM for modern browsers */}
      <source src="/videos/Haus.webm" type="video/webm" />

      {/* MP4 fallback */}
      <source src="/videos/Haus-optimized.mp4" type="video/mp4" />

      <p>Your browser does not support the video tag.</p>
    </video>
  );
};
```

### Responsive Video Component:
```tsx
// src/components/ResponsiveHausVideo.tsx
import React from 'react';

export const ResponsiveHausVideo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <video
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    >
      {/* Responsive WebM sources */}
      <source
        srcSet="
          /videos/Haus-mobile.webm 720w,
          /videos/Haus-tablet.webm 1024w,
          /videos/Haus.webm 1920w
        "
        sizes="(max-width: 768px) 720px, (max-width: 1024px) 1024px, 1920px"
        type="video/webm"
      />

      {/* Responsive MP4 fallback */}
      <source
        srcSet="
          /videos/Haus-mobile.mp4 720w,
          /videos/Haus-tablet.mp4 1024w,
          /videos/Haus-optimized.mp4 1920w
        "
        sizes="(max-width: 768px) 720px, (max-width: 1024px) 1024px, 1920px"
        type="video/mp4"
      />

      <p>Your browser does not support the video tag.</p>
    </video>
  );
};
```

## 🎯 Target Specifications

### Desktop Version (Primary):
- **Resolution**: 1920x1080 max
- **Bitrate**: 800-1200 kbps
- **File Size**: 3-5MB
- **Codec**: H.264 (MP4) + VP9 (WebM)

### Tablet Version:
- **Resolution**: 1024x576
- **Bitrate**: 500-700 kbps
- **File Size**: 2-3MB
- **Use Case**: iPad, tablets

### Mobile Version:
- **Resolution**: 720x405
- **Bitrate**: 300-500 kbps
- **File Size**: 1-2MB
- **Use Case**: Smartphones

## 📈 SEO & Performance Benefits

### Before Optimization (14MB):
- ❌ Slow page load (3-8 seconds)
- ❌ Poor Core Web Vitals scores
- ❌ High mobile data usage
- ❌ Low search rankings
- ❌ Poor user experience

### After Optimization (2-5MB):
- ✅ Fast page load (<2 seconds)
- ✅ Excellent Core Web Vitals
- ✅ Mobile-friendly
- ✅ Better SEO rankings
- ✅ Improved user engagement

## 🔧 Project Integration

### 1. File Structure:
```
public/videos/
├── Haus-optimized.mp4      # Desktop (3-4MB)
├── Haus-tablet.mp4         # Tablet (2-3MB)
├── Haus-mobile.mp4         # Mobile (1-2MB)
├── Haus.webm               # Desktop WebM
├── Haus-tablet.webm        # Tablet WebM
└── Haus-mobile.webm        # Mobile WebM
```

### 2. Component Location:
```
src/components/videos/
└── HausVideo.tsx           # Auto-generated component
```

### 3. Usage in Pages:
```tsx
import { HausVideo } from '@/components/videos/HausVideo';

// In your page component:
<HausVideo
  className="w-full h-auto rounded-lg"
  autoPlay={true}
  muted={true}
  controls={false}
/>
```

## 🚨 Immediate Action Required

### Step 1: Quick Fix (5 minutes)
1. Go to https://cloudconvert.com/mp4-converter
2. Upload `/uploads/Haus.mp4`
3. Set quality to 75%
4. Download and replace current file
5. **Expected result**: ~4-6MB file

### Step 2: Proper Optimization (15 minutes)
1. Install FFmpeg (see instructions above)
2. Run: `node video-optimize.js`
3. Move optimized files to correct locations
4. Update video component usage

### Step 3: Test & Deploy
1. Test video loading on mobile/desktop
2. Check Core Web Vitals scores
3. Deploy optimized version

## 📊 Quality vs Size Comparison

| Quality Setting | File Size | Load Time (3G) | Recommended Use |
|----------------|-----------|----------------|-----------------|
| Original (14MB) | 14MB | 15-30s | ❌ Never |
| High (85%) | 6-8MB | 8-12s | Desktop only |
| **Recommended (75%)** | **3-5MB** | **3-6s** | **All devices** |
| Medium (65%) | 2-3MB | 2-4s | Mobile primary |
| Low (50%) | 1-2MB | 1-2s | Mobile backup |

## 🎬 Video Best Practices

### Technical:
- ✅ Use H.264 codec for compatibility
- ✅ Add WebM versions for modern browsers
- ✅ Enable "fast start" for streaming
- ✅ Optimize audio to 128 kbps AAC
- ✅ Set proper dimensions (avoid upscaling)

### SEO:
- ✅ Add proper video schema markup
- ✅ Include video transcripts
- ✅ Use descriptive filenames
- ✅ Implement lazy loading
- ✅ Provide poster images

### UX:
- ✅ Auto-play muted videos
- ✅ Provide play/pause controls
- ✅ Show loading indicators
- ✅ Graceful fallbacks for unsupported browsers
- ✅ Responsive sizing

## 🆘 Need Help?

If you encounter issues:

1. **Check FFmpeg installation**: `ffmpeg -version`
2. **Verify file paths**: Ensure `Haus.mp4` is in `/public/videos/`
3. **Use online tools**: If local optimization fails
4. **Test on multiple devices**: Ensure compatibility
5. **Monitor performance**: Use PageSpeed Insights

---

**🎯 Goal**: Reduce file size from 14MB to 3-5MB while maintaining visual quality for optimal web performance and SEO.
