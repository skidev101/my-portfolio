# Surface brief — home

Mode: **Experience** (the work leads once the reader knows who is speaking).
Primary target: `app/page.tsx`.

## Direction contract

THESIS: The portfolio of an engineer who owns a product end to end, set as a
plain, precisely typeset document. It refuses the decorated-developer-template —
no monogram, no canvas, no accent-drenched motifs, no micro-labels on
everything. Confidence comes from typography, spacing, and restraint, not
ornament. The category standard is the commitment, taken deliberately; it is
executed straight.

OWN-WORLD: Near-black ground `#000000`; a three-step neutral text ramp
`#f5f6f7` / `#9ba1a6` / `#7d8388`; 1px hairlines at `#1f2124` and `#2e3135`; a
single warm accent `#f07a3c` reserved strictly for status, focus, and link
hover — never for large fills or primary buttons. One typeface, Instrument
Sans, at 400/500/600. Geist Mono appears only where the content is actually
data: stack tags and years. Recognisable with all content removed by its
hairline-and-ramp discipline and the absence of any decorated surface.

STORY: In order — who this is, that they are available, what they do, and what
they have shipped. The reader then opens the résumé, opens a case study, or
writes. Hiring leads; the client read is served by the same content.

FIRST VIEWPORT: Name set large (clamp 2.75–4.5rem, tracking -0.03em) at the top
of the measure. Directly beneath, role and availability on one line, the
availability carrying the accent dot. Beneath that, a two-line positioning
statement at ~1.25rem in the secondary ramp. Two actions: a white primary
("View work") and an outlined secondary ("Résumé"). Nothing else in the
viewport — no image, no ornament, no scroll cue.

FORM: The category standard, played straight. Position in the ordered list: the
standing exit, chosen by the user on 2026-09-28 after the direction round.
Build path: **code-led** — no image generation is available in this
environment, so the comp round is skipped by contract and the ambition lives in
this FIRST VIEWPORT block and the named signature interaction below.
Seed key: **none — the roll did not run.** `concept-seed` is absent from the
installed `impeccable` build (only `detect` and `ignores` ship here), so the
anti-convergence dice never rolled and directions were derived by hand and
presented through the structured question tool instead of the decision page.
That substitution is disclosed to the user and is a material weakening of this
round's guarantee.

SIGNATURE INTERACTION: Restrained press-and-focus feedback. Every control
answers on pointer-down (`active:scale-[0.98]`, 120ms, strong ease-out) and
carries a visible accent focus ring on `:focus-visible`. Link hover moves colour
only, never position. There is no scroll-triggered animation anywhere; the one
authored motion is a single 500ms fade-up on the hero's first paint via
`@starting-style`, which cannot hide content from a capture.

FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, DESIGN.md, and every shipping raster carrying its
provenance.

## Unresolved

- No portrait. `public/dp.png` was deleted during the preceding cleanup as
  unreferenced; a photograph was not evaluated, and a bad portrait is worse
  than none. The about section is type-only until a real image is supplied.
- Case-study depth (process, decisions, trade-offs) is currently thin in
  `lib/projects.ts`. The prose there is the user's; expanding it is their call.
