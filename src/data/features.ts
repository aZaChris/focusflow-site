export type IconId = 'habit' | 'mood' | 'voice' | 'timeline' | 'reminder' | 'privacy'

export interface Feature {
  icon: IconId
  title: string
  description: string
}

// Una voce per ogni feature reale già implementata nell'app
// (vedi ~/focusflow/repo, specs 001-006).
export const features: Feature[] = [
  {
    icon: 'habit',
    title: 'Abitudini & streak',
    description:
      'Costruisci routine con promemoria gentili e streak che celebrano la costanza, non la perfezione.',
  },
  {
    icon: 'mood',
    title: 'Mood tracking',
    description:
      'Registra umore ed energia in pochi secondi, per capire cosa ti fa stare bene nel tempo.',
  },
  {
    icon: 'voice',
    title: 'Diario vocale con AI',
    description:
      'Parla liberamente: trascrizione e riepilogo di umore arrivano da soli, senza dover scrivere.',
  },
  {
    icon: 'timeline',
    title: 'Timeline "ora e dopo"',
    description:
      'La giornata a colpo d’occhio, con un marcatore live che ti dice sempre dove sei.',
  },
  {
    icon: 'reminder',
    title: 'Promemoria gentili',
    description:
      'Notifiche che controlli tu, tarate su quando vuoi davvero essere richiamato.',
  },
  {
    icon: 'privacy',
    title: 'Privacy al centro',
    description:
      'Login sicuro con autenticazione a due fattori e pieno controllo sui tuoi dati.',
  },
]
