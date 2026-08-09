# Procode — Dept. of IT, SSN

Website for the Procode club, built with Next.js 14 (App Router), Tailwind and shadcn/ui.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Create a `.env.local` in the project root (it is gitignored):

```bash
NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon key>
SUPABASE_SERVICE_ROLE_KEY=<service_role key>
NEXT_PUBLIC_API_URL=http://localhost:3000
```

Notes:

- `NEXT_PUBLIC_API_URL` must **not** include `/api` — `config/axios.js` appends it.
- `SUPABASE_SERVICE_ROLE_KEY` is required even though nothing calls it. `lib/supabase/server.js`
  builds a `supabaseAdmin` client at module load, so every Supabase-backed page throws
  `supabaseKey is required` without it.
- The dev server only reads env files at startup — restart after editing.

## Adding an event

Events on `/events` are hardcoded. There is no database or dashboard involved.

1. Crop 2-4 photos to a consistent **4:3** and drop them in `assets/events/`.
   Mixed aspect ratios make the card jump as the hover carousel advances.
2. Import them in `data/events.js` and add an entry to the `Events` array:

   ```js
   import ReactWorkshop1 from "@/assets/events/react-workshop-1.jpg";
   import ReactWorkshop2 from "@/assets/events/react-workshop-2.jpg";

   export const Events = [
     {
       id: "react-workshop-2026",
       name: "React Workshop",
       description: "Short, 1-2 sentences. Plain text — no markdown or line breaks.",
       images: [ReactWorkshop1, ReactWorkshop2],
       start_date: "2026-08-20",
       end_date: "2026-08-20",
       is_handson: true,
     },
   ];
   ```

3. `npm run dev` to check it, then commit.

Details worth knowing:

- `images[0]` is the cover. Omit `images` entirely and the card falls back to a placeholder tile.
- All events appear in one list — there is no upcoming/past split.
- Order in the array does not matter — the page sorts by `start_date`, newest first.
- `end_date` is optional and only affects the date label: set it and the card shows a range
  ("20 – 22 Aug 26") instead of a single date.
- To hide an event without deleting it, comment the entry out.
- `description` is plain text and clamps to four lines in the hover overlay. The full text is
  always visible in the dialog that opens when a card is clicked.

## Other content

Most of this site is hardcoded, not database-driven:

| Page | Source |
| --- | --- |
| `/events` | `data/events.js` + `assets/events/` |
| `/team` | `data/index.js` + `assets/tms/` |
| `/faculty` | `app/(main)/(public)/faculty/page.js` |
| `/procode-cup` | `app/(main)/(public)/procode-cup/page.js` |
| `/leaderboard` | Supabase `leaderboard` table |

## Supabase

Supabase still backs authentication, the `/leaderboard` page, session handling in `middleware.js`,
and the `/dashboard` admin area.

> **The Supabase `events` table is no longer the source of truth for `/events`.**
> `/dashboard` and `/api/event/*` still read and write that table, but nothing public renders it.
> Editing an event there has no effect on the site — change `data/events.js` instead.

The dashboard's create/edit path is also broken in production: `config/axios.js` uses
`process.env.VERCEL_URL`, which is not `NEXT_PUBLIC_`-prefixed and so is `undefined` in the browser.
