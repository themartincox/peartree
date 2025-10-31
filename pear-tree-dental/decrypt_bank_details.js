// decrypt_bank_details.js

require('ts-node').register({ transpileOnly: true });
require('dotenv').config({ path: './.env.local' });

const { decryptBankDetail } = require('./src/lib/encryption.ts');

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;
if (!ENCRYPTION_KEY) {
  console.error('Error: ENCRYPTION_KEY not found in .env.local. Please ensure it is set.');
  process.exit(1);
}

// Replace with your real encrypted values:
const encryptedSortCode =
  'e037975feac0f09bb7cca8f664004929:3ae42769194aafb4f04626e347bd275c:08dc807bde5436a4'; // e.g., 'iv:authTag:encrypted'
const encryptedAccountNumber =
  '0620bed547f96c86a2d4a4de25df373a:375666d4ebcb77420e4714e3e49ca94e:81ac252b8fe5f5e2'; // e.g., 'iv:authTag:encrypted'

try {
  console.log('Attempting decryption...');
  console.log('Using ENCRYPTION_KEY (first 5 chars):', ENCRYPTION_KEY.substring(0, 5) + '...');

  const decryptedSortCode = decryptBankDetail(encryptedSortCode);
  const decryptedAccountNumber = decryptBankDetail(encryptedAccountNumber);

  console.log('\n--- Decrypted Bank Details ---');
  console.log('Sort Code:', decryptedSortCode || 'Decryption Failed');
  console.log('Account Number:', decryptedAccountNumber || 'Decryption Failed');
  console.log('----------------------------');

  if (!decryptedSortCode || !decryptedAccountNumber) {
    console.warn('Warning: One or more bank details could not be decrypted. Check your ENCRYPTION_KEY and encrypted data format.');
  }
} catch (error) {
  console.error('An unexpected error occurred during decryption:', error);
}