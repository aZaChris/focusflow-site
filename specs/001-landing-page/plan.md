# Implementation Plan: Landing page vetrina

**Branch**: `001-landing-page` | **Date**: 2026-09-16 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/001-landing-page/spec.md`

## Summary

One-page landing statica (React) con hero, 5 sezioni feature (una per
capacità reale dell'app FocusFlow: habit/mood, timeline, diario vocale AI,
widget Android, abbonamento), un mockup telefono riusabile, footer. Animata
allo scroll con Framer Motion, rispetta `prefers-reduced-motion`. Nessun
backend.

## Technical Context

**Language/Version**: TypeScript 5.x, React 19

**Primary Dependencies**: Vite, Tailwind CSS, `motion` (Framer Motion)

**Storage**: N/A (contenuto statico in componenti/config)

**Testing**: nessun test automatico richiesto per v1 (sito statico senza
logica di business) — build (`tsc -b && vite build`) è il gate.

**Target Platform**: Web statico (deploy Vercel/Netlify/GitHub Pages)

**Project Type**: single-page app statica

**Performance Goals**: primo paint percepito rapido su mobile; animazioni a
60fps senza jank

**Constraints**: mobile-first da 360px; niente libreria UI pesante oltre
Tailwind + motion

**Scale/Scope**: una pagina, ~6-7 sezioni

## Constitution Check

- Static-First: OK, nessun backend previsto.
- Real Product, Real Claims: le 5 sezioni feature mappano 1:1 le feature
  001-006 già implementate in `~/focusflow/repo`.
- Renameable: nome in `src/config/brand.ts`.
- Performance & Motion Discipline: una sola libreria di animazione (`motion`).
- Mobile-First Responsive: Tailwind breakpoints, hero testato a 360px.

Nessuna violazione da giustificare.

## Project Structure

### Documentation (this feature)

```text
specs/001-landing-page/
├── plan.md              # questo file
├── spec.md              # requisiti
└── tasks.md             # task eseguibili
```

### Source Code (repository root)

```text
focusflow-site/
├── src/
│   ├── config/
│   │   └── brand.ts          # nome prodotto, colori — unica fonte di verità
│   ├── data/
│   │   └── features.ts       # le 5 feature reali (titolo/descrizione)
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── FeatureSection.tsx
│   │   ├── PhoneMockup.tsx
│   │   ├── Footer.tsx
│   │   └── ScrollReveal.tsx  # wrapper motion per l'animazione in ingresso
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.* / index.css
└── package.json
```

**Structure Decision**: Vite React-TS "single project" standard (stessa
struttura di `~/portfolio`), niente cartella `backend/`.

## Complexity Tracking

Nessuna violazione della constitution — tabella non necessaria.
