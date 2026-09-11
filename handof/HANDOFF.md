# Handoff — 2026-09-11

Next task: **update the team page.**

## Where the project stands

- Branch `profile`. Working tree is clean except **`CLAUDE.md`, which is untracked** —
  it was written last session and never committed. Commit it or delete it; don't leave it
  drifting.
- The events page rewrite is **done and merged** (PR #5, `add_events` → `main`).
  `/events` now reads `data/events.js`; the Supabase `events` table is dormant.
- The previous handoff lives in Claude's memory directory and is **stale** — it still says
  the events work is uncommitted. This file supersedes it.

### Events leftovers (unchanged, still open)

Not blocking the team work, but they survived the merge:

- Three events have no date: The SIH Launchpad, Online Internship Info Session, Invente.
  They render without a date line and sort last. 6 of 9 events are dated.
- ML & DL Bootcamp needs an `end_date` (it ran two days).
- Invente still has no photo — it shows the fallback tile.

All five are marked `// TODO` in `data/events.js`.

## The team page

Two files, no database:

| What | Where |
| --- | --- |
| Page | `app/(main)/(public)/team/page.js` |
| Data | `data/index.js` — exports `TeamMembers` |
| Card component | `components/Member.js` |
| Photos | `assets/tms/` (22 files, plus an `Old_Images/` subfolder of 14 superseded headshots) |

### Data shape

`TeamMembers` is an array of **sections**, each with a `title` and a `members` array.
Current sections, in render order:

1. Office Bearers
2. Team Heads and Sub Heads
3. Core Committee
4. Design, Marketing and Social Media Heads

21 members total. Each member:

```js
{
  name: "Ashwin Kumar S",
  role: "President",
  bio: "...",              // free text, shown in the About dialog
  year: "IV",              // Roman numeral string; rendered as "{year} Year"
  image: AshwinKumar,      // static import from @/assets/tms/
  socials: { github: null, linkedin: null, instagram: null },
}
```

`socials` values are **usernames, not URLs** — `Member.js` builds the full link
(`https://www.github.com/{github}/` etc.). A `null` value hides that icon.

Note the page imports from `@/data` (the barrel), not `@/data/index`.

### Adding or changing a member

1. Drop the photo in `assets/tms/`, named `First_Last.jpg`.
2. Add an `import` at the top of `data/index.js` and reference it as `image`.
3. Add the member object to the right section's `members` array.

## Traps in `components/Member.js`

Three things will bite when editing the roster. **Read these before adding anyone.**

1. **A member with no `image` crashes the About dialog.** The card guards with
   `member?.image ? ... : <UserRound />`, but the dialog at roughly line 50 passes
   `src={member.image}` unguarded. `next/image` throws on `undefined`. Either always
   supply an image, or add the same guard in the dialog.
2. **A member with no `socials` key crashes the card.** Line 14 destructures
   `const { socials } = member;` and then reads `socials.github` unguarded. Always
   include the `socials` object, even if all three are `null`.
3. **`key={index}`** is used for both sections and members, so reordering the array
   re-renders rather than moves. Harmless today; worth knowing if animation is added.

Only 9 of 63 social fields are currently filled (1 github, 5 linkedin, 3 instagram) —
the rest render with no icons at all. If the update includes collecting socials, that's
the biggest visible gap on the page.

## Commands

```bash
npm run dev     # :3000
npm run build
npm run lint
```

**Never run `npm run build` while `npm run dev` is live** — they share `.next/` and the
build corrupts the running server's chunks (`Cannot find module './682.js'`).
Fix is `rm -rf .next` and restart. This has already happened once.

`.env.local` must exist or every Supabase-backed page 500s — including the non-obvious
`SUPABASE_SERVICE_ROLE_KEY`, which is required even though nothing calls it. See
`CLAUDE.md`.

## Verifying team page changes

The dev server renders `/team` server-side, so changes can be checked by fetching it:

```bash
curl -s http://localhost:3000/team | grep -c 'class="font-bold"'   # member cards
```

Check section headings render, every member has a photo or the fallback avatar, and
open one About dialog in a browser — the dialog is the part with the unguarded image.
