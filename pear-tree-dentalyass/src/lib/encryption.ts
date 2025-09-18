import crypto from 'crypto';

// Get encryption key from environment
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

// Ensure the key is valid and exists
if (!ENCRYPTION_KEY) {
  throw new Error('ENCRYPTION_KEY is not set in environment variables. Application cannot start.');
}
if (ENCRYPTION_KEY.length < 32) {
  console.warn('⚠️ WARNING: Encryption key is less than 32 bytes. This is not secure for production!');
}

/**
 * Encrypts bank details (sort code or account number) using AES-256-GCM
 * Returns empty string if input is empty or encryption fails
 */
export function encryptBankDetail(text: string): string {
  if (!text || text.trim() === '') return '';

  try {
    // Generate a random initialization vector
    const iv = crypto.randomBytes(16);

    // Create cipher with key and iv
    const cipher = crypto.createCipheriv(
      'aes-256-gcm',
      Buffer.from(ENCRYPTION_KEY.slice(0, 32)),
      iv
    );

    // Encrypt the text
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    // Get authentication tag
    const authTag = cipher.getAuthTag();

    // Return iv + authTag + encrypted data as a single string
    return iv.toString('hex') + ':' + authTag.toString('hex') + ':' + encrypted;
  } catch (error) {
    console.error('Encryption error:', error);
    return '';
  }
}

/**
 * Decrypts bank details (sort code or account number)
 * Returns empty string if decryption fails
 */
export function decryptBankDetail(encryptedText: string): string {
  if (!encryptedText || encryptedText.trim() === '') return '';

  try {
    // Split parts
    const parts = encryptedText.split(':');
    if (parts.length !== 3) {
      throw new Error('Invalid encrypted format');
    }

    const iv = Buffer.from(parts[0], 'hex');
    const authTag = Buffer.from(parts[1], 'hex');
    const encrypted = parts[2];

    // Create decipher
    const decipher = crypto.createDecipheriv(
      'aes-256-gcm',
      Buffer.from(ENCRYPTION_KEY.slice(0, 32)),
      iv
    );

    // Set auth tag
    decipher.setAuthTag(authTag);

    // Decrypt
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
  } catch (error) {
    console.error('Decryption error:', error);
    return '';
  }
}

/**
 * Masks bank details for display, showing only last 4 characters
 */
export function maskBankDetail(text: string): string {
  if (!text || text.length < 4) return '****';

  const lastFour = text.slice(-4);
  const maskedPart = '*'.repeat(text.length - 4);
  return maskedPart + lastFour;
}

// For admin validation
export function isBankDetailEncrypted(text: string): boolean {
  if (!text || text.trim() === '') return false;

  // Check if it matches our encryption format (iv:authTag:encrypted)
  const parts = text.split(':');
  return parts.length === 3 &&
         parts[0].length === 32 && // iv in hex
         parts[1].length === 32 && // authTag in hex
         parts[2].length > 0;      // encrypted content
}
