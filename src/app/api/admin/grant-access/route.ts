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

    if (!studentId || !seriesId) {
      return NextResponse.json({ success: false, error: 'Student ID and Series ID required' }, { status: 400 });
    }

    // Insert purchase record to grant free access
    const { error: purchaseError } = await supabaseAdmin.from('purchases').insert({
      user_id: studentId,
      series_id: seriesId,
      amount: 0,
      status: 'success',
      order_id: `admin_grant_${Math.random().toString(36).substring(7)}`,
      payment_id: `free_access_${Math.random().toString(36).substring(7)}`
    });

    if (purchaseError) {
      console.error('Error granting access:', purchaseError.message);
      return NextResponse.json({ success: false, error: purchaseError.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'Free access granted successfully!'
    });

  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
