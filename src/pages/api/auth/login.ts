import { createClient, SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const key = process.env.NEXT_PUBLIC_SUPABASE_KEY || "";

const supabase = createClient(url, key);

export const loginUser = async (email: string, password: string) =>
  await supabase.auth.signInWithPassword({
    email,
    password,
  });
