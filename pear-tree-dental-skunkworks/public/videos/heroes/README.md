# 🎬 Hero Videos

This directory contains video files for service page heroes across the Pear Tree Dental website.

## 📁 Video Structure

```
videos/heroes/
├── cosmetic-dentistry-hero.mp4       # Main cosmetic services page
├── general-dentistry-hero.mp4        # Main general services page
├── restorative-dentistry-hero.mp4    # Main restorative services page
├── dental-implants-hero.mp4          # Main implants page
├── orthodontics-hero.mp4             # Main orthodontics page
├── hygiene-therapy-hero.mp4          # Main hygiene page
├── emergency-dental-hero.mp4         # Main emergency page
└── specific-treatments/
    ├── teeth-whitening-hero.mp4
    ├── dental-veneers-hero.mp4
    ├── composite-bonding-hero.mp4
    └── smile-makeover-hero.mp4
```

## 📏 Video Specifications

### **Required Format**
- **Format:** MP4 (H.264 codec)
- **Container:** `.mp4`
- **Dimensions:** 1200x800px (3:2 aspect ratio)
- **Duration:** 10-30 seconds (recommended)
- **File Size:** Target under 5MB for optimal loading

### **Technical Requirements**
- **Codec:** H.264 (widely supported)
- **Frame Rate:** 30fps or 24fps
- **Audio:** None required (videos auto-mute)
- **Quality:** High definition, professional production
- **Compression:** Optimized for web streaming

### **Content Guidelines**
- **Professional dental procedures** in action
- **Smooth, stable footage** (avoid shaky camera work)
- **Good lighting** - bright, clinical but warm
- **Real patients** showing genuine procedures/results
- **Loop-friendly** - should look natural when repeating
- **No text overlays** - hero text is added by the system

## 🚀 Implementation Status

### **Current Video Heroes:**
- [x] **Cosmetic Dentistry** - `/videos/heroes/cosmetic-dentistry-hero.mp4`
  - *Recommended content: Smile transformation, teeth whitening procedure*
- [ ] **General Dentistry** - `/videos/heroes/general-dentistry-hero.mp4`
- [ ] **Restorative Dentistry** - `/videos/heroes/restorative-dentistry-hero.mp4`
- [ ] **Dental Implants** - `/videos/heroes/dental-implants-hero.mp4`
- [ ] **Orthodontics** - `/videos/heroes/orthodontics-hero.mp4`
- [ ] **Hygiene Therapy** - `/videos/heroes/hygiene-therapy-hero.mp4`
- [ ] **Emergency Dentistry** - `/videos/heroes/emergency-dental-hero.mp4`

## 🔧 How Video Heroes Work

### **Auto-Detection**
1. System checks for video file first
2. If video exists → plays video with poster image
3. If no video → shows static hero image
4. If neither exists → shows default practice image

### **Poster Images**
- Each video should have a corresponding poster image
- Located in `/images/heroes/` with same name but `.webp` extension
- Example: `cosmetic-dentistry-hero.mp4` uses `cosmetic-dentistry-hero.webp` as poster

### **Video Features**
- **Auto-play:** Starts immediately (muted)
- **Loop:** Repeats seamlessly
- **Muted:** No audio (web best practice)
- **Responsive:** Scales to all device sizes
- **Fallback:** Shows poster if video fails to load
- **Mobile-optimized:** Works on all devices

## 📱 Device Support

### **Desktop**
- Full video playback with hover controls
- High quality streaming
- Smooth looping

### **Mobile**
- Optimized for touch devices
- Reduced file size for faster loading
- Preserves battery life with efficient playback

### **Accessibility**
- Poster images provide fallback for screen readers
- Videos respect user's motion preferences
- No auto-playing audio (follows web standards)

## 🎯 Content Ideas by Service

### **Cosmetic Dentistry**
- Teeth whitening procedure
- Veneer application process
- Before/after smile reveals
- Digital smile design in action

### **General Dentistry**
- Routine dental examination
- Professional cleaning procedure
- Family-friendly dental care
- Modern dental technology in use

### **Dental Implants**
- Implant placement procedure
- Healing timeline visualization
- Final crown attachment
- Patient testimonial (visual)

### **Orthodontics**
- Clear aligner fitting
- Invisalign treatment process
- Teeth movement progression
- Smile transformation timeline

## ⚡ Performance Optimization

### **File Size Guidelines**
- **Under 2MB:** Excellent (loads instantly)
- **2-5MB:** Good (loads quickly on most connections)
- **Over 5MB:** Consider compression or shorter duration

### **Loading Strategy**
- Videos preload metadata only
- Full download starts when in viewport
- Poster image shows immediately
- Graceful fallback to images if needed

## 📞 Upload Instructions

1. **Prepare your video** according to specifications above
2. **Name the file** exactly as specified in the structure
3. **Upload to** `/public/videos/heroes/` directory
4. **Ensure poster image** exists in `/images/heroes/`
5. **Test on multiple devices** to verify performance

## 🔄 Fallback System

The hero system provides multiple levels of fallback:

1. **Primary:** Video file (if exists)
2. **Secondary:** Hero image (if exists)
3. **Tertiary:** Default practice image (always available)

This ensures every page always has a hero visual, even during uploads or if files are missing.

---

**Video Hero System Status:** ✅ Ready for uploads
**Current Priority:** Cosmetic dentistry video
**Next Steps:** Upload `cosmetic-dentistry-hero.mp4`
