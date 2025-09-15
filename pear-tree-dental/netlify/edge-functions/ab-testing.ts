import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  // Define the variants to match the application's type
  const variants = ['A', 'B'];

  // Get the user's IP address
  const ip = context.ip;

  // Simple deterministic hash function to assign a variant based on IP
  // This ensures a user consistently gets the same variant.
  const getVariant = (ipAddress: string) => {
    if (!ipAddress) {
      return variants[0]; // Default to 'A' if IP is not available
    }
    // A simple hash: sum of character codes modulo number of variants
    const hash = ipAddress.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return variants[hash % variants.length];
  };

  const variant = getVariant(ip);

  // Get the original response by continuing the request chain
  const response = await context.next();

  // Set the A/B test variant header for the Next.js app to read
  response.headers.set("x-ptd-variant", variant);

  return response;
};