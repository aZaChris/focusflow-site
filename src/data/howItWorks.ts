export interface Step {
  number: string
  accent: 'mint' | 'periwinkle'
  title: string
  description: string
}

export const steps: Step[] = [
  {
    number: '01',
    accent: 'mint',
    title: 'Guarda la timeline',
    description:
      'Un marcatore "ora" ti mostra sempre cosa stai facendo e cosa viene dopo, senza dover controllare più liste.',
  },
  {
    number: '02',
    accent: 'periwinkle',
    title: 'Segna le abitudini',
    description:
      'Un tocco per completare, uno streak che cresce piano — pensato per motivare, non per far sentire in colpa.',
  },
  {
    number: '03',
    accent: 'mint',
    title: 'Racconta la giornata a voce',
    description:
      'Registra un pensiero: FocusFlow lo trascrive e ti restituisce un piccolo riepilogo di umore, senza dover scrivere nulla.',
  },
  {
    number: '04',
    accent: 'periwinkle',
    title: 'Rivedi con calma',
    description:
      'Cronologia di umore e abitudini a colpo d’occhio, per notare pattern senza dover analizzare nulla da soli.',
  },
]
