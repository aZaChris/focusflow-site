export interface Feature {
  emoji: string
  title: string
  description: string
}

// Una voce per ogni feature reale già implementata nell'app
// (vedi ~/focusflow/repo, specs 001-006).
export const features: Feature[] = [
  {
    emoji: '✅',
    title: 'Abitudini e umore',
    description:
      "Traccia le tue abitudini con streak calcolati al volo, e registra umore ed energia giorno per giorno — senza dover ricordare nulla a mente.",
  },
  {
    emoji: '\u{1F5D3}️',
    title: 'Timeline della giornata',
    description:
      "Un colpo d'occhio sul tuo oggi: un indicatore “ora” in tempo reale scorre lungo i blocchi delle tue attività pianificate.",
  },
  {
    emoji: '\u{1F3A4}',
    title: 'Diario vocale con AI',
    description:
      'Parla invece di scrivere: registri un pensiero, l’AI lo trascrive e ti restituisce un riepilogo dell’umore con un piccolo feedback.',
  },
  {
    emoji: '\u{1F4F1}',
    title: 'Widget "Now & Next"',
    description:
      "Direttamente dalla home del telefono: cosa stai facendo ora e cosa viene dopo, senza nemmeno aprire l'app.",
  },
  {
    emoji: '✨',
    title: 'Premium quando ti serve',
    description:
      "Le funzioni base restano gratuite; l'abbonamento sblocca il resto quando l'app è entrata nella tua routine, gestibile in un tap.",
  },
]
