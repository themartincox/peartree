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
const encryptedSortCode = '26f002a7203d4f9f247e11ec611fc8cd:323311836d70c4e8dafec459ffcf2983:57455859a2103cda'; // e.g., 'iv:authTag:encrypted'
const encryptedAccountNumber = '88b3099b3432ba62675cdbcb08b5864f:3eb78d9952bd2f5debe5ea3c47a6e94a:d7485d5a0db8c88c'; // e.g., 'iv:authTag:encrypted'

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
