# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary — hiring.** Recruiters, engineering managers, and technical leads screening a full-stack engineer for a role. They arrive from a job application, a LinkedIn or GitHub profile, or a shared link, and they skim on desktop with several candidate tabs open. They are deciding within seconds whether to keep reading or open the resume.

**Secondary — prospective clients.** People with budget for contract or product work, arriving from a referral or a social post. They are weighing whether this person can carry a product end to end.

## Product Purpose

A personal portfolio for Ojomona Ethan Inedu ("Monaski"), a full-stack engineer in Nigeria working remotely. It exists to turn a skim into one of two actions, in priority order: an interview conversation, then a qualified enquiry. Success is a reply, not time on page.

## Positioning

Works where product decisions and engineering decisions are the same decision — carrying a product from the first useful interaction through to the systems that keep it reliable. Full-stack as in owning the whole path, not as in listing both ends of it.

## Operating Context

- Read on desktop first, mobile second.
- Evaluated alongside other candidates and other portfolios, in a skim.
- Visitors may leave for the resume PDF, GitHub, LinkedIn, or X in a new tab.
- Contact runs through an on-site form (Resend-backed) or direct email.
- Every project listed is deployed and publicly reachable.

## Capabilities and Constraints

- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4.
- Content is typed data under `lib/`: `projects.ts`, `experience.ts`.
- Three case studies with real screenshots and live URLs: JSYK, Zury, StartupLens.
- Contact form posts to `/api/contact`, sends via Resend, and requires `RESEND_API_KEY`.
- Fonts are self-hosted; no third-party font CDN at runtime.

## Brand Commitments

- The name "Monaski" and the full name Ojomona Ethan Inedu are fixed.
- Outbound identities are fixed: GitHub `skidev101`, LinkedIn `ojomonaethaninedu`, X `@monaski_`, email `skidev101@gmail.com`.
- The user's volunteered direction for this work, recorded not expanded: **clean, minimal, professional**.
- **Standing preference (recorded at the user's direction): the category standard.** On 2026-09-28 the user took the standing exit during a direction round — the conventional dark developer portfolio, played straight, without irony or smuggled quirk. Convention is the commitment. Craft bar, named by the user: **Vercel / Linear / Raycast** for restraint and type discipline, plus **Brittany Chiang / Lee Robinson** for clarity and structure.
- **Typeface, chosen by the user:** Instrument Sans for everything, Geist Mono for data only. Rejected: Geist (reads as a Vercel starter signal), Inter (overused default), Schibsted Grotesk (chosen first, then rejected on 2026-10-05 as too generic to carry the page).
- **Hard constraints, named by the user as failure modes:** no "agency flash" (heavy motion, oversized type, animated everything) and no "template-bare minimalism" (generic minimal layout with no point of view).

## Evidence on Hand

- Three project case studies with screenshots under `public/images/{jsyk,zury,startuplens}/` and working live URLs.
- Resume PDF at `public/assets/resume/Ojomona_Inedu_Resume.pdf`.
- Two experience entries in `lib/experience.ts`.

**Absent, and must not be fabricated:** usage metrics, adoption or revenue numbers, performance benchmarks, client names, testimonials, logos, press, or awards. The user confirmed none exist. Any such figure on the page would be invented.

## Product Principles

1. The work is the argument. With no metrics and no testimonials, the projects carry the claim on their own or the claim is not made.
2. Answer the skim first. A hiring reader decides fast, so role, level, and proof must be legible before much scrolling.
3. Depth over breadth. Three projects shown properly beat six shown as thumbnails.
4. One path, two doors. Hiring leads; the client read is served by the same content rather than a competing section.
5. Never claim what cannot be shown.
