export interface Step {
  number: string
  title: string
  description: string
}

export const steps: Step[] = [
  {
    number: '01',
    title: 'Guarda la timeline',
    description: 'Un marcatore "ora" ti mostra sempre cosa stai facendo e cosa viene dopo.',
  },
  {
    number: '02',
    title: 'Segna le abitudini',
    description:
      'Un tocco per completare, uno streak che cresce piano — per motivare, non colpevolizzare.',
  },
  {
    number: '03',
    title: 'Racconta la giornata a voce',
    description:
      'Registra un pensiero: FocusFlow lo trascrive e ti restituisce un riepilogo di umore.',
  },
  {
    number: '04',
    title: 'Rivedi con calma',
    description: 'Cronologia di umore e abitudini a colpo d’occhio, senza dover analizzare nulla.',
  },
]
