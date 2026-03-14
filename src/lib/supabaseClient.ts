import { createClient } from '@supabase/supabase-js';

let cached: any = null;

export function getSupabaseClient(): any {
    if (cached) return cached;

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
        return null;
    }

    cached = createClient<any>(supabaseUrl, supabaseAnonKey);
    return cached;
}
