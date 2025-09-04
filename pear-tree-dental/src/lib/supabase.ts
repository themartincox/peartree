import { createClient } from '@supabase/supabase-js';

/**
 * Initialize the Supabase client. We first try to read the URL and key
 * from environment variables (NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY).
 * If those aren’t set, we fall back to SUPABASE_URL / SUPABASE_ANON_KEY,
 * and finally to the hard-coded values you provided.
 * In production, please keep your keys in environment variables.
 */
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  process.env.SUPABASE_URL ||
  'https://isjnwsuodldqrcntheoh.supabase.co';
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.SUPABASE_ANON_KEY ||
  // Provided anon key 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlzam53c3VvZGxkcXJjbnRoZW9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxOTcyNDUsImV4cCI6MjA3MTc3MzI0NX0.v-5CbRjEaiuVrO5YHnpJ1giRY85Ovg8QTxaE2DOInFc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Retrieve all active blog pairs from the `blog_pairs` table.
 * If the query returns an error, it will be thrown.
 */
export async function getActiveBlogPairs() {
  const { data, error } = await supabase
    .from('blog_pairs')
    .select('*')
    .eq('is_active', true);
  if (error) throw error;
  return data || [];
}
