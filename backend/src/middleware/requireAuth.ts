import type { Request, Response, NextFunction } from 'express';
import { buildSupabaseAdmin } from '../lib/supabase';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      auth?: {
        user: {
          id: string;
          email: string | null;
        };
      };
    }
  }
}

export async function requireAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.header('authorization') || '';
  const [, token] = header.split(' ');

  if (!token) {
    return res.status(401).json({ error: 'missing_bearer_token' });
  }

  try {
    const supabase = buildSupabaseAdmin();
    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data.user) {
      return res.status(401).json({ error: 'invalid_token' });
    }

    req.auth = {
      user: {
        id: data.user.id,
        email: data.user.email ?? null,
      },
    };

    return next();
  } catch {
    return res.status(500).json({ error: 'auth_internal_error' });
  }
}
