import { fonts } from '../config/brand'
import { steps } from '../data/howItWorks'
import { useTheme } from '../theme/ThemeContext'
import { ScrollReveal } from './ScrollReveal'

export function HowItWorks() {
  const { theme } = useTheme()

  return (
    <div
      id="come-funziona"
      className="px-5 py-16 md:px-16 md:py-24"
      style={{ borderTop: `1px solid ${theme.border}` }}
    >
      <div className="mx-auto mb-14 max-w-xl text-center">
        <h2
          className="mb-3.5 text-[28px] font-extrabold tracking-tight md:text-[38px]"
          style={{ fontFamily: fonts.heading }}
        >
          Come funziona
        </h2>
        <p className="text-base leading-relaxed" style={{ color: theme.textSecondary }}>
          Quattro passaggi semplici, pensati per richiedere il minimo sforzo mentale.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-7">
        {steps.map((step, i) => (
          <ScrollReveal key={step.number} delay={i * 0.08} className="flex flex-col gap-3.5">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl font-bold"
              style={{ background: theme.accentTint, color: theme.accentText, fontFamily: fonts.heading }}
            >
              {step.number}
            </div>
            <h3 className="text-lg font-bold" style={{ fontFamily: fonts.heading }}>
              {step.title}
            </h3>
            <p className="text-[15px] leading-relaxed" style={{ color: theme.textSecondary }}>
              {step.description}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
