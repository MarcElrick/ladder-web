import { createClient, SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const key = process.env.NEXT_PUBLIC_SUPABASE_KEY || "";

const supabase = createClient(url, key);

export const signupUser = async (email: string, password: string) => {
  console.log("HELLO");
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  console.log(data, error);
  return { data, error };
};
