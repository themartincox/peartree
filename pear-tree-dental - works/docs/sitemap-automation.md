# Automated Sitemap System

This project includes an automated sitemap generation system that keeps the `sitemap.xml` file up-to-date with your site's current structure.

## 🚀 Features

- **Daily Automatic Updates**: Runs every day at 2 AM UTC via GitHub Actions
- **Change Detection**: Only updates when actual changes are detected
- **Smart Prioritization**: Automatically assigns priorities based on page types and locations
- **Location-Aware**: Understands Arnold, Mapperley, and Gedling location hierarchies
- **Manual Triggering**: Can be run manually when needed
- **Comprehensive Logging**: Tracks all updates with detailed logs

## 📁 System Components

### Core Files
- `src/utils/sitemap-generator.ts` - Main sitemap generation logic
- `scripts/update-sitemap.js` - Executable script for updates
- `.github/workflows/update-sitemap.yml` - GitHub Actions workflow
- `public/sitemap.xml` - Generated sitemap file
- `logs/sitemap-updates.log` - Update history

### Package Scripts
```bash
npm run sitemap:update      # Manual sitemap update
npm run sitemap:build       # Compile TypeScript utilities
npm run sitemap:stats       # Show current site statistics
npm run sitemap:force       # Force update even if no changes
```

## 🔧 How It Works

### 1. **Route Discovery**
The system scans the `src/app` directory for all `page.tsx`, `page.ts`, `page.jsx`, and `page.js` files to discover routes.

### 2. **Priority Assignment**
Routes are automatically assigned priorities based on predefined patterns:

| Route Type | Priority | Change Frequency |
|------------|----------|------------------|
| Homepage | 1.0 | Weekly |
| Core services | 0.9 | Weekly |
| Arnold Level 1 | 0.95 | Weekly |
| Arnold Level 2 | 0.90 | Weekly |
| Arnold Level 3 | 0.85 | Weekly |
| Mapperley Level 1 | 0.95 | Weekly |
| Mapperley Level 2 | 0.90 | Weekly |
| Mapperley Level 3 | 0.85 | Weekly |
| Gedling Level 1 | 0.95 | Weekly |
| Gedling Level 2 | 0.90 | Weekly |
| Gedling Level 3 | 0.85 | Weekly |
| Location pages | 0.6-0.7 | Monthly |
| About pages | 0.7 | Monthly |
| Utility pages | 0.1-0.5 | Yearly |

### 3. **Change Detection**
The system compares the newly generated sitemap with the existing one and only updates if changes are detected.

### 4. **Automatic Deployment**
When changes are detected, the updated sitemap is automatically committed to the repository.

## 🕐 Automatic Scheduling

### Daily Updates
The system runs automatically every day at 2 AM UTC via GitHub Actions. This ensures your sitemap stays current even if you forget to update it manually.

### Trigger Conditions
The workflow runs when:
- **Daily schedule**: Every day at 2 AM UTC
- **Page changes**: When you add/modify/delete pages in `src/app/`
- **Manual trigger**: When you manually run the workflow

## 🔧 Manual Usage

### Update Sitemap Now
```bash
npm run sitemap:update
```

### Force Update (Even If No Changes)
```bash
npm run sitemap:force
```

### Check Site Statistics
```bash
npm run sitemap:stats
```

### View Update History
```bash
cat logs/sitemap-updates.log
```

## 📊 Understanding Priorities

The system uses a sophisticated priority system designed for the dental practice website:

### **High Priority (0.9-1.0)**
- Homepage
- Core service pages
- Booking and contact pages
- Level 1 location-specific pages (emergency, popular services)

### **Medium Priority (0.8-0.9)**
- Level 2 location-specific pages (mid-tier services)
- Main service category pages
- About and team pages

### **Lower Priority (0.5-0.8)**
- Level 3 location-specific pages (specialized services)
- Location landing pages
- Testimonials and galleries

### **Minimal Priority (0.1-0.5)**
- Utility pages (success, offline, complaints)
- Admin pages
- Error pages

## 🎯 Location Hierarchy

The system understands the three-tier location structure:

