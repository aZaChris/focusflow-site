import { colors } from '../config/brand'

// ponytail: frame vuoto finché non ci sono screenshot reali esportati
// dall'app (specs/001-landing-page/tasks.md T013) — non inventare UI finta.
export function PhoneMockup({
  width = 250,
  height = 520,
  screenshotSrc,
}: {
  width?: number
  height?: number
  screenshotSrc?: string
}) {
  const notchWidth = Math.round(width * 0.36)

  return (
    <div
      className="relative rounded-[42px] p-3.5"
      style={{
        width,
        height,
        background: colors.bgCard,
        border: `1px solid ${colors.borderStrong}`,
        boxShadow: '0 40px 80px -20px rgba(0,0,0,0.6)',
      }}
    >
      <div
        className="absolute top-3.5 left-1/2 h-[22px] -translate-x-1/2 rounded-full"
        style={{ width: notchWidth, background: '#0b0d10' }}
      />
      <div
        className="h-full w-full overflow-hidden rounded-[30px]"
        style={{
          background: screenshotSrc
            ? undefined
            : `linear-gradient(160deg, #171B20, ${colors.bg})`,
          border: `1px solid ${colors.border}`,
        }}
      >
        {screenshotSrc && (
          <img
            src={screenshotSrc}
            alt=""
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div
        className="absolute bottom-3 left-1/2 h-1 -translate-x-1/2 rounded-full"
        style={{ width: notchWidth, background: 'rgba(255,255,255,0.18)' }}
      />
    </div>
  )
}
