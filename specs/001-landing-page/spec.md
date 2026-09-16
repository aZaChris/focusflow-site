# Feature Specification: Landing page vetrina

**Feature Branch**: `001-landing-page`

**Created**: 2026-09-16

**Status**: Draft

**Input**: User description: "Sito vetrina per l'app FocusFlow (nome cambierà), stack moderno (React), fluido/animato/scorrevole, mostra tutte le capacità del prodotto, con mockup di un telefono che mostra gli screen (in una fase successiva)."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Capire cosa fa il prodotto in pochi secondi (Priority: P1)

Un visitatore arriva da un link (social, App Store, passaparola) e in meno di
10 secondi deve capire cosa fa FocusFlow e per chi è.

**Why this priority**: senza questo, nessuna delle altre sezioni verrà letta.

**Independent Test**: aprire la home, leggere solo hero (titolo + sottotitolo)
→ un utente capisce che è un'app di produttività/benessere personale con
habit tracking, mood, timeline giornaliera.

**Acceptance Scenarios**:

1. **Given** un visitatore atterra sulla home, **When** la pagina carica,
   **Then** vede hero con headline, sottotitolo, CTA entro il primo viewport.
2. **Given** un visitatore su mobile (360px), **When** apre la home,
   **Then** il layout è leggibile senza scroll orizzontale.

---

### User Story 2 - Scorrere le funzionalità reali del prodotto (Priority: P1)

Il visitatore scorre la pagina e vede, una sezione per volta, le feature
reali dell'app: habit & mood tracking, timeline giornaliera, diario vocale
AI, widget Android, abbonamento premium.

**Why this priority**: è il contenuto centrale della vetrina — mostra "tutte
le capacità" come richiesto.

**Independent Test**: scrollare dall'hero al footer → ogni feature reale
dell'app ha una sezione dedicata con titolo, descrizione breve, e
un'illustrazione/animazione.

**Acceptance Scenarios**:

1. **Given** il visitatore scorre la pagina, **When** una sezione feature
   entra nel viewport, **Then** appare con una transizione fluida (fade/slide),
   non uno scatto brusco.
2. **Given** un lettore che disabilita le animazioni (`prefers-reduced-motion`),
   **When** scorre la pagina, **Then** il contenuto è comunque leggibile senza
   animazioni.

---

### User Story 3 - Vedere l'app "in mano" (Priority: P2)

Il visitatore vede un mockup di telefono con lo screen reale dell'app, per
farsi un'idea visiva prima di scaricarla.

**Why this priority**: rafforza la fiducia ("è un prodotto vero"), ma la
pagina è già utile senza (v1 può usare un placeholder finché non ci sono
screenshot reali esportati dall'app).

**Independent Test**: nella sezione hero o feature principale, un frame di
telefono mostra uno screenshot (reale o placeholder) dell'app.

**Acceptance Scenarios**:

1. **Given** la sezione con il mockup telefono, **When** la pagina carica,
   **Then** il frame è centrato, proporzionato, leggibile su mobile e desktop.

---

### Edge Cases

- Nome prodotto: cambierà a breve → non deve essere sparso hardcoded ovunque.
- Nessuno screenshot reale disponibile ancora → placeholder chiaramente
  riconducibile allo stile dell'app (stessi colori/icone), non stock generico.
- JS disabilitato o animazioni lente su device datati → contenuto deve
  restare leggibile (niente contenuto nascosto dietro animazione che non parte).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: La pagina MUST presentare hero con nome prodotto, tagline,
  CTA (es. "Scarica l'app" / link store, placeholder se non pubblicata).
- **FR-002**: La pagina MUST includere una sezione per ciascuna feature reale:
  habit & mood tracking, timeline giornaliera, diario vocale AI, widget
  Android "Now & Next", abbonamento premium.
- **FR-003**: Le sezioni MUST animarsi in ingresso allo scroll (Framer Motion),
  rispettando `prefers-reduced-motion`.
- **FR-004**: La pagina MUST includere un componente "phone mockup" riusabile
  che accetta un'immagine/screenshot come prop (placeholder in v1).
- **FR-005**: Il nome del prodotto MUST essere definito in un'unica costante
  (`src/config/brand.ts`), mai stringa ripetuta nei componenti.
- **FR-006**: Il layout MUST essere responsive mobile-first (360px → desktop).
- **FR-007**: La pagina MUST avere un footer con link (repo/contatti,
  placeholder se non definiti).

### Key Entities

- **Feature**: titolo, descrizione breve, icona/illustrazione — una per ogni
  capacità reale dell'app (fonte: `~/focusflow/repo` README/specs).
- **BrandConfig**: nome prodotto, colore primario/sfondo, eventualmente logo.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Prima sezione (hero) comunica il value proposition senza scroll,
  su schermo 360×640.
- **SC-002**: Tutte e 5 le feature reali dell'app hanno una sezione dedicata.
- **SC-003**: Nessuna stringa "FocusFlow" hardcoded fuori da `brand.ts`
  (verificabile con grep).
- **SC-004**: Build di produzione (`npm run build`) passa senza errori.

## Assumptions

- Non ci sono ancora screenshot reali esportati dall'app → v1 usa un
  placeholder in stile brand nel phone mockup; sostituzione con screenshot
  reali è lavoro futuro esplicitamente rimandato dal richiedente.
- Nessun backend/CMS: contenuto testuale hardcoded nei componenti/config.
- Deploy target non ancora deciso (Vercel probabile, coerente con gli altri
  progetti dell'utente) — non bloccante per lo sviluppo locale.
