import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { autoRefreshToken: false, persistSession: false }
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
        }

        const dataToInsert = {
            name,
            email,
            subject: subject || "General Inquiry",
            message,
            status: 'Unread'
        };

        const { error } = await supabaseAdmin.from('contact_messages').insert([dataToInsert]);

        if (error) {
            console.error("Error inserting contact message:", error);
            // It could be that the table doesn't exist
            if (error.code === '42P01') {
                return NextResponse.json({ success: false, error: "The contact_messages table does not exist in the database. Please run the setup SQL." }, { status: 500 });
            }
            return NextResponse.json({ success: false, error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (e: any) {
        console.error("API error in /api/contact:", e);
        return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
    }
}
