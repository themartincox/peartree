import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
);

export async function getActiveBlogPairs() {
  const { data, error } = await supabase
    .from('blog_pairs')
    .select('*')
    .eq('is_active', true);
  if (error) throw error;
  return data || [];
}