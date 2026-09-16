import { motion } from 'motion/react'
import { colors, fonts } from '../config/brand'
import { features } from '../data/features'
import { FeatureIcon } from './FeatureIcon'
import { ScrollReveal } from './ScrollReveal'

export function FeatureGrid() {
  return (
    <div
      id="funzionalita"
      className="px-5 py-16 md:px-16 md:py-24"
      style={{
        background: colors.bgCard,
        borderTop: `1px solid ${colors.border}`,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <div className="mx-auto mb-14 max-w-xl text-center">
        <h2
          className="mb-3.5 text-[28px] font-semibold tracking-tight md:text-[38px]"
          style={{ fontFamily: fonts.heading }}
        >
          Tutto quello che serve, niente di più
        </h2>
        <p className="text-base leading-relaxed" style={{ color: colors.textSecondary }}>
          Ogni funzione è progettata per abbassare il carico mentale, non per aggiungerne.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
        {features.map((feature, i) => {
          const hoverBorder =
            feature.accent === 'mint' ? 'rgba(127,224,192,0.3)' : 'rgba(169,188,255,0.3)'
          return (
            <ScrollReveal key={feature.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -3, borderColor: hoverBorder }}
                className="flex h-full flex-col gap-3 rounded-2xl p-7"
                style={{ background: colors.bgCardAlt, border: `1px solid ${colors.border}` }}
              >
                <FeatureIcon icon={feature.icon} accent={feature.accent} />
                <h3 className="text-[17px] font-semibold" style={{ fontFamily: fonts.heading }}>
                  {feature.title}
                </h3>
                <p className="text-[14.5px] leading-relaxed" style={{ color: colors.textMuted }}>
                  {feature.description}
                </p>
              </motion.div>
            </ScrollReveal>
          )
        })}
      </div>
    </div>
  )
}
