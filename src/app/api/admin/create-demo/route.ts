import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

const ALL_MOCK_IDS = [
  'mock-eng-1', 'mock-eng-2', 'mock-eng-3', 'mock-eng-4',
  'mock-med-1', 'mock-med-2', 'mock-med-3', 'mock-med-4',
  'mock-bank-1', 'mock-bank-2', 'mock-bank-3', 'mock-bank-4',
  'mock-cuet-1', 'mock-cuet-2', 'mock-cuet-3', 'mock-cuet-4',
  'mock-law-1', 'mock-law-2', 'mock-law-3', 'mock-law-4',
  'mock-mba-1', 'mock-mba-2', 'mock-mba-3', 'mock-mba-4',
  'mock-pol-1', 'mock-pol-2', 'mock-pol-3', 'mock-pol-4',
  'mock-rail-1', 'mock-rail-2', 'mock-rail-3', 'mock-rail-4',
  'mock-ssc-1', 'mock-ssc-2', 'mock-ssc-3', 'mock-ssc-4',
  'mock-psc-1', 'mock-psc-2', 'mock-psc-3', 'mock-psc-4',
  'mock-teach-1', 'mock-teach-2', 'mock-teach-3', 'mock-teach-4',
  'mock-upsc-1', 'mock-upsc-2', 'mock-upsc-3', 'mock-upsc-4',
  // and legacy test 1 to 15 if needed
  'test-1', 'test-2', 'test-3', 'test-4', 'test-5',
  'test-6', 'test-7', 'test-8', 'test-9', 'test-10',
  'test-11', 'test-12', 'test-13', 'test-14', 'test-15'
];

export async function POST(req: Request) {
  try {
    const { name, email, password, grantAllAccess } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ success: false, error: 'Email and password required' });
    }

    // 1. Create User with Admin API (auto-confirms email)
    const { data: userResponse, error: createUserError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        first_name: name || 'Demo',
        last_name: 'User',
        is_demo: true
      }
    });

    if (createUserError) {
      return NextResponse.json({ success: false, error: createUserError.message });
    }

    const userId = userResponse.user.id;

    // 2. Ensure Profile is setup
    await supabaseAdmin.from('profiles').upsert({
      id: userId,
      full_name: name || 'Demo User',
      admission_completed: true,
      target_exam: 'Multiple'
    });

    // 3. Grant All Access if requested
    if (grantAllAccess) {
      const purchasesToInsert = ALL_MOCK_IDS.map(seriesId => ({
        user_id: userId,
        series_id: seriesId,
        amount: 0,
        status: 'success',
        order_id: `demo_order_${Math.random().toString(36).substring(7)}`,
        payment_id: `demo_pay_${Math.random().toString(36).substring(7)}`
      }));

      const { error: purchaseError } = await supabaseAdmin.from('purchases').insert(purchasesToInsert);
      
      if (purchaseError) {
        console.error('Error granting access:', purchaseError);
        return NextResponse.json({ success: false, error: purchaseError.message });
      }
    }

    return NextResponse.json({ success: true, message: 'Demo account created successfully!', user: userResponse.user });

  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
