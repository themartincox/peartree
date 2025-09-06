#!/usr/bin/env node

/**
 * Daily Sitemap Update Script
 *
 * This script automatically checks for changes in the site structure
 * and updates the sitemap.xml file if changes are detected.
 *
 * Usage:
 * - Run manually: node scripts/update-sitemap.js
 * - Run via cron: 0 2 * * * cd /path/to/project && node scripts/update-sitemap.js
 * - Run via GitHub Actions: see .github/workflows/update-sitemap.yml
 */

const fs = require('fs');
const path = require('path');

// Import our sitemap utilities (we'll need to build the TypeScript first)
async function importSitemapUtils() {
  try {
    // Try to import the compiled JavaScript version
    return await import('../dist/utils/sitemap-generator.js');
  } catch (error) {
    console.log('📦 Compiling TypeScript utilities...');

    // If that fails, we need to compile TypeScript first
    const { execSync } = require('child_process');

    try {
      // Build the TypeScript files
      execSync('npx tsc src/utils/sitemap-generator.ts --outDir dist --target es2020 --module esnext --moduleResolution node --allowSyntheticDefaultImports --esModuleInterop',
        { stdio: 'inherit', cwd: path.join(__dirname, '..') });

      // Now import the compiled version
      return await import('../dist/utils/sitemap-generator.js');
    } catch (buildError) {
      console.error('❌ Failed to compile TypeScript utilities:', buildError.message);
      process.exit(1);
    }
  }
}

/**
 * Main execution function
 */
async function main() {
  const startTime = Date.now();
  console.log('🚀 Starting daily sitemap update check...');
  console.log(`📅 ${new Date().toISOString()}`);

  try {
    // Import utilities
    const sitemapUtils = await importSitemapUtils();

    // Define paths
    const projectRoot = path.join(__dirname, '..');
    const appDir = path.join(projectRoot, 'src', 'app');
    const sitemapPath = path.join(projectRoot, 'public', 'sitemap.xml');
    const baseUrl = process.env.SITE_URL || 'https://peartree.dental';

    console.log(`📂 App directory: ${appDir}`);
    console.log(`📄 Sitemap path: ${sitemapPath}`);
    console.log(`🌐 Base URL: ${baseUrl}`);

    // Check if app directory exists
    if (!fs.existsSync(appDir)) {
      throw new Error(`App directory not found: ${appDir}`);
    }

    // Get current statistics
    console.log('\n📊 Getting current site statistics...');
    const stats = await sitemapUtils.getSitemapStats(appDir);
    console.log(`   Total routes: ${stats.totalRoutes}`);
    console.log(`   By location:`, stats.routesByLocation);
    console.log(`   By priority:`, stats.routesByPriority);

    // Update sitemap if changed
    console.log('\n🔄 Checking for sitemap changes...');
    const result = await sitemapUtils.updateSitemapIfChanged(appDir, sitemapPath, baseUrl);

    if (result.updated) {
      console.log('✅ Sitemap updated successfully!');
      console.log(`   ${result.message}`);
      console.log(`   Total URLs: ${result.routeCount}`);

      // Log the change
      const logEntry = {
        timestamp: new Date().toISOString(),
        updated: true,
        routeCount: result.routeCount,
        message: result.message
      };

      await logSitemapUpdate(projectRoot, logEntry);

    } else {
      console.log('ℹ️  No changes detected');
      console.log(`   ${result.message}`);
      console.log(`   Current route count: ${result.routeCount}`);
    }

    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    console.log(`\n⏱️  Completed in ${duration}s`);

    // Exit with appropriate code
    process.exit(0);

  } catch (error) {
    console.error('\n❌ Error during sitemap update:');
    console.error(error.message);

    if (process.env.NODE_ENV !== 'production') {
      console.error('\n🔍 Full error details:');
      console.error(error);
    }

    // Log the error
    const errorLogEntry = {
      timestamp: new Date().toISOString(),
      updated: false,
      error: error.message,
      stack: error.stack
    };

    try {
      await logSitemapUpdate(path.join(__dirname, '..'), errorLogEntry);
    } catch (logError) {
      console.error('Failed to log error:', logError.message);
    }

    process.exit(1);
  }
}

/**
 * Logs sitemap update events
 */
async function logSitemapUpdate(projectRoot, logEntry) {
  try {
    const logFile = path.join(projectRoot, 'logs', 'sitemap-updates.log');
    const logDir = path.dirname(logFile);

    // Ensure log directory exists
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    // Append log entry
    const logLine = JSON.stringify(logEntry) + '\n';
    fs.appendFileSync(logFile, logLine);

    // Keep only last 100 entries (rotate log file)
    const logContent = fs.readFileSync(logFile, 'utf-8');
    const lines = logContent.trim().split('\n');

    if (lines.length > 100) {
      const keepLines = lines.slice(-100);
      fs.writeFileSync(logFile, keepLines.join('\n') + '\n');
    }

  } catch (error) {
    console.error('Warning: Failed to write log:', error.message);
  }
}

/**
 * Validates environment and dependencies
 */
function validateEnvironment() {
  // Check Node.js version
  const nodeVersion = process.version;
  const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);

  if (majorVersion < 16) {
    console.error('❌ Node.js 16+ required. Current version:', nodeVersion);
    process.exit(1);
  }

  // Check if we're in the right directory
  const packageJsonPath = path.join(__dirname, '..', 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    console.error('❌ package.json not found. Make sure you\'re running this from the project root.');
    process.exit(1);
  }

  // Check project structure
  const appDir = path.join(__dirname, '..', 'src', 'app');
  if (!fs.existsSync(appDir)) {
    console.error('❌ src/app directory not found. This doesn\'t appear to be a Next.js app.');
    process.exit(1);
  }
}

/**
 * Handle process signals gracefully
 */
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Validate environment before starting
validateEnvironment();

// Run the main function
main().catch((error) => {
  console.error('💥 Unhandled error:', error);
  process.exit(1);
});
