# Tasks: Landing page vetrina

**Input**: plan.md, spec.md in questa cartella

- [X] T001 Scaffold progetto Vite + React + TypeScript in `focusflow-site/`
- [X] T002 Installa e configura Tailwind CSS
- [X] T003 Installa `motion` (Framer Motion)
- [X] T004 `src/config/brand.ts` — nome prodotto + colori, unica fonte di verità
- [X] T005 `src/data/features.ts` — le 5 feature reali (habit/mood, timeline,
      diario vocale AI, widget Android, abbonamento)
- [X] T006 `ScrollReveal.tsx` — wrapper motion per animazione in ingresso,
      rispetta `prefers-reduced-motion`
- [X] T007 `PhoneMockup.tsx` — componente riusabile, accetta screenshot come
      prop, placeholder in v1
- [X] T008 `Hero.tsx` — headline, tagline, CTA, phone mockup
- [X] T009 `FeatureSection.tsx` — sezione ripetuta per ogni feature
- [X] T010 `Footer.tsx`
- [X] T011 `App.tsx` — compone le sezioni, sfondo/scroll generale
- [X] T012 Verifica responsive a 360px e build di produzione
- [ ] T013 Sostituire i phone mockup vuoti con screenshot reali dell'app
      (rimandato esplicitamente dall'utente)
- [ ] T014 Collegare i CTA "Scarica per iOS/Android" ai link store reali una
      volta pubblicata
- [X] T015 Primo deploy su Vercel, collegato a
      `github.com/aZaChris/focusflow-site`, dominio
      `focusflow.christianseminerio.dev`
- [X] T016 Applicato design handoff da Claude Design
      (`design-handoff.dc.html`): tema scuro, nav sticky, sezione "Come
      funziona" (4 step), griglia 6 feature (aggiunta "Privacy al centro" —
      MFA/2FA, reale, vedi `useMfa.ts` nel repo app), sezione screenshot a 3
      telefoni, CTA finale, badge posizionamento "Pensata per chi ha l'ADHD"
