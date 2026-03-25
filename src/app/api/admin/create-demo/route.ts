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
      const { error: purchaseError } = await supabaseAdmin.from('purchases').insert([{
        user_id: userId,
        series_id: 'ALL',
        amount: 0,
        status: 'success',
        order_id: `demo_order_${Math.random().toString(36).substring(7)}`,
        payment_id: `demo_pay_${Math.random().toString(36).substring(7)}`
      }]);
      
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
