import { ScrollReveal } from './ScrollReveal'
import type { Feature } from '../data/features'
import { brand } from '../config/brand'

export function FeatureSection({
  feature,
  reversed,
}: {
  feature: Feature
  reversed: boolean
}) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-14">
      <ScrollReveal
        className={`flex flex-col items-center gap-8 md:flex-row ${
          reversed ? 'md:flex-row-reverse' : ''
        }`}
      >
        <div
          className="flex h-40 w-40 flex-none items-center justify-center rounded-3xl text-6xl"
          style={{ background: brand.bgSoft }}
        >
          {feature.emoji}
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-neutral-900">
            {feature.title}
          </h2>
          <p className="mt-2 text-neutral-500">{feature.description}</p>
        </div>
      </ScrollReveal>
    </section>
  )
}
