import { colors, fonts } from '../config/brand'
import { PhoneMockup } from './PhoneMockup'
import { ScrollReveal } from './ScrollReveal'

const screens = ['Timeline', 'Abitudini', 'Diario vocale']

export function ScreenshotsSection() {
  return (
    <div id="screenshot" className="px-5 py-16 md:px-16 md:py-24">
      <div className="mx-auto mb-14 max-w-xl text-center">
        <h2
          className="mb-3.5 text-[28px] font-semibold tracking-tight md:text-[38px]"
          style={{ fontFamily: fonts.heading }}
        >
          Dai un'occhiata dentro
        </h2>
        <p className="text-base leading-relaxed" style={{ color: colors.textSecondary }}>
          Un'interfaccia calma, pensata per non sovraccaricare.
        </p>
      </div>

      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-8">
        {screens.map((label, i) => (
          <ScrollReveal key={label} delay={i * 0.1} className="flex flex-col items-center gap-3.5">
            <PhoneMockup width={220} height={460} />
            <span className="text-[13px]" style={{ color: colors.textFaint }}>
              {label} — a breve
            </span>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
