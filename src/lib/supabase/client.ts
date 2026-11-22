import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

const missingEnvVars: string[] = [];
if (!supabaseUrl) missingEnvVars.push("NEXT_PUBLIC_SUPABASE_URL");
if (!supabasePublishableKey) {
  missingEnvVars.push("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY");
}

if (missingEnvVars.length > 0) {
  throw new Error(
    `Missing required Supabase environment variable(s): ${missingEnvVars.join(", ")}.`
  );
}

export const supabase = createClient(
  supabaseUrl!,
  supabasePublishableKey!
);
