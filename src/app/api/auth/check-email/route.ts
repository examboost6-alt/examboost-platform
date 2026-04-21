import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Use service role key to bypass RLS and check profiles
const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
    try {
        const { email } = await req.json();
        
        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        const { data, error } = await supabaseAdmin
            .from('profiles')
            .select('id')
            .eq('email', email)
            .limit(1);
            
        if (error) {
            console.error('Error checking email:', error);
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
        }

        const userExists = data && data.length > 0;

        return NextResponse.json({ exists: userExists });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
