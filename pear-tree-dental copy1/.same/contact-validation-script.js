/**
 * CONTACT INFORMATION VALIDATION SCRIPT
 * Run this script to verify contact information consistency across the site
 * Usage: node .same/contact-validation-script.js
 */

const fs = require('fs');
const path = require('path');

// OFFICIAL CONTACT INFORMATION - SINGLE SOURCE OF TRUTH
const OFFICIAL_CONTACTS = {
  phone: '0115 931 2935',
  phoneLink: 'tel:01159312935',
  phoneInternational: '+441159312935',
  email: 'hello@peartree.dental',
  address: 'Burton Joyce, Nottingham, NG14 5AL'
};

// KNOWN INCORRECT NUMBERS TO FLAG
const INCORRECT_NUMBERS = [
  '0115 931 2525',
  '0115 931 2520',
  'tel:01159312525',
  'tel:01159312520'
];

function scanDirectory(dirPath, fileExtensions = ['.tsx', '.ts', '.json']) {
  const results = [];

  function scan(currentPath) {
    const items = fs.readdirSync(currentPath);

    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scan(fullPath);
      } else if (stat.isFile() && fileExtensions.some(ext => item.endsWith(ext))) {
        results.push(fullPath);
      }
    }
  }

  scan(dirPath);
  return results;
}

function validateContactInformation() {
  console.log('🔍 SCANNING FOR CONTACT INFORMATION INCONSISTENCIES...\n');

  const files = scanDirectory('./src');
  let hasErrors = false;
  let correctInstances = 0;
  let totalPhoneReferences = 0;

  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');

      // Check for incorrect phone numbers
      for (const incorrectNumber of INCORRECT_NUMBERS) {
        if (content.includes(incorrectNumber)) {
          console.log(`❌ INCORRECT PHONE FOUND: ${file}`);
          console.log(`   Contains: ${incorrectNumber}`);
          console.log(`   Should be: ${OFFICIAL_CONTACTS.phone} or ${OFFICIAL_CONTACTS.phoneLink}\n`);
          hasErrors = true;
        }
      }

      // Count correct phone number instances
      const correctPhoneMatches = (content.match(/0115 931 2935/g) || []).length;
      const correctLinkMatches = (content.match(/tel:01159312935/g) || []).length;

      if (correctPhoneMatches > 0 || correctLinkMatches > 0) {
        correctInstances += (correctPhoneMatches + correctLinkMatches);
        totalPhoneReferences += (correctPhoneMatches + correctLinkMatches);
        console.log(`✅ ${file}: ${correctPhoneMatches + correctLinkMatches} correct phone references`);
      }

      // Check for phone number patterns that might be incorrect
      const phonePattern = /0115 931 \d{4}/g;
      const phoneMatches = content.match(phonePattern) || [];

      for (const match of phoneMatches) {
        if (match !== OFFICIAL_CONTACTS.phone) {
          console.log(`⚠️  SUSPICIOUS PHONE PATTERN: ${file}`);
          console.log(`   Found: ${match}`);
          console.log(`   Expected: ${OFFICIAL_CONTACTS.phone}\n`);
          hasErrors = true;
        }
      }

    } catch (error) {
      console.log(`⚠️  Could not read file: ${file}`);
    }
  }

  console.log('\n📊 VALIDATION SUMMARY');
  console.log('================');
  console.log(`Total files scanned: ${files.length}`);
  console.log(`Correct phone references found: ${correctInstances}`);
  console.log(`Files with phone references: ${totalPhoneReferences > 0 ? 'Multiple' : '0'}`);

  if (hasErrors) {
    console.log('\n❌ VALIDATION FAILED');
    console.log('Contact information inconsistencies detected!');
    console.log('Please fix the errors above and run validation again.');
    return false;
  } else {
    console.log('\n✅ VALIDATION PASSED');
    console.log('All contact information appears consistent.');
    console.log(`Official phone number (${OFFICIAL_CONTACTS.phone}) is being used correctly.`);
    return true;
  }
}

// KEY FILE CHECKS
function validateKeyFiles() {
  console.log('\n🔍 CHECKING KEY AUTHORITATIVE FILES...\n');

  const keyFiles = [
    './src/components/Footer.tsx',
    './src/app/contact/page.tsx',
    './public/.well-known/business-data.json'
  ];

  for (const file of keyFiles) {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8');

      if (content.includes(OFFICIAL_CONTACTS.phone) || content.includes(OFFICIAL_CONTACTS.phoneLink) || content.includes(OFFICIAL_CONTACTS.phoneInternational)) {
        console.log(`✅ ${file}: Contains correct phone number`);
      } else {
        console.log(`❌ ${file}: Missing or incorrect phone number`);
      }
    } else {
      console.log(`⚠️  ${file}: File not found`);
    }
  }
}

// RUN VALIDATION
console.log('📱 PEAR TREE DENTAL - CONTACT VALIDATION');
console.log('========================================');
console.log(`Expected phone: ${OFFICIAL_CONTACTS.phone}`);
console.log(`Expected tel link: ${OFFICIAL_CONTACTS.phoneLink}`);
console.log('========================================\n');

validateKeyFiles();
const isValid = validateContactInformation();

if (isValid) {
  console.log('\n🎉 All contact information is consistent!');
  process.exit(0);
} else {
  console.log('\n🚨 Contact information validation failed!');
  process.exit(1);
}
