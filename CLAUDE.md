@AGENTS.md

# Aidan Herderschee — Personal Academic Website

## Overview

Personal academic website for Aidan Herderschee, theoretical physicist at the Institute for Advanced Study, Princeton. Built with Next.js (App Router), TypeScript, and Tailwind CSS v4. Statically exportable via `output: 'export'` for deployment on GitHub Pages, Netlify, or Vercel.

## Tech Stack

- **Next.js 16** with App Router and TypeScript
- **Tailwind CSS v4** (configured in `globals.css` via `@theme`, no `tailwind.config.ts`)
- **Static export** — `next.config.ts` sets `output: 'export'` and `images: { unoptimized: true }`
- **No CMS** — all content lives in TypeScript data files under `src/data/`
- **Dark mode** — class-based toggle via `ThemeProvider`, persisted in localStorage

## Commands

- `npm run dev` — start dev server on localhost:3000
- `npm run build` — build and export static site to `out/`
- `npm run lint` — run ESLint

## File Structure

```
src/
  app/
    page.tsx                          Home / About page
    layout.tsx                        Root layout (Inter font, Nav, Footer, ThemeProvider)
    globals.css                       Tailwind v4 config, CSS variables, dark mode
    publications/page.tsx             Publications list with search/filter
    research/page.tsx                 Research overview (card grid)
    research/[slug]/page.tsx          Individual project detail pages
    research/[slug]/[direction]/page.tsx  Individual research direction pages
    cv/page.tsx                       CV with timeline and PDF download button
  components/
    Nav.tsx                           Sticky top nav, mobile hamburger, dark mode toggle
    Footer.tsx                        Copyright and last-updated footer
    ThemeProvider.tsx                  Dark mode context provider (client component)
    PublicationList.tsx               Publication list with search (client component)
    SearchFilter.tsx                  Search input (client component)
    ProjectCard.tsx                   Research project card with background image
    ProjectDetail.tsx                 Project detail page layout
    Timeline.tsx                      CV timeline component
    TagBadge.tsx                      Tag pill component
  data/
    profile.ts                        Name, title, affiliation, bio, external links
    publications.ts                   25 publications with authors, titles, arXiv IDs, journals
    projects.ts                       4 research projects, each with research directions
    cv.ts                             Education and position entries
```

## Pages

| Route | Description |
|---|---|
| `/` | Home/About — name, title, bio, headshot, icon links (Scholar, arXiv, ORCID, INSPIRE, email) |
| `/research` | Research overview — 4 project cards with Unsplash background images |
| `/research/[slug]` | Project detail — overview, clickable research direction cards, key publications, tags |
| `/research/[slug]/[direction]` | Research direction — 2-paragraph summary, related publications, tags |
| `/publications` | All 25 publications grouped by year, searchable/filterable |
| `/cv` | Timeline of positions and education, PDF download button |

## Research Projects (in display order)

1. **Holography** — BFSS matrix model, stringy algebras/stretched horizons, perturbative holographic correlators
2. **Classical Gravitational Waves** — waveforms from amplitudes, asymptotic peeling
3. **Inflation** — field excursion bounds, cosmological templates (Witten diagrams)
4. **Bootstrapping String Theory** — string bootstrap (monodromy, KLT, EFT-hedron, Veneziano uniqueness)

## Data Files

All content is in `src/data/`. To update:

- **Add a publication**: add an entry to the `publications` array in `publications.ts`
- **Add a research direction**: add a `ResearchDirection` object to a project's `directions` array in `projects.ts` (include `slug`, `title`, `description`, `fullDescription` [2 paragraphs], `papers` [arXiv IDs])
- **Update bio/links**: edit `profile.ts`
- **Update CV**: edit `cv.ts`
- **Swap a project image**: change the `imageUrl` and `imageCredit` in `projects.ts`

## Design

- **Color palette**: `#1a1a1a` text on white, `#3d5a80` slate-blue accent, dark mode support
- **Typography**: Inter from Google Fonts, 18px base
- **Layout**: max 720px for prose, 960px for card grids
- **Images**: Unsplash with credits displayed on cards
- **Project overviews** support markdown-style links (`[text](url)`) rendered via `dangerouslySetInnerHTML`

## Notes

- `params` in dynamic routes are `Promise`-based (Next.js 16) — must be awaited
- The CV "Download PDF" button links to `/cv.pdf` — place the file in `public/`
- Place a headshot at `public/headshot.jpg` (the home page references it)
- Writing style follows `style_guide.md` adapted for a public audience: broad-to-narrow funnel, "we" voice, concrete physical anchoring, no em dashes
