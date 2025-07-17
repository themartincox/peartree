# 🦷 Pear Tree Dental Website - Client Handover Guide

## 📋 Overview
This guide will help you manage and update your Pear Tree Dental website. The website is built with modern technologies and deployed through GitHub, making updates safe and trackable.

## 🚀 Quick Start

### What You Need
- ✅ GitHub account (we'll set this up for you)
- ✅ Basic computer skills
- ✅ 15 minutes for your first update

### Your Website Lives Here
- **🌐 Live Website**: https://yoursite.netlify.app
- **📂 GitHub Repository**: https://github.com/youraccount/pear-tree-dental
- **⚙️ Admin Panel**: Access via GitHub web interface

---

## 📁 Understanding Your Website Structure

### Key Folders You'll Work With
```
pear-tree-dental/
├── src/app/                   # 🏠 Main pages
│   ├── page.tsx              # Homepage
│   ├── services/             # Service pages
│   ├── membership/           # Membership pages
│   └── about/                # About pages
├── src/components/           # 🔧 Reusable parts
├── src/lib/                  # ⚙️ Settings & data
├── public/                   # 🖼️ Images & files
└── .same/                    # 📚 Documentation
```

---

## ✏️ Making Common Updates

### 1. 📞 Updating Contact Information

**📍 Location**: `src/lib/constants.ts`

**What you can change**:
- Phone numbers
- Email addresses
- Opening hours
- Practice address

**How to update**:
1. Go to GitHub repository
2. Navigate to `src/lib/constants.ts`
3. Click the pencil icon (Edit)
4. Make your changes
5. Add description: "Updated phone number"
6. Click "Commit changes"

### 2. 🦷 Adding New Services

**📍 Location**: `src/app/services/`

**Steps**:
1. Copy existing service page folder
2. Rename folder to your new service
3. Edit the `page.tsx` file inside
4. Update service name, description, pricing
5. Add to services menu in Navigation

### 3. 💰 Updating Prices

**Important locations**:
- `src/app/membership/page.tsx` (membership plans)
- `src/app/pricing/page.tsx` (treatment pricing)
- Individual service pages

**⚠️ Important**: Update prices in ALL locations for consistency.

### 4. 🖼️ Changing Images

**📍 Location**: `public/` folder

**Steps**:
1. Upload new image to `public/` folder
2. Use descriptive filename
3. Update image reference in relevant page
4. Remove old image if not needed

---

## 🔄 GitHub Workflow

### Making Your First Update

#### Step 1: Log into GitHub
- Go to https://github.com
- Sign in with your account

#### Step 2: Navigate to Repository
- Click "pear-tree-dental" repository
- You'll see all website files

#### Step 3: Make an Edit
- Click file you want to edit
- Click pencil icon (✏️)
- Make your changes
- Preview if available

#### Step 4: Save Changes
- Scroll to bottom
- Add description of changes
- Click "Commit changes"

#### Step 5: See Changes Live
- Changes auto-deploy to website
- Wait 2-3 minutes for updates
- Check your live website

### ✅ Best Practices

**DO**:
- ✅ Make small, focused changes
- ✅ Write clear descriptions when saving
- ✅ Test changes if possible
- ✅ Keep backups of important content

**DON'T**:
- ❌ Make multiple large changes at once
- ❌ Delete files unless certain
- ❌ Edit code files without understanding
- ❌ Skip descriptions when saving

---

## 📝 Content Management

### Writing Effective Content

**For Service Pages**:
- Start with patient benefits
- Use simple, clear language
- Include pricing information
- Add clear call-to-action buttons

**For Homepage**:
- Keep hero section focused
- Highlight unique selling points
- Make membership benefits obvious
- Include trust signals

### 🔍 SEO Best Practices

- **Page Titles**: Under 60 characters
- **Descriptions**: 150-160 characters, include location
- **Headers**: Use H1 for main title, H2 for sections
- **Images**: Descriptive filenames and alt text

---

## 🚨 Emergency Procedures

### Website Down or Broken

1. **Check Status**
   - Visit your website
   - Note error messages
   - Check if affecting all pages

2. **Quick Assessment**
   - Go to GitHub repository
   - Look for recent commits
   - Note any recent changes

3. **Contact Support**
   - Email developer immediately
   - Include: what's broken, when happened, recent changes
   - Include screenshots

### Urgent Content Updates

**Business Hours Change**:
1. Update `src/lib/constants.ts`
2. Check homepage displays correctly
3. Update Google My Business separately

**Emergency Contact**:
1. Update constants file
2. Check contact forms work
3. Update footer and contact pages

---

## 🔧 Troubleshooting

### Common Issues

**Changes Not Appearing**:
- Wait 5-10 minutes for deployment
- Clear browser cache (Ctrl+F5)
- Try incognito/private browsing

**Images Not Loading**:
- Check filename matches exactly
- Ensure image in `public/` folder
- Check file size (under 2MB)

**Broken Links**:
- Verify page exists in repository
- Check spelling in link paths
- Ensure internal links start with `/`

### Getting Help

**Before contacting support**:
1. Note exactly what you were doing
2. Record error messages
3. Note which browser
4. Try in incognito mode

---

## 📅 Content Update Calendar

### Weekly Tasks
- [ ] Check contact forms working
- [ ] Review opening hours correct
- [ ] Monitor website speed

### Monthly Tasks
- [ ] Update team photos if needed
- [ ] Review service descriptions
- [ ] Check pricing accuracy
- [ ] Update testimonials

### Quarterly Tasks
- [ ] Review all content accuracy
- [ ] Update practice information
- [ ] Check competitor websites
- [ ] Plan content improvements

---

## 📞 Contact Information

### Technical Support
- **Developer**: [Your Contact Information]
- **Response Time**: 24hrs non-emergency, 4hrs urgent
- **Emergency Contact**: [Emergency Phone/Email]

### Website Services
- **Hosting**: Netlify
- **Repository**: GitHub
- **Domain**: [Your Domain Provider]

---

## 📚 Quick Reference

### File Types You'll See
- `.tsx` - React page components
- `.ts` - TypeScript configuration
- `.md` - Documentation files
- `.json` - Configuration files

### Emergency Checklist
When something goes wrong, have ready:
- [ ] GitHub username/password
- [ ] Website URL
- [ ] Recent changes made
- [ ] Error messages/screenshots
- [ ] Developer contact info

---

## 🎯 Key Takeaways

1. **Always describe your changes** when saving
2. **Test major updates** during low-traffic times
3. **Keep this guide handy** for quick reference
4. **Don't hesitate to ask** your developer questions
5. **Make small changes** rather than large ones

---

*This guide was created for Pear Tree Dental Practice. Keep this document accessible and contact your developer with any questions.*

**Last Updated**: June 2025
**Version**: 1.0
