# Course Catalog

Lab 1 project for "Advanced Web Technologies" — a small course catalog built with Next.js 16 (App Router), React 19, and TypeScript.

## What's implemented

- Four routes: `/` (home), `/about`, `/courses` (course list), `/courses/[id]` (course detail, dynamic route).
- `lib/courses.ts` simulates a backend with an in-memory list and a 300ms delay.
- `app/courses/page.tsx` and `app/courses/[id]/page.tsx` are Server Components that `await` the mock data directly, no `useEffect`/loading state.
- `app/courses/[id]/page.tsx` awaits `params` (a `Promise<{ id: string }>` in Next.js 16) and calls `generateStaticParams()` so every course page is built ahead of time.
- `app/courses/[id]/loading.tsx` shows a loading state while the mock 300ms delay resolves.
- `app/courses/not-found.tsx` is shown when `notFound()` is called for an unknown course id (try `/courses/does-not-exist`).
- `components/CourseCard.tsx` is a Server Component; the whole card navigates via `next/link`'s `Link`, no client-side handling needed.
- `components/LikeButton.tsx` is the only Client Component (`'use client'`) in the project — it holds the like count in local `useState` and increments it on click.
- Shared navigation (Home / Courses / About) lives in `app/layout.tsx`, styled with Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To verify the production build (also checks `generateStaticParams`):

```bash
npm run build
```

## Deployment

_Add your Vercel link here if you deploy it (bonus task)._
