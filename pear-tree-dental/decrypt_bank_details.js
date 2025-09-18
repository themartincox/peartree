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
const encryptedSortCode = '4e088c3412e39f42b370ce196935871b:c82f373f523c4f699ba0f7816d444f87:5a0ba8c06c7f5d69'; // e.g., 'iv:authTag:encrypted'
const encryptedAccountNumber = '0c910450d316b649f9974d38bb703dbb:e4bb4fd42d22b30f2da9c86e0a9cbe02:fcd796300071df8d'; // e.g., 'iv:authTag:encrypted'

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
