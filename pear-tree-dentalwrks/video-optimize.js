#!/usr/bin/env node

/**
 * Video Optimization Script for Pear Tree Dental
 * Optimizes videos for web use while maintaining quality
 *
 * Usage: node video-optimize.js [input-file] [output-file]
 * Example: node video-optimize.js public/videos/Haus.mp4 public/videos/Haus-optimized.mp4
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration for web-optimized video
const VIDEO_CONFIG = {
  // Target file size: 3-5MB for hero videos
  targetBitrate: '800k',  // Video bitrate
  audioBitrate: '128k',   // Audio bitrate
  maxWidth: 1920,         // Max width for desktop
  maxHeight: 1080,        // Max height for desktop
  fps: 30,                // Frame rate
  format: 'mp4',          // Output format
  codec: 'libx264',       // Video codec for compatibility
  audioCodec: 'aac',      // Audio codec
  preset: 'medium',       // Encoding speed vs compression
  crf: 23,                // Constant Rate Factor (18-28, lower = better quality)
};

// Create multiple versions for responsive design
const RESPONSIVE_VERSIONS = [
  {
    name: 'desktop',
    width: 1920,
    height: 1080,
    bitrate: '800k',
    suffix: ''
  },
  {
    name: 'tablet',
    width: 1024,
    height: 576,
    bitrate: '500k',
    suffix: '-tablet'
  },
  {
    name: 'mobile',
    width: 720,
    height: 405,
    bitrate: '300k',
    suffix: '-mobile'
  }
];

function checkFFmpeg() {
  try {
    execSync('ffmpeg -version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    console.error('❌ FFmpeg not found. Please install FFmpeg first:');
    console.error('   - Ubuntu/Debian: sudo apt install ffmpeg');
    console.error('   - macOS: brew install ffmpeg');
    console.error('   - Windows: Download from https://ffmpeg.org/download.html');
    return false;
  }
}

function getVideoInfo(inputFile) {
  try {
    const output = execSync(`ffprobe -v quiet -print_format json -show_format -show_streams "${inputFile}"`, { encoding: 'utf8' });
    return JSON.parse(output);
  } catch (error) {
    console.error('❌ Error getting video info:', error.message);
    return null;
  }
}

function formatFileSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  if (bytes === 0) return '0 Bytes';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
}

function optimizeVideo(inputFile, outputFile, config = {}) {
  const {
    width = VIDEO_CONFIG.maxWidth,
    height = VIDEO_CONFIG.maxHeight,
    bitrate = VIDEO_CONFIG.targetBitrate,
    audioBitrate = VIDEO_CONFIG.audioBitrate,
    suffix = ''
  } = config;

  const outputFileWithSuffix = suffix ?
    outputFile.replace(/(\.[^.]+)$/, `${suffix}$1`) :
    outputFile;

  // FFmpeg command for optimization
  const ffmpegCmd = [
    'ffmpeg',
    '-i', `"${inputFile}"`,
    '-c:v', VIDEO_CONFIG.codec,
    '-c:a', VIDEO_CONFIG.audioCodec,
    '-preset', VIDEO_CONFIG.preset,
    '-crf', VIDEO_CONFIG.crf,
    '-maxrate', bitrate,
    '-bufsize', `${parseInt(bitrate) * 2}k`,
    '-b:a', audioBitrate,
    '-vf', `scale='min(${width},iw)':'min(${height},ih)':force_original_aspect_ratio=decrease,pad=${width}:${height}:(ow-iw)/2:(oh-ih)/2:black`,
    '-r', VIDEO_CONFIG.fps,
    '-movflags', '+faststart', // Enable streaming
    '-f', VIDEO_CONFIG.format,
    '-y', // Overwrite output file
    `"${outputFileWithSuffix}"`
  ].join(' ');

  console.log(`🎬 Optimizing for ${config.name || 'default'} (${width}x${height})...`);

  try {
    execSync(ffmpegCmd, { stdio: 'inherit' });

    // Check file size
    const stats = fs.statSync(outputFileWithSuffix);
    console.log(`✅ Created: ${outputFileWithSuffix} (${formatFileSize(stats.size)})`);

    return outputFileWithSuffix;
  } catch (error) {
    console.error(`❌ Error optimizing video:`, error.message);
    return null;
  }
}

function createWebMVersion(inputFile, outputFile) {
  const webmFile = outputFile.replace(/\.mp4$/, '.webm');

  const ffmpegCmd = [
    'ffmpeg',
    '-i', `"${inputFile}"`,
    '-c:v', 'libvpx-vp9',
    '-c:a', 'libopus',
    '-crf', '30',
    '-b:v', '0',
    '-b:a', '128k',
    '-vf', `scale='min(${VIDEO_CONFIG.maxWidth},iw)':'min(${VIDEO_CONFIG.maxHeight},ih)':force_original_aspect_ratio=decrease`,
    '-r', VIDEO_CONFIG.fps,
    '-f', 'webm',
    '-y',
    `"${webmFile}"`
  ].join(' ');

  console.log('🎬 Creating WebM version for modern browsers...');

  try {
    execSync(ffmpegCmd, { stdio: 'inherit' });
    const stats = fs.statSync(webmFile);
    console.log(`✅ Created: ${webmFile} (${formatFileSize(stats.size)})`);
    return webmFile;
  } catch (error) {
    console.error(`❌ Error creating WebM version:`, error.message);
    return null;
  }
}

function generateVideoComponent(videoName, versions) {
  const componentCode = `
// Auto-generated responsive video component for ${videoName}
import React from 'react';

interface ${videoName.charAt(0).toUpperCase() + videoName.slice(1)}VideoProps {
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  poster?: string;
}

export const ${videoName.charAt(0).toUpperCase() + videoName.slice(1)}Video: React.FC<${videoName.charAt(0).toUpperCase() + videoName.slice(1)}VideoProps> = ({
  className = "",
  autoPlay = false,
  muted = true,
  loop = true,
  controls = false,
  poster
}) => {
  return (
    <video
      className={className}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      controls={controls}
      poster={poster}
      playsInline
      preload="metadata"
    >
      {/* WebM for modern browsers */}
      <source
        srcSet="
          /videos/${videoName}-mobile.webm 720w,
          /videos/${videoName}-tablet.webm 1024w,
          /videos/${videoName}.webm 1920w
        "
        sizes="(max-width: 768px) 720px, (max-width: 1024px) 1024px, 1920px"
        type="video/webm"
      />

      {/* MP4 fallback */}
      <source
        srcSet="
          /videos/${videoName}-mobile.mp4 720w,
          /videos/${videoName}-tablet.mp4 1024w,
          /videos/${videoName}.mp4 1920w
        "
        sizes="(max-width: 768px) 720px, (max-width: 1024px) 1024px, 1920px"
        type="video/mp4"
      />

      {/* Fallback message */}
      <p>Your browser does not support the video tag.</p>
    </video>
  );
};

