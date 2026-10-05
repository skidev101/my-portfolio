## Just me😮‍💨🙂‍↕️

Personal portfolio — Next.js 16 (App Router), React 19, Tailwind CSS v4.

### Running locally

```bash
pnpm install
cp .env.example .env.local   # fill in RESEND_API_KEY
pnpm dev
```

Fonts come from `next/font/google` and are self-hosted at build time, so the
build needs network access. No font binaries live in the repo.

### Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Dev server on Turbopack |
| `pnpm build` | Production build, including the TypeScript check |
| `pnpm typecheck` | `tsc --noEmit` on its own |
| `pnpm lint` | ESLint |
| `pnpm format` | Prettier |

### Where things live

| Path | Contents |
| --- | --- |
| `app/globals.css` | Design tokens (`@theme`) and the base layer |
| `lib/projects.ts`, `lib/experience.ts` | Content |
| `lib/palette.ts` | Colour values mirrored for `next/og`, which can't read CSS |
| `components/` | One file per section |
| `PRODUCT.md` | Product truth: users, purpose, constraints, evidence |
| `.impeccable/surface/home.md` | The direction contract for the home surface |

### Constraints worth knowing

- **Dark-only by design.** There is no light theme and no theme toggle.
- **One typeface, two roles.** Instrument Sans carries display, body, and UI.
  Geist Mono is reserved for content that is actually data — stack tags and
  years — never as a decorative "technical" costume.
- **The accent is not a fill.** `--color-signal` marks status, focus, and link
  hover only. Primary buttons are ink-on-dark, not orange.
- **No metrics, testimonials, or client names exist.** Do not add numbers,
  quotes, or logos to the page; see the Evidence section of `PRODUCT.md`.
- The contact form needs `RESEND_API_KEY`. Without it the API route returns 500
  and logs which variable is missing.
- `app/projects/[slug]` pages are statically generated from `lib/projects.ts`.
