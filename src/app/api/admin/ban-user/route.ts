import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(req: Request) {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
        return NextResponse.json({ success: false, error: 'Database environment missing' }, { status: 500 });
    }

    try {
        const { userId, action } = await req.json();

        if (!userId || !action) {
            return NextResponse.json({ success: false, error: 'Invalid parameters provided.' }, { status: 400 });
        }

        // Initialize Supabase admin client to bypass RLS
        const supabaseAdmin = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL,
            process.env.SUPABASE_SERVICE_ROLE_KEY
        );

        if (action === 'ban') {
            // Update auth metadata to effectively ban them instantly and terminate sessions
            await supabaseAdmin.auth.admin.updateUserById(userId, { ban_duration: '87600h' });
            
            // Reflect on physical profile table for dashboard UI sync
            await supabaseAdmin.from('profiles').update({ status: 'Banned', risk: 'Critical' }).eq('id', userId);

            return NextResponse.json({ success: true, message: 'User explicitly banned from platform.' });
        } else if (action === 'unban') {
             // Remove ban lock
             await supabaseAdmin.auth.admin.updateUserById(userId, { ban_duration: 'none' });
            
             // Restore status
             await supabaseAdmin.from('profiles').update({ status: 'Active', risk: 'Low' }).eq('id', userId);
 
             return NextResponse.json({ success: true, message: 'User access physically restored.' });
        } else {
             return NextResponse.json({ success: false, error: 'Unrecognized action.' }, { status: 400 });
        }

    } catch (error: any) {
        console.error('Ban route failure:', error);
        return NextResponse.json({ success: false, error: error.message || 'Internal processing error' }, { status: 500 });
    }
}
