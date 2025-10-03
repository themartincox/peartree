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
  '5aaf2b03ce1f3a9e11564fb0948e2bb2:8ef694fe5724d1dc85b990af1a88b569:db20b220761327b0'; // e.g., 'iv:authTag:encrypted'
const encryptedAccountNumber =
  '32d1a946e6d7a56274f1fe50c2e3c519:8376ec13e060474c6af97ab9a07f718d:d1408e41b2dd9acf'; // e.g., 'iv:authTag:encrypted'

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