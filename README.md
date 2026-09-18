# Norcal

Norcal is a functional MVP marketplace for buying and selling vehicles online.

Features included:
- user sign up and login with backend API routes
- real transaction checkout route using Stripe when configured
- account settings and privacy controls
- marketplace listings and filters
- seller profile pages
- secure-style messaging flow
- dashboard overview for sellers and buyers
- language and currency preferences
- creator commission and Pro upgrade UI
- local persistence fallback for browser-only use
- Prisma SQLite backend for persistent data

## Setup

1. Copy `.env.example` to `.env`
2. Run `npm install`
3. Run `npx prisma db push`
4. Run `npm run dev`
5. Open `http://localhost:3000`

## Stripe setup

- Add your Stripe secret key in `.env` as `STRIPE_SECRET_KEY`
- Optionally set `NEXT_PUBLIC_APP_URL`
- Without a Stripe key, checkout falls back to a demo success page

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Prisma
- SQLite
- Stripe
