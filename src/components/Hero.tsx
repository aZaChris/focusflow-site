import { motion } from 'motion/react'
import { brand } from '../config/brand'
import { PhoneMockup } from './PhoneMockup'

export function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pt-16 pb-20 text-center md:pt-24">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-6xl"
      >
        {brand.tagline}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-xl text-lg text-neutral-500"
      >
        {brand.subtitle}
      </motion.p>
      <motion.a
        href={brand.ctaHref}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="rounded-full px-8 py-3 text-base font-medium text-white shadow-lg"
        style={{ background: brand.primaryColor }}
      >
        {brand.ctaLabel}
      </motion.a>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <PhoneMockup />
      </motion.div>
    </section>
  )
}
