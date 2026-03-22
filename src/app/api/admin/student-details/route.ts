import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { autoRefreshToken: false, persistSession: false }
});

export async function POST(req: Request) {
  try {
    const { studentId } = await req.json();

    if (!studentId) {
      return NextResponse.json({ success: false, error: 'Student ID required' }, { status: 400 });
    }

    // 1. Get auth user details (for email)
    const { data: userData, error: userError } = await supabaseAdmin.auth.admin.getUserById(studentId);
    if (userError) {
      return NextResponse.json({ success: false, error: userError.message }, { status: 500 });
    }

    // 2. Get their purchased series
    const { data: purchases, error: purchaseError } = await supabaseAdmin
      .from('purchases')
      .select('series_id')
      .eq('user_id', studentId);

    const ownedSeriesIds = purchases?.map(p => p.series_id) || [];

    // 3. Get all available test series to populate dropdowns
    const { data: allSeries } = await supabaseAdmin
      .from('test_series')
      .select('id, title, exam')
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    return NextResponse.json({
      success: true,
      email: userData.user.email,
      ownedSeriesIds,
      allSeries: allSeries || []
    });

  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
