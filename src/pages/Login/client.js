import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://blledslmwheztdksvpze.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsbGVkc2xtd2hlenRka3N2cHplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU0MzM3MzMsImV4cCI6MjAyMTAwOTczM30.xQZjU8XwMsFujWk9baSoa9fV2MdnclYhtZI-zkKoHzQ";
export const supabase = createClient(supabaseURL, supabaseKey);
