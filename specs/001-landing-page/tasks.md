# Tasks: Landing page vetrina

**Input**: plan.md, spec.md in questa cartella

- [X] T001 Scaffold progetto Vite + React + TypeScript in `foxus-site/`
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
- [ ] T013 Sostituire i mini-mockup illustrativi (hero + screenshot) con
      screenshot reali dell'app (rimandato esplicitamente dall'utente)
- [ ] T014 Collegare i CTA "Scarica per iOS/Android" ai link store reali una
      volta pubblicata
- [X] T015 Primo deploy su Vercel, collegato a
      `github.com/aZaChris/focusflow-site`, dominio
      `focusflow.christianseminerio.dev` (repo e dominio non rinominati col
      rebrand prodotto FocusFlow→Foxus — vedi T018)
- [X] T016 Applicato design handoff v1 da Claude Design
      (`design-handoff.dc.html`): tema scuro, nav sticky, sezione "Come
      funziona" (4 step), griglia 6 feature, sezione screenshot a 3 telefoni,
      CTA finale — superato da T017
- [X] T017 Applicato design handoff v2 (`design-handoff-v2.dc.html`, progetto
      "Foxus Website" nello zip "Foxus mobile app prototype"): tema
      chiaro/scuro con toggle persistente (`localStorage`), font Manrope,
      logo volpe reale (`public/fox-icon.png`), badge "Calma, ogni giorno"
      (sostituisce il posizionamento ADHD), mini-mockup popolati (non più
      vuoti: hero + Abitudini/Umore/Diario), icone SVG reali per le 6
      feature. Nota: "Promemoria gentili" (una delle 6 feature) non risulta
      implementata nel codice dell'app (nessun expo-notifications/reminder
      trovato) — copy da verificare con l'utente prima del lancio, vedi
      [[foxus-site-landing]] in memoria
- [ ] T018 Verificare/allineare il logo e i colori del sito con l'eventuale
      handoff dell'app (separato, l'utente lo affronterà a parte) quando il
      rebrand sarà definitivo; valutare se rinominare anche repo GitHub e
      dominio custom da `focusflow-*` a `foxus-*`
- [X] T019 Revisione SEO/security (2026-09-28): sincronizzato il commit di
      rebrand rimasto solo locale (mai pushato/deployato dal 18/09) e
      deployato in produzione insieme a:
  - `lang="it"` (era `en`), `<meta name="theme-color">` sincronizzato col
    toggle chiaro/scuro, canonical, Open Graph + Twitter Card tags
  - `public/robots.txt` + `public/sitemap.xml`
  - `vercel.json`: CSP, X-Frame-Options, X-Content-Type-Options,
    Referrer-Policy, Permissions-Policy — verificati in produzione (nessun
    errore console/CSP dopo il deploy, incluso il toggle dark mode)
  - `npm audit`: 0 vulnerabilità; nessun secret committato (`.env*`,
    `.vercel` già ignorati)
  - Nota: `style-src` include `'unsafe-inline'` perché i componenti usano
    largamente `style={{...}}` inline per il tema — necessario finché lo
    theming resta così, altrimenti servirebbe un refresh a CSS
    variables/classi Tailwind statiche
  - sitemap.xml ha un solo URL (sito one-page, corretto per ora)
- [X] T020 Social card `og:image` 1200×630 (`public/og-image.png`), al posto
      del solo logo volpe — renderizzata da un template HTML on-brand
      (Manrope, palette chiara, headline+tagline), `twitter:card` passato a
      `summary_large_image`, verificata live (200, referenziata
      correttamente nei meta tag)
