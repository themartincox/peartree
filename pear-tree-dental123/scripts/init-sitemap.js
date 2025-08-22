#!/usr/bin/env node

/**
 * Sitemap Initialization Script
 *
 * This script initializes the automated sitemap system by:
 * 1. Testing the sitemap generation utilities
 * 2. Creating an initial sitemap.xml file
 * 3. Displaying site statistics
 * 4. Validating the setup
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Initializing Automated Sitemap System');
console.log('=====================================\n');

async function main() {
  const projectRoot = path.join(__dirname, '..');
  const appDir = path.join(projectRoot, 'src', 'app');
  const sitemapPath = path.join(projectRoot, 'public', 'sitemap.xml');

  try {
    // Step 1: Validate environment
    console.log('1️⃣ Validating environment...');

    if (!fs.existsSync(appDir)) {
      throw new Error(`App directory not found: ${appDir}`);
    }

    if (!fs.existsSync(path.join(projectRoot, 'package.json'))) {
      throw new Error('package.json not found. Run this from project root.');
    }

    console.log('   ✅ Environment validated\n');

    // Step 2: Install dependencies if needed
    console.log('2️⃣ Checking dependencies...');

    try {
      require('glob');
      console.log('   ✅ Dependencies available\n');
    } catch (error) {
      console.log('   📦 Installing missing dependencies...');
      execSync('npm install glob', { stdio: 'inherit', cwd: projectRoot });
      console.log('   ✅ Dependencies installed\n');
    }

    // Step 3: Compile TypeScript utilities
    console.log('3️⃣ Compiling TypeScript utilities...');

    try {
      execSync('npm run sitemap:build', { stdio: 'inherit', cwd: projectRoot });
      console.log('   ✅ TypeScript compiled successfully\n');
    } catch (error) {
      console.error('   ❌ Failed to compile TypeScript utilities');
      throw error;
    }

    // Step 4: Test route discovery
    console.log('4️⃣ Testing route discovery...');

    const { scanAppDirectory } = await import('../dist/utils/sitemap-generator.js');
    const routes = await scanAppDirectory(appDir);

    console.log(`   📍 Discovered ${routes.length} routes:`);

    // Group routes by type
    const routeGroups = {
      core: [],
      arnold: [],
      mapperley: [],
      gedling: [],
      services: [],
      other: []
    };

    routes.forEach(route => {
      if (route === '/' || route.match(/^\/(book|contact|pricing|membership|about)/)) {
        routeGroups.core.push(route);
      } else if (route.startsWith('/arnold/')) {
        routeGroups.arnold.push(route);
      } else if (route.startsWith('/mapperley/')) {
        routeGroups.mapperley.push(route);
      } else if (route.startsWith('/gedling/')) {
        routeGroups.gedling.push(route);
      } else if (route.startsWith('/services/')) {
        routeGroups.services.push(route);
      } else {
        routeGroups.other.push(route);
      }
    });

    Object.entries(routeGroups).forEach(([group, groupRoutes]) => {
      if (groupRoutes.length > 0) {
        console.log(`      ${group.toUpperCase()}: ${groupRoutes.length} routes`);
      }
    });

    console.log('   ✅ Route discovery working\n');

    // Step 5: Generate initial sitemap
    console.log('5️⃣ Generating initial sitemap...');

    const { updateSitemapIfChanged } = await import('../dist/utils/sitemap-generator.js');
    const result = await updateSitemapIfChanged(appDir, sitemapPath, 'https://peartree.dental');

    if (result.updated) {
      console.log(`   ✅ Sitemap created with ${result.routeCount} URLs`);
    } else {
      console.log(`   ℹ️ Sitemap already up to date (${result.routeCount} URLs)`);
    }

    console.log('');

    // Step 6: Display statistics
    console.log('6️⃣ Site statistics:');

    const { getSitemapStats } = await import('../dist/utils/sitemap-generator.js');
    const stats = await getSitemapStats(appDir);

    console.log(`   📊 Total routes: ${stats.totalRoutes}`);
    console.log('   📍 By location:');
    Object.entries(stats.routesByLocation).forEach(([location, count]) => {
      console.log(`      ${location}: ${count} routes`);
    });

    console.log('   🎯 By priority:');
    Object.entries(stats.routesByPriority)
      .sort(([a], [b]) => parseFloat(b) - parseFloat(a))
      .forEach(([priority, count]) => {
        console.log(`      ${priority}: ${count} routes`);
      });

    console.log('');

    // Step 7: Validate sitemap
    console.log('7️⃣ Validating generated sitemap...');

    if (fs.existsSync(sitemapPath)) {
      const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
      const urlCount = (sitemapContent.match(/<url>/g) || []).length;
      const fileSize = (fs.statSync(sitemapPath).size / 1024).toFixed(2);

      console.log(`   📄 Sitemap file: ${urlCount} URLs, ${fileSize} KB`);
      console.log(`   📅 Last modified: ${fs.statSync(sitemapPath).mtime.toISOString()}`);

      // Basic XML validation
      if (sitemapContent.includes('<?xml version="1.0"') &&
          sitemapContent.includes('<urlset') &&
          sitemapContent.includes('</urlset>')) {
        console.log('   ✅ Valid XML structure');
      } else {
        console.log('   ⚠️ XML structure may be invalid');
      }

      // Check for required URLs
      const requiredUrls = ['https://peartree.dental/', 'https://peartree.dental/book', 'https://peartree.dental/services'];
      const missingUrls = requiredUrls.filter(url => !sitemapContent.includes(url));

      if (missingUrls.length === 0) {
        console.log('   ✅ All required URLs present');
      } else {
        console.log(`   ⚠️ Missing URLs: ${missingUrls.join(', ')}`);
      }
    } else {
      console.log('   ❌ Sitemap file not created');
    }

    console.log('');

    // Step 8: Setup verification
    console.log('8️⃣ Verifying setup...');

    // Check if GitHub Actions workflow exists
    const workflowPath = path.join(projectRoot, '.github', 'workflows', 'update-sitemap.yml');
    if (fs.existsSync(workflowPath)) {
      console.log('   ✅ GitHub Actions workflow configured');
    } else {
      console.log('   ⚠️ GitHub Actions workflow not found');
    }

    // Check package.json scripts
    const packageJson = JSON.parse(fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf-8'));
    const hasScripts = packageJson.scripts &&
                      packageJson.scripts['sitemap:update'] &&
                      packageJson.scripts['sitemap:build'];

    if (hasScripts) {
      console.log('   ✅ Package.json scripts configured');
    } else {
      console.log('   ⚠️ Package.json scripts missing');
    }

    console.log('');

    // Success summary
    console.log('🎉 Initialization Complete!');
    console.log('========================\n');

    console.log('✅ Your automated sitemap system is ready!');
    console.log('');
    console.log('📋 Next steps:');
    console.log('   • Your sitemap will update automatically daily at 2 AM UTC');
    console.log('   • Manual updates: npm run sitemap:update');
    console.log('   • View statistics: npm run sitemap:stats');
    console.log('   • Force update: npm run sitemap:force');
    console.log('');
    console.log('📊 Current status:');
    console.log(`   • ${stats.totalRoutes} routes discovered`);
    console.log(`   • ${stats.routesByLocation.arnold || 0} Arnold location pages`);
    console.log(`   • ${stats.routesByLocation.mapperley || 0} Mapperley location pages`);
    console.log(`   • ${stats.routesByLocation.gedling || 0} Gedling location pages`);
    console.log(`   • Sitemap: ${sitemapPath}`);
    console.log('');
    console.log('📖 Documentation: docs/sitemap-automation.md');

  } catch (error) {
    console.error('\n❌ Initialization failed:');
    console.error(error.message);

    if (process.env.NODE_ENV !== 'production') {
      console.error('\n🔍 Full error details:');
      console.error(error);
    }

    console.log('\n🛠️ Troubleshooting:');
    console.log('   • Ensure you\'re in the project root directory');
    console.log('   • Check that src/app directory exists');
    console.log('   • Verify Node.js version is 16+');
    console.log('   • Try: npm install && npm run sitemap:build');

    process.exit(1);
  }
}

// Handle process signals
process.on('SIGINT', () => {
  console.log('\n🛑 Initialization cancelled');
  process.exit(0);
});

main().catch(console.error);
