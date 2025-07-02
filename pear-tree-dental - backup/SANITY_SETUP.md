# 🚀 Sanity.io Integration Setup Guide

## Overview

Your Postino website is now ready for Sanity.io integration! This guide will walk you through connecting your site to Sanity.io for a complete content management system.

## ✅ What's Already Set Up

### 1. **Sanity Dependencies Installed**
- `@sanity/client` - For data fetching
- `@sanity/image-url` - For image optimization
- `next-sanity` - Next.js integration

### 2. **Schema Configuration**
- **Blog Posts** - Complete blog management with SEO
- **Authors** - Team member profiles
- **Categories** - Content organization
- **Case Studies** - Client success stories
- **Homepage Content** - Dynamic homepage management

### 3. **Smart Fallback System**
- Site works immediately with sample data
- Seamlessly switches to Sanity when configured
- No downtime during setup

## 🛠️ Setup Steps

### Step 1: Create Sanity Project

1. **Go to [sanity.io](https://sanity.io)** and sign in
2. **Create a new project:**
   - Click "Create new project"
   - Choose "Blog" template or "Blank project"
   - Project name: `postino-website`
   - Dataset: `production`

3. **Note your Project Details:**
   - Project ID (e.g., `abc123def`)
   - Dataset name (usually `production`)

### Step 2: Configure Environment Variables

1. **Copy the environment template:**
```bash
cd postino-website
cp .env.local.example .env.local
```

2. **Add your Sanity credentials to `.env.local`:**
```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

3. **Get your API Token:**
   - Go to sanity.io/manage
   - Select your project
   - Go to "API" → "Tokens"
   - Create new token with "Editor" permissions
   - Copy the token to your `.env.local`

### Step 3: Install Dependencies and Set Up Sanity

```bash
# Install dependencies
bun install

# Initialize Sanity Studio (if you want local studio)
bunx sanity init

# When prompted:
# - Select "Use an existing project"
# - Choose your project ID
# - Use default settings
```

### Step 4: Import Schema to Sanity

1. **Go to your Sanity project dashboard**
2. **Navigate to "Schema" section**
3. **Upload the schema files** from `/sanity/schemas/`

Or use Sanity CLI:
```bash
# Deploy schemas to Sanity
bunx sanity schema deploy
```

### Step 5: Add Initial Content

1. **Access Sanity Studio:**
   - Go to `https://your-project-id.sanity.studio`
   - Or run `bunx sanity start` for local studio

2. **Create Initial Data:**

   **Authors:**
   - Sarah Mitchell (CEO)
   - James Rodriguez (Marketing Director)
   - Emma Thompson (Content Strategist)
   - David Chen (SEO Specialist)

   **Categories:**
   - AI & Marketing
   - Automation
   - Content Strategy
   - SEO
   - Growth Strategy

   **Homepage Content:**
   - Hero title, subtitle, description
   - Statistics (revenue, leads, time, ROI)
   - CTA button text

   **Blog Posts:**
   - Transfer existing blog content
   - Set featured posts
   - Add SEO metadata

   **Case Studies:**
   - Add your client success stories
   - Include metrics and testimonials

### Step 6: Test Integration

1. **Restart your development server:**
```bash
bun run dev
```

2. **Visit your site:**
   - Homepage should show Sanity data
   - Blog should display your Sanity posts
   - Admin notice should disappear

3. **Test admin functionality:**
   - Visit `/admin` to see the admin interface
   - Content should sync with Sanity

## 🎯 Advanced Configuration

### Custom Domain for Sanity Studio

```bash
# Configure custom studio URL
bunx sanity configure
```

### Preview Mode (Optional)

Add preview functionality to see drafts:

```typescript
// pages/api/preview.ts
export default function handler(req, res) {
  res.setPreviewData({})
  res.redirect(req.query.slug || '/')
}
```

### Webhooks for Real-time Updates

Set up webhooks in Sanity dashboard:
- URL: `https://your-domain.com/api/revalidate`
- Trigger: On document changes

## 🔒 Security & Performance

### Environment Variables

**Never commit these to Git:**
- `.env.local` is in `.gitignore`
- Use separate tokens for development/production

### API Token Permissions

**Recommended permissions:**
- **Development:** Editor permissions
- **Production:** Viewer permissions (if read-only)

### CDN Configuration

Sanity images are automatically optimized:
```typescript
// Example usage
import { urlFor } from '@/lib/sanity'

<img src={urlFor(image).width(800).height(400).url()} />
```

## 📝 Content Management Workflow

### 1. Blog Posts
- Create in Sanity Studio
- Set SEO metadata
- Choose author and category
- Add tags and featured image
- Publish when ready

### 2. Case Studies
- Add client information
- Input challenge and solution
- Add quantified results
- Include testimonials
- Set as featured if applicable

### 3. Homepage Updates
- Edit hero section content
- Update statistics
- Modify CTA text
- Changes appear immediately

## 🚀 Deployment

### Netlify Deployment

Your existing Netlify configuration works automatically:

```toml
# netlify.toml (already configured)
[build]
  command = "bun run build"
  publish = ".next"
```

### Environment Variables on Netlify

Add to Netlify dashboard:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_TOKEN`

## 🔧 Troubleshooting

### "Sanity not configured" Message

1. Check `.env.local` exists and has correct values
2. Restart development server
3. Verify project ID and dataset name

### Build Errors

1. Ensure all environment variables are set
2. Check Sanity project permissions
3. Verify schema is deployed to Sanity

### Content Not Appearing

1. Check if content is published in Sanity
2. Verify API token has correct permissions
3. Clear browser cache

## 📚 Next Steps

### 1. Content Migration
- Transfer existing blog posts to Sanity
- Add case studies and testimonials
- Update homepage content

### 2. Team Training
- Train team members on Sanity Studio
- Set up user roles and permissions
- Create content guidelines

### 3. SEO Optimization
- Add meta tags to all content
- Optimize images with alt text
- Set up structured data

## 🎉 You're Ready!

Once configured, you'll have:
- ✅ Professional CMS with Sanity Studio
- ✅ Real-time content updates
- ✅ SEO-optimized blog management
- ✅ Case study management
- ✅ Homepage content control
- ✅ Image optimization
- ✅ Multi-user collaboration

Your website will seamlessly transition from demo mode to a fully functional, professionally managed site with Sanity.io powering the content management backend!

## 📞 Support

Need help? The integration is designed to be straightforward, but if you encounter issues:

1. Check this guide thoroughly
2. Verify all environment variables
3. Ensure Sanity project is properly configured
4. Test with sample content first

The system is built to be robust and user-friendly - once connected, content management becomes effortless!
