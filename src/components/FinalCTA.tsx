import { motion } from 'motion/react'
import { fonts } from '../config/brand'
import { useTheme } from '../theme/ThemeContext'
import { ScrollReveal } from './ScrollReveal'

export function FinalCTA() {
  const { theme } = useTheme()

  return (
    <div
      id="cta-finale"
      className="relative overflow-hidden px-5 py-16 text-center md:px-16 md:py-24"
      style={{ borderTop: `1px solid ${theme.border}` }}
    >
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: theme.glow }}
      />
      <ScrollReveal className="relative">
        <h2
          className="mb-4.5 text-[28px] font-extrabold tracking-tight md:text-[42px]"
          style={{ fontFamily: fonts.heading }}
        >
          Prova FocusFlow, gratis
        </h2>
        <p
          className="mx-auto mb-8 max-w-[480px] text-base leading-relaxed"
          style={{ color: theme.textSecondary }}
        >
          Nessuna carta richiesta. Passa a Premium solo quando sei pronto.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <motion.a
            href="#"
            whileHover={{ y: -2, boxShadow: '0 10px 22px -6px rgba(193,80,46,0.5)' }}
            className="rounded-full px-8 py-4 text-base font-bold text-white"
            style={{ background: theme.accent }}
          >
            Scarica per iOS
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ y: -2, borderColor: theme.accent }}
            className="rounded-full px-8 py-4 text-base font-semibold"
            style={{ border: `1px solid ${theme.border}`, color: theme.text }}
          >
            Scarica per Android
          </motion.a>
        </div>
      </ScrollReveal>
    </div>
  )
}
