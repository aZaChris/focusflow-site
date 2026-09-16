# FocusFlow Site Constitution

## Core Principles

### I. Static-First
This is a marketing/showcase site, not the product. No backend, no auth, no
database. Content that changes (copy, screenshots, product name) lives in one
place editable without touching layout code. Deploy target is a static host
(Vercel/Netlify/GitHub Pages) — a build step is fine, a server is not.

### II. Real Product, Real Claims
Every feature claim on the site maps to a feature that actually exists in the
FocusFlow app (`~/focusflow/repo`). No invented capabilities. Screenshots/mockups
show the real UI (or a faithful placeholder clearly built from it) — never a
generic stock app screenshot.

### III. Renameable
The product name changes soon. The name string lives in exactly one place
(a constant/config), never hardcoded across components or copy.

### IV. Performance & Motion Discipline
Animations must feel fluid (60fps) without costing load time: no animation
library beyond one (Framer Motion), no unused UI kit, no heavy asset (images
optimized/lazy-loaded). Motion enhances scroll narrative, it doesn't replace
content.

### V. Mobile-First Responsive
Primary audience finds this from a phone link. Layout, hero, and phone-mockup
section must work down to 360px width before desktop polish.

## Technology Constraints

- Vite + React + TypeScript (matches existing `~/portfolio` project conventions).
- Tailwind CSS for styling, Framer Motion (`motion`) for scroll/entrance animation.
- No CMS, no i18n framework for v1 (Italian copy, hardcoded) — add if a second
  language is actually requested.

## Governance

This constitution guides `focusflow-site` only. Simplicity (Principle I) wins
ties. Amend by editing this file when a real constraint changes.

**Version**: 1.0.0 | **Ratified**: 2026-09-16 | **Last Amended**: 2026-09-16
