import { createClient } from "@supabase/supabase-js";

// TODO: Move these to .env file in production
const SUPABASE_URL = "https://uqvflfildborktstsvhm.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxdmZsZmlsZGJvcmt0c3RzdmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0MjYxNzUsImV4cCI6MjA4MDAwMjE3NX0.GLBFKM0y0lKSlZ_YxoIGdDFbfH6F_E33jRxX8q030eI";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
