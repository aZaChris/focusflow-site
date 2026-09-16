// Nome prodotto in un unico posto: cambierà a breve, non ripeterlo altrove.
export const brand = {
  name: 'FocusFlow',
  logo: '/fox-icon.png',
  eyebrow: 'Calma, ogni giorno',
  tagline: 'Meno rumore in testa.\nPiù spazio per vivere la giornata.',
  subtitle:
    'FocusFlow organizza abitudini, umore e giornata in un unico posto, con promemoria gentili e nessun giudizio.',
  ctaPrimary: 'Inizia la prova gratuita',
  ctaSecondary: 'Come funziona',
  ctaFootnote: 'Nessuna carta richiesta · Disponibile su iOS e Android',
  ctaHref: '#cta-finale',
  repoHref: 'https://github.com/aZaChris/focusflow-site',
}

export const fonts = {
  heading: "'Manrope', sans-serif",
  body: "'Manrope', sans-serif",
}

// Design handoff (Claude Design, "FocusFlow Website") — tema chiaro/scuro.
export interface Theme {
  bg: string
  surface: string
  surfaceAlt: string
  border: string
  text: string
  textSecondary: string
  textMuted: string
  accent: string
  accentText: string
  accentTint: string
  navBg: string
  glow: string
  bezel: string
  bezelBorder: string
  notch: string
  homeBar: string
}

export const lightTheme: Theme = {
  bg: '#F7F8F5',
  surface: '#FFFFFF',
  surfaceAlt: '#EEF1EC',
  border: '#E6E9E4',
  text: '#1B2420',
  textSecondary: '#7A8580',
  textMuted: '#9CA6A0',
  accent: '#C1502E',
  accentText: '#C1502E',
  accentTint: '#FBE7DC',
  navBg: 'rgba(247,248,245,0.85)',
  glow: 'radial-gradient(circle, rgba(193,80,46,0.10), transparent 70%)',
  bezel: '#1B2420',
  bezelBorder: 'rgba(0,0,0,0.1)',
  notch: '#0B0D10',
  homeBar: 'rgba(255,255,255,0.35)',
}

export const darkTheme: Theme = {
  bg: '#1B1613',
  surface: '#26201A',
  surfaceAlt: '#221C17',
  border: '#3D3227',
  text: '#F5EDE7',
  textSecondary: '#BFAE9F',
  textMuted: '#8F7E70',
  accent: '#C1502E',
  accentText: '#FF9166',
  accentTint: '#3A2418',
  navBg: 'rgba(27,22,19,0.85)',
  glow: 'radial-gradient(circle, rgba(255,145,102,0.14), transparent 70%)',
  bezel: '#0F0C0A',
  bezelBorder: 'rgba(255,255,255,0.14)',
  notch: '#000000',
  homeBar: 'rgba(255,255,255,0.25)',
}
