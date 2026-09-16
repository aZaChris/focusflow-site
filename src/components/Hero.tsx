import { motion } from 'motion/react'
import { brand, fonts } from '../config/brand'
import { useTheme } from '../theme/ThemeContext'
import { PhoneMockup } from './PhoneMockup'
import { HeroScreen } from './PhoneScreens'

export function Hero() {
  const { theme } = useTheme()

  return (
    <div className="relative overflow-hidden px-5 pt-12 pb-12 md:px-16 md:pt-20 md:pb-20">
      <div
        className="pointer-events-none absolute top-[20%] left-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: theme.glow }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-wrap items-center gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex min-w-[300px] flex-1 basis-[420px] flex-col items-start text-left"
        >
          <div
            className="mb-6 rounded-full px-4 py-1.5 text-[13px] font-semibold tracking-wider uppercase"
            style={{ color: theme.accentText, background: theme.accentTint }}
          >
            {brand.eyebrow}
          </div>
          <h1
            className="mb-5 text-[34px] leading-[1.1] font-extrabold tracking-tight md:text-[54px]"
            style={{ fontFamily: fonts.heading, whiteSpace: 'pre-line' }}
          >
            {brand.tagline}
          </h1>
          <p
            className="mb-9 max-w-[480px] text-base leading-relaxed md:text-lg"
            style={{ color: theme.textSecondary }}
          >
            {brand.subtitle}
          </p>
          <div className="flex flex-wrap gap-3.5">
            <motion.a
              href={brand.ctaHref}
              whileHover={{ y: -2, boxShadow: '0 10px 22px -6px rgba(193,80,46,0.5)' }}
              className="rounded-full px-7 py-4 text-base font-bold text-white"
              style={{ background: theme.accent }}
            >
              {brand.ctaPrimary}
            </motion.a>
            <motion.a
              href="#come-funziona"
              whileHover={{ y: -2, borderColor: theme.accent }}
              className="rounded-full px-7 py-4 text-base font-semibold"
              style={{ border: `1px solid ${theme.border}`, color: theme.text }}
            >
              {brand.ctaSecondary}
            </motion.a>
          </div>
          <p className="mt-4 text-[13px]" style={{ color: theme.textMuted }}>
            {brand.ctaFootnote}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6, rotate: -1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex min-w-[240px] flex-1 basis-[300px] justify-center"
        >
          <PhoneMockup>
            <HeroScreen />
          </PhoneMockup>
        </motion.div>
      </div>
    </div>
  )
}
