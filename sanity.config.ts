import { defineConfig } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  projectId,
  dataset,
  // Set to false if you want to continue using the legacy v2 API
  apiVersion: '2024-01-01',
  // Set to true if you are developing locally and want live updates
  useCdn: process.env.NODE_ENV === 'production',
})
