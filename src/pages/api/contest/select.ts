import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const key = process.env.NEXT_PUBLIC_SUPABASE_KEY || '';

const supabase = createClient(url, key);

export const selectContestsForUser = async () =>
  supabase.from('entry').select('contest (id, title)');
