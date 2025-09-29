// decrypt_bank_details.js

// Load environment variables from .env.local
require('dotenv').config({ path: './.env.local' });

const { decryptBankDetail } = require('./src/lib/encryption.ts'); // Adjust path if you save this script elsewhere

// --- Configuration ---
// IMPORTANT: Ensure this ENCRYPTION_KEY matches the one used when data was encrypted.
// If your live site uses a different key, you MUST use that key here.
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

if (!ENCRYPTION_KEY) {
  console.error('Error: ENCRYPTION_KEY not found in .env.local. Please ensure it is set.');
  process.exit(1);
}

// --- Encrypted Data from Supabase ---
// Replace these with the actual encrypted values from your Supabase table
const encryptedSortCode = '0e15bb2e608b93f0aaaa17901b213a41:af27de2a31ee79e53a0cc9db0b3e63ef:8c2e30a1dade4173'; // e.g., 'iv:authTag:encrypted'
const encryptedAccountNumber = '683fba93975f9692b41e25854895ec70:40ad01301311869f60645469ca9d0723:f43d1edbd876babe'; // e.g., 'iv:authTag:encrypted'

// --- Decryption ---
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
