import { motion } from 'motion/react'
import { brand, colors, fonts } from '../config/brand'
import { PhoneMockup } from './PhoneMockup'

export function Hero() {
  return (
    <div className="relative overflow-hidden px-5 pt-12 pb-12 md:px-16 md:pt-20 md:pb-20">
      <div
        className="pointer-events-none absolute top-[20%] left-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(127,224,192,0.14), transparent 70%)',
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-wrap items-center gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex min-w-[300px] flex-1 basis-[420px] flex-col items-start text-left"
        >
          <div
            className="mb-6 rounded-full px-4 py-1.5 text-[13px] font-medium tracking-wider uppercase"
            style={{
              color: colors.accent,
              background: colors.accentSoft,
              border: `1px solid ${colors.accentBorder}`,
            }}
          >
            {brand.eyebrow}
          </div>
          <h1
            className="mb-5 text-[34px] leading-[1.1] font-bold tracking-tight md:text-[56px]"
            style={{ fontFamily: fonts.heading, whiteSpace: 'pre-line' }}
          >
            {brand.tagline}
          </h1>
          <p
            className="mb-9 max-w-[480px] text-base leading-relaxed md:text-lg"
            style={{ color: colors.textSecondary }}
          >
            {brand.subtitle}
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href={brand.ctaHref}
              className="rounded-full px-7 py-4 text-base font-semibold"
              style={{ background: colors.accent, color: '#0B1210' }}
            >
              {brand.ctaPrimary}
            </a>
            <a
              href="#come-funziona"
              className="rounded-full px-7 py-4 text-base font-medium"
              style={{ border: '1px solid rgba(255,255,255,0.18)', color: colors.textPrimary }}
            >
              {brand.ctaSecondary}
            </a>
          </div>
          <p className="mt-4 text-[13px]" style={{ color: colors.textFaint }}>
            {brand.ctaFootnote}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex min-w-[240px] flex-1 basis-[300px] justify-center"
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </div>
  )
}
