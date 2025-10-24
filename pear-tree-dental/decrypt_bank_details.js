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
  'c7d9959273320e42a841820d3c19fc15:0bf17a0a4a77682fe53c0555296bdfcf:28f2f2beb658815a'; // e.g., 'iv:authTag:encrypted'
const encryptedAccountNumber =
  'cd02f7f28a74c72cf5ad545f582f2dee:1e0608f4f18abc25df0228e2a9f8669e:743904edaf050265'; // e.g., 'iv:authTag:encrypted'

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