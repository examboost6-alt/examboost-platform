import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';

export async function POST(req: Request) {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        return NextResponse.json({ success: false, error: 'Supabase envs missing' }, { status: 500 });
    }
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    // Server-side Supabase client to securely update DB
    const supabase = createClient(supabaseUrl, supabaseKey);
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId, seriesId, amount } = await req.json();

        // Verify Signature
        const secret = process.env.RAZORPAY_KEY_SECRET;
        if (!secret) return NextResponse.json({ success: false, error: 'Razorpay secret missing' }, { status: 500 });

        const body = razorpay_order_id + "|" + razorpay_payment_id;
        
        const expectedSignature = crypto
            .createHmac('sha256', secret)
            .update(body.toString())
            .digest('hex');

        const isAuthentic = expectedSignature === razorpay_signature;

        if (isAuthentic) {
            const numExtracted = String(seriesId).replace(/[^0-9]/g, '');
            const numericSeriesId = numExtracted ? parseInt(numExtracted, 10) : -1;

            // Save to database
            const { error } = await supabase.from('purchases').insert({
                user_id: userId,
                series_id: numericSeriesId,
                amount: amount,
                order_id: razorpay_order_id,
                payment_id: razorpay_payment_id,
                status: 'success'
            });

            if (error) {
                console.error('Database error storing purchase:', error);
                return NextResponse.json({ success: false, error: 'Database error' }, { status: 500 });
            }

            return NextResponse.json({ success: true, message: 'Payment verified and recorded successfully' });
        } else {
            return NextResponse.json({ success: false, error: 'Invalid Signature' }, { status: 400 });
        }
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
