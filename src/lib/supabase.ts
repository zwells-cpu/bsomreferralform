import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hndvaeuamzyianladfia.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuZHZhZXVhbXp5aWFubGFkZmlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2ODk1ODksImV4cCI6MjA5MTI2NTU4OX0.INRNQ4A42cHhkFcXEDMNiNYRhVYO6CiglyMK9gmpZ8w';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: false },
});