// Sanity config - optional for deployment
let sanityConfig;

try {
  const { defineConfig } = require('next-sanity');

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || '';

  sanityConfig = defineConfig({
    projectId,
    dataset,
    // Set to false if you want to continue using the legacy v2 API
    apiVersion: '2024-01-01',
    // Set to true if you are developing locally and want live updates
    useCdn: process.env.NODE_ENV === 'production',
  });
} catch (error) {
  // Fallback config if next-sanity is not available
  sanityConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
    apiVersion: '2024-01-01',
    useCdn: process.env.NODE_ENV === 'production',
  };
}

export default sanityConfig;
