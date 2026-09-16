import { colors, fonts } from '../config/brand'
import { ScrollReveal } from './ScrollReveal'

export function FinalCTA() {
  return (
    <div
      id="cta-finale"
      className="relative overflow-hidden px-5 py-16 text-center md:px-16 md:py-24"
      style={{ borderTop: `1px solid ${colors.border}` }}
    >
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(127,224,192,0.1), transparent 70%)',
        }}
      />
      <ScrollReveal className="relative">
        <h2
          className="mb-4.5 text-[28px] font-bold tracking-tight md:text-[42px]"
          style={{ fontFamily: fonts.heading }}
        >
          Prova FocusFlow, gratis
        </h2>
        <p
          className="mx-auto mb-8 max-w-[480px] text-base leading-relaxed"
          style={{ color: colors.textSecondary }}
        >
          Nessuna carta richiesta. Passa a Premium solo quando sei pronto.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <a
            href="#"
            className="rounded-full px-8 py-4 text-base font-semibold"
            style={{ background: colors.accent, color: '#0B1210' }}
          >
            Scarica per iOS
          </a>
          <a
            href="#"
            className="rounded-full px-8 py-4 text-base font-medium"
            style={{ border: '1px solid rgba(255,255,255,0.18)', color: colors.textPrimary }}
          >
            Scarica per Android
          </a>
        </div>
      </ScrollReveal>
    </div>
  )
}
