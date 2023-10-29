import { createClient } from "@supabase/supabase-js";

// export const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

const supabaseUrl = "https://umtiwelxoboxgofhngud.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtdGl3ZWx4b2JveGdvZmhuZ3VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg0OTM3NjAsImV4cCI6MjAxNDA2OTc2MH0.Qws0Cb2ixxIXGZJJS3MmZwN6pfJTRO5e3lDJs5kaBAs";
export const supabase = createClient(supabaseUrl, supabaseKey);
