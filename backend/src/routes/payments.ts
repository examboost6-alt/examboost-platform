import express, { Router, type Request, type Response } from 'express';
import crypto from 'crypto';

export const paymentsRouter = Router();

paymentsRouter.post('/webhook/razorpay', express.raw({ type: '*/*' }), (req: Request, res: Response) => {
  const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return res.status(500).json({ error: 'missing_RAZORPAY_WEBHOOK_SECRET' });
  }

  const signature = req.header('x-razorpay-signature');
  if (!signature) {
    return res.status(400).json({ error: 'missing_signature' });
  }

  const raw = req.body as unknown as Buffer | undefined;
  if (!raw) {
    return res.status(400).json({ error: 'missing_raw_body' });
  }

  const expected = crypto.createHmac('sha256', webhookSecret).update(raw).digest('hex');
  if (expected !== signature) {
    return res.status(400).json({ error: 'invalid_signature' });
  }

  // TODO: parse event + upsert subscription/payment status in Supabase.
  return res.status(200).json({ received: true });
});

// Add placeholder route for creating order (frontend will call this)
paymentsRouter.post('/razorpay/order', (_req: Request, res: Response) => {
  return res.status(501).json({ error: 'not_implemented' });
});
