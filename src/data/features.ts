export type IconId =
  | 'habit'
  | 'mood'
  | 'voice'
  | 'timeline'
  | 'widget'
  | 'privacy'

export interface Feature {
  icon: IconId
  accent: 'mint' | 'periwinkle'
  title: string
  description: string
}

// Una voce per ogni feature reale già implementata nell'app
// (vedi ~/focusflow/repo, specs 001-006).
export const features: Feature[] = [
  {
    icon: 'habit',
    accent: 'mint',
    title: 'Abitudini & streak',
    description:
      'Costruisci routine con promemoria gentili e streak che celebrano la costanza, non la perfezione.',
  },
  {
    icon: 'mood',
    accent: 'periwinkle',
    title: 'Mood tracking',
    description:
      'Registra umore ed energia in pochi secondi, per capire cosa ti fa stare bene nel tempo.',
  },
  {
    icon: 'voice',
    accent: 'mint',
    title: 'Diario vocale con AI',
    description:
      'Parla liberamente: la trascrizione e un piccolo riepilogo di umore arrivano da soli, senza dover scrivere.',
  },
  {
    icon: 'timeline',
    accent: 'periwinkle',
    title: 'Timeline "ora e dopo"',
    description:
      'La giornata a colpo d’occhio, con un marcatore live che ti dice sempre dove sei senza dover chiedere.',
  },
  {
    icon: 'widget',
    accent: 'mint',
    title: 'Widget home screen',
    description:
      "Vedi cosa stai facendo ora e cosa viene dopo direttamente dalla schermata home, senza aprire l'app.",
  },
  {
    icon: 'privacy',
    accent: 'periwinkle',
    title: 'Privacy al centro',
    description:
      'Login sicuro con autenticazione a due fattori e pieno controllo sui tuoi dati, in ogni momento.',
  },
]