### Arnold (Professional/Business Focus)
- **Level 1**: Invisalign, Teeth Whitening, Dental Implants, Emergency
- **Level 2**: Veneers, Smile Makeovers, Dentures, Composite Bonding
- **Level 3**: Crowns, Root Canal, Bridges, Orthodontics

### Mapperley (Affluent Family Focus)
- **Level 1**: Emergency, Children's Dentistry, Family Orthodontics, Teeth Whitening
- **Level 2**: Family Implants, Children's Preventive, Family Crowns, Teen Cosmetic
- **Level 3**: Family Smile Makeovers, Advanced Orthodontics, Cosmetic Surgery

### Gedling (Working Family Focus)
- **Level 1**: Emergency, Family Dentistry, Affordable Whitening, NHS/Private
- **Level 2**: Family Orthodontics, Crowns, Children's Dentistry, Composite Bonding
- **Level 3**: Family Implants, Smile Makeovers, Preventive Care, Flexible Payment

## 🔍 Monitoring and Logs

### GitHub Actions
Monitor the automated updates in the "Actions" tab of your repository. Each run provides:
- Route discovery statistics
- Change detection results
- Update summaries
- Error details (if any)

### Log Files
The system maintains detailed logs in `logs/sitemap-updates.log`:
```json
{"timestamp":"2025-01-06T02:00:00.000Z","updated":true,"routeCount":127,"message":"Sitemap updated with 127 URLs"}
{"timestamp":"2025-01-07T02:00:00.000Z","updated":false,"routeCount":127,"message":"No changes detected in sitemap"}
```

### Statistics Dashboard
Run `npm run sitemap:stats` to see:
- Total route count
- Breakdown by priority level
- Breakdown by location (Arnold, Mapperley, Gedling, Services, Core)

## 🚨 Troubleshooting

### Script Fails to Run
1. Ensure you're in the project root directory
2. Check that `src/app` directory exists
3. Verify Node.js version is 16+

### GitHub Actions Fails
1. Check the Actions tab for error details
2. Ensure repository has write permissions
3. Verify the workflow file syntax

### Missing Routes
1. Ensure page files are named correctly (`page.tsx`, `page.ts`, etc.)
2. Check that files are in the correct directory structure
3. Run `npm run sitemap:stats` to see discovered routes

### Incorrect Priorities
1. Check the `ROUTE_CONFIGS` array in `src/utils/sitemap-generator.ts`
2. Add specific patterns for your new routes
3. The system uses pattern matching with fallbacks

## 🔧 Customization

### Adding New Route Patterns
Edit `src/utils/sitemap-generator.ts` and add to the `ROUTE_CONFIGS` array:

```typescript
{ pattern: '/my-new-section/*', priority: 0.8, changefreq: 'monthly' }
```

### Changing Frequencies
Modify the `changefreq` values in route configurations:
- `always` - Changes constantly
- `hourly` - Changes hourly
- `daily` - Changes daily
- `weekly` - Changes weekly (recommended for most pages)
- `monthly` - Changes monthly
- `yearly` - Changes yearly
- `never` - Never changes

### Custom Base URL
Set the `SITE_URL` environment variable:
```bash
export SITE_URL=https://yourdomain.com
npm run sitemap:update
```

## 📈 Benefits

1. **SEO Optimization**: Always up-to-date sitemap improves search engine crawling
2. **Automation**: No manual work required for sitemap maintenance
3. **Accuracy**: Automatically discovers new pages and removes deleted ones
4. **Prioritization**: Intelligent priority assignment helps search engines understand page importance
5. **Location Strategy**: Supports the three-location SEO strategy (Arnold, Mapperley, Gedling)
6. **Performance**: Only updates when necessary, avoiding unnecessary processing

## 🔮 Future Enhancements

Potential future improvements:
- Image sitemap generation
- News sitemap for blog posts
- Multi-language sitemap support
- Integration with Google Search Console
- Custom notification systems (Slack, Discord)
- Advanced analytics and reporting

---

*This automated sitemap system ensures your dental practice website maintains optimal SEO performance across all locations and services.*
