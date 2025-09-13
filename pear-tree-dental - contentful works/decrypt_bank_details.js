// decrypt_bank_details.js

// Load environment variables from .env.local
require('dotenv').config({ path: './.env.local' });

const { decryptBankDetail } = require('./src/lib/encryption'); // Adjust path if you save this script elsewhere

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
const encryptedSortCode = '2c60dad556369dc569a751487d678e75:1a6f7d0a6fcaab5d1894f28ce4cde44d:7b473fd8dbf3b677'; // e.g., 'iv:authTag:encrypted'
const encryptedAccountNumber = '7724dea96348f460165939b0301d97dc:63afe0ab56779afe58851663bad21e7d:6f3def3aeb6d6edc'; // e.g., 'iv:authTag:encrypted'

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
