---
description: Deploy ExamBoost (Vercel frontend + Render backend + Supabase + Razorpay + domain)
---

# Deploy workflow

## 0) Prerequisites

- GitHub repo is up to date on `main`.
- Supabase project created.
- Razorpay account created (test/live as needed).
- Domain: `examboost.in` (primary should be `www.examboost.in`).

## 1) Supabase (Database + Auth + Storage)

- Create a Supabase project.
- Note these values:
  - `SUPABASE_URL` (Project Settings -> API)
  - `SUPABASE_SERVICE_ROLE_KEY` (Project Settings -> API)
- Storage:
  - Create buckets for assets as needed (e.g. `images`, `pdfs`).
  - Configure bucket policies according to whether files should be public or private.

## 2) Render (Backend)

### Option A: Blueprint (recommended)

- Render Dashboard -> New -> Blueprint
- Select the GitHub repo
- Render reads `render.yaml` and creates the service

### Service settings to confirm

- Root Directory: `backend`
- Build Command: `npm ci && npm run build`
- Start Command: `npm run start`
- Health Check Path: `/health`

### Render environment variables (required)

- `NODE_ENV` = `production`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`
- `RAZORPAY_WEBHOOK_SECRET`
- `CORS_ORIGIN` = `https://www.examboost.in`

### Post-deploy checks

- Open: `https://<your-render-service>.onrender.com/health`
  - Expect: `{ ok: true }`

## 3) Vercel (Frontend)

- Vercel Dashboard -> Add New -> Project -> Import GitHub repo
- Framework: Next.js (auto)
- Root Directory: repo root
- Build Command: `npm run build`

### Vercel environment variables

- `NEXT_PUBLIC_API_BASE_URL` = `https://<your-render-service>.onrender.com`

## 4) Domain (Vercel)

- Vercel -> Project -> Settings -> Domains
- Add both:
  - `www.examboost.in`
  - `examboost.in`
- Set Primary: `www.examboost.in`

### DNS (if nameservers are on Vercel)

- Vercel Domains -> `examboost.in` -> DNS
- Ensure:
  - `A` record: `@` -> `76.76.21.21`
  - `CNAME` record: `www` -> `cname.vercel-dns.com`

### Redirect

- Confirm `https://examboost.in/*` redirects to `https://www.examboost.in/*`.

## 5) Razorpay webhook

- In Razorpay dashboard, add webhook URL:
  - `https://<your-render-service>.onrender.com/api/payments/webhook/razorpay`
- Set webhook secret in Render env as `RAZORPAY_WEBHOOK_SECRET`.

## 6) Google Search Console

- Add property for `https://www.examboost.in`
- Submit sitemap:
  - `https://www.examboost.in/sitemap.xml`
