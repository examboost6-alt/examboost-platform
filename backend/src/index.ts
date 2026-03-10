import 'dotenv/config';
import express, { type Request, type Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { buildSupabaseAdmin } from './lib/supabase';
import { requireAuth } from './middleware/requireAuth';
import { healthRouter } from './routes/health';
import { paymentsRouter } from './routes/payments';

const app = express();

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

app.use(helmet());
app.use(
  cors({
    origin: (_origin: string | undefined, cb: (err: Error | null, allow?: boolean) => void) => cb(null, true),
    credentials: true,
  })
);

app.use('/api/payments', paymentsRouter);

app.use(express.json({ limit: '1mb' }));
app.use(morgan('combined'));

app.use('/health', healthRouter);

app.get('/api/me', requireAuth, async (req: Request, res: Response) => {
  const supabase = buildSupabaseAdmin();
  if (!req.auth) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  const userId = req.auth.user.id;

  const { data, error } = await supabase.auth.admin.getUserById(userId);
  if (error) {
    return res.status(500).json({ error: 'failed_to_fetch_user' });
  }

  return res.json({ user: data.user });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend listening on http://0.0.0.0:${PORT}`);
});
