# ExamBoost

## Frontend (Next.js) — Vercel

### Local

```bash
npm install
npm run dev
```

### Deploy
- Import this repo in Vercel
- Framework: Next.js
- Build command: `npm run build`
- Output: default

#### Frontend env vars
- `NEXT_PUBLIC_API_BASE_URL` = your Render backend URL (example: `https://examboost-backend.onrender.com`)
- `NEXT_PUBLIC_SUPABASE_URL` = your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your Supabase anon public key

---

## Backend (Express + TypeScript) — Render

Backend code lives in `backend/`.

### Local

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Render deploy (Blueprint)
This repo includes `render.yaml`.

- Create a new Render Blueprint from this repo
- Set env vars in Render dashboard:
  - `SUPABASE_URL`
  - `SUPABASE_SERVICE_ROLE_KEY`
  - `RAZORPAY_KEY_ID`
  - `RAZORPAY_KEY_SECRET`
  - `RAZORPAY_WEBHOOK_SECRET`

Health check:
- `GET /health`

### API
- `GET /api/me` (requires `Authorization: Bearer <supabase_access_token>`)
- `POST /api/payments/webhook/razorpay` (Razorpay webhook)

---

## Notes
- Do not commit `.env` files.
