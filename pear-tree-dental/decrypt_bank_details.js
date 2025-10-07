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
  '5bddb651db177080341ed3cd241b5a19:e0de08bb7fec6100e6732c260892e26a:0dd1d68a5f808d0c'; // e.g., 'iv:authTag:encrypted'
const encryptedAccountNumber =
  '3d0c6654e47297f298d8d0d73e614a6c:67ff86d4701461c66213a9940d177539:2b589a56812352de'; // e.g., 'iv:authTag:encrypted'

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