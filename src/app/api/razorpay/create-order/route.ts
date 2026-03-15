import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import crypto from 'crypto';

export async function POST(req: Request) {
    try {
        const { amount, currency = 'INR', receipt } = await req.json();

        if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
            return NextResponse.json({ success: false, error: 'Razorpay keys missing from environment' }, { status: 500 });
        }

        const razorpay = new Razorpay({
            key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        // Create an order
        const options = {
            amount: amount * 100, // Amount in the smallest currency unit
            currency,
            receipt: receipt || crypto.randomBytes(10).toString('hex'),
        };

        const order = await razorpay.orders.create(options);
        return NextResponse.json({ success: true, order });
    } catch (error: any) {
        console.error('Razorpay Order error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