export default ${videoName.charAt(0).toUpperCase() + videoName.slice(1)}Video;
`;

  const componentPath = `src/components/videos/${videoName.charAt(0).toUpperCase() + videoName.slice(1)}Video.tsx`;

  // Create directory if it doesn't exist
  const dir = path.dirname(componentPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(componentPath, componentCode.trim());
  console.log(`📱 Generated React component: ${componentPath}`);
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    // Default: optimize Haus.mp4
    args[0] = 'public/videos/Haus.mp4';
    args[1] = 'public/videos/Haus-optimized.mp4';
  }

  const [inputFile, outputFile] = args;

  if (!inputFile || !outputFile) {
    console.error('Usage: node video-optimize.js [input-file] [output-file]');
    console.error('Example: node video-optimize.js public/videos/Haus.mp4 public/videos/Haus-optimized.mp4');
    process.exit(1);
  }

  if (!fs.existsSync(inputFile)) {
    console.error(`❌ Input file not found: ${inputFile}`);
    process.exit(1);
  }

  if (!checkFFmpeg()) {
    process.exit(1);
  }

  console.log('🎥 Video Optimization Script - Pear Tree Dental');
  console.log('=' .repeat(50));

  // Get video info
  const videoInfo = getVideoInfo(inputFile);
  if (videoInfo) {
    const videoStream = videoInfo.streams.find(s => s.codec_type === 'video');
    const audioStream = videoInfo.streams.find(s => s.codec_type === 'audio');

    console.log('📊 Input Video Information:');
    console.log(`   File: ${inputFile}`);
    console.log(`   Size: ${formatFileSize(fs.statSync(inputFile).size)}`);
    console.log(`   Duration: ${Math.round(parseFloat(videoInfo.format.duration))}s`);
    console.log(`   Resolution: ${videoStream.width}x${videoStream.height}`);
    console.log(`   Codec: ${videoStream.codec_name}`);
    console.log(`   Bitrate: ${Math.round(parseInt(videoInfo.format.bit_rate) / 1000)}k`);
    console.log('');
  }

  const originalSize = fs.statSync(inputFile).size;
  console.log(`📁 Original file size: ${formatFileSize(originalSize)}`);
  console.log('');

  // Optimize for different screen sizes
  const optimizedFiles = [];

  for (const version of RESPONSIVE_VERSIONS) {
    const optimizedFile = optimizeVideo(inputFile, outputFile, version);
    if (optimizedFile) {
      optimizedFiles.push(optimizedFile);

      // Create WebM version for modern browsers
      createWebMVersion(optimizedFile, optimizedFile);
    }
  }

  if (optimizedFiles.length > 0) {
    console.log('');
    console.log('✅ Optimization Complete!');
    console.log('=' .repeat(50));

    let totalSavings = 0;
    optimizedFiles.forEach(file => {
      const optimizedSize = fs.statSync(file).size;
      const savings = originalSize - optimizedSize;
      totalSavings += savings;

      console.log(`📁 ${file}:`);
      console.log(`   Size: ${formatFileSize(optimizedSize)}`);
      console.log(`   Saved: ${formatFileSize(savings)} (${Math.round((savings / originalSize) * 100)}%)`);
    });

    console.log('');
    console.log(`🎉 Total space saved: ${formatFileSize(totalSavings)}`);
    console.log(`📊 Average file size reduction: ${Math.round((totalSavings / (originalSize * optimizedFiles.length)) * 100)}%`);

    // Generate React component
    const videoName = path.basename(outputFile, '.mp4').replace('-optimized', '');
    generateVideoComponent(videoName, optimizedFiles);

    console.log('');
    console.log('🎯 SEO & Performance Benefits:');
    console.log('   ✅ Faster page load times');
    console.log('   ✅ Reduced bandwidth usage');
    console.log('   ✅ Better mobile experience');
    console.log('   ✅ Improved Core Web Vitals');
    console.log('   ✅ Responsive video delivery');

  } else {
    console.error('❌ No files were optimized');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  optimizeVideo,
  createWebMVersion,
  generateVideoComponent,
  VIDEO_CONFIG,
  RESPONSIVE_VERSIONS
};
