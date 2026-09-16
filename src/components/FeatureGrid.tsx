import { motion } from 'motion/react'
import { fonts } from '../config/brand'
import { features } from '../data/features'
import { useTheme } from '../theme/ThemeContext'
import { FeatureIcon } from './FeatureIcon'
import { ScrollReveal } from './ScrollReveal'

export function FeatureGrid() {
  const { theme } = useTheme()

  return (
    <div
      id="funzionalita"
      className="px-5 py-16 md:px-16 md:py-24"
      style={{
        background: theme.surfaceAlt,
        borderTop: `1px solid ${theme.border}`,
        borderBottom: `1px solid ${theme.border}`,
      }}
    >
      <div className="mx-auto mb-14 max-w-xl text-center">
        <h2
          className="mb-3.5 text-[28px] font-extrabold tracking-tight md:text-[38px]"
          style={{ fontFamily: fonts.heading }}
        >
          Tutto quello che serve, niente di più
        </h2>
        <p className="text-base leading-relaxed" style={{ color: theme.textSecondary }}>
          Ogni funzione è progettata per abbassare il carico mentale, non per aggiungerne.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
        {features.map((feature, i) => (
          <ScrollReveal key={feature.title} delay={i * 0.06}>
            <motion.div
              whileHover={{
                y: -4,
                borderColor: theme.accent,
                boxShadow: '0 14px 28px -12px rgba(0,0,0,0.18)',
              }}
              className="flex h-full flex-col gap-3 rounded-2xl p-7"
              style={{ background: theme.surface, border: `1px solid ${theme.border}` }}
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-[10px]"
                style={{ background: theme.accentTint }}
              >
                <FeatureIcon icon={feature.icon} color={theme.accentText} />
              </div>
              <h3 className="text-[17px] font-bold" style={{ fontFamily: fonts.heading }}>
                {feature.title}
              </h3>
              <p className="text-[14.5px] leading-relaxed" style={{ color: theme.textSecondary }}>
                {feature.description}
              </p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
