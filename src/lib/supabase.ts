import { createClient } from '@supabase/supabase-js';

const defaultSupabaseUrl = 'https://hndvaeuamzyianladfia.supabase.co';
const defaultSupabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuZHZhZXVhbXp5aWFubGFkZmlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2ODk1ODksImV4cCI6MjA5MTI2NTU4OX0.INRNQ4A42cHhkFcXEDMNiNYRhVYO6CiglyMK9gmpZ8w';

function resolveSupabaseUrl(rawUrl: string | undefined): string {
  const trimmedUrl = rawUrl?.trim();
  if (!trimmedUrl) {
    return defaultSupabaseUrl;
  }

  return /^https?:\/\//i.test(trimmedUrl) ? trimmedUrl : `https://${trimmedUrl}`;
}

const supabaseUrl = resolveSupabaseUrl(import.meta.env.VITE_SUPABASE_URL);
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? defaultSupabaseAnonKey;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: false },
});
