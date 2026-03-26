import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { autoRefreshToken: false, persistSession: false }
});

export async function POST(req: Request) {
  try {
    const { studentId, seriesId } = await req.json();

    if (!studentId || typeof seriesId === 'undefined') {
      return NextResponse.json({ success: false, error: 'Student ID and Series ID required' }, { status: 400 });
    }

    // Revoke access
    const { error } = await supabaseAdmin
      .from('purchases')
      .delete()
      .eq('user_id', studentId)
      .eq('series_id', seriesId);

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
