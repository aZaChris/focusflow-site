import { brand } from '../config/brand'

export function PhoneMockup({ screenshotSrc }: { screenshotSrc?: string }) {
  return (
    <div className="relative mx-auto h-[560px] w-[280px] rounded-[2.5rem] border-[10px] border-neutral-900 bg-neutral-900 shadow-2xl">
      <div className="absolute top-0 left-1/2 h-5 w-28 -translate-x-1/2 rounded-b-xl bg-neutral-900" />
      <div className="h-full w-full overflow-hidden rounded-[1.8rem] bg-white">
        {screenshotSrc ? (
          <img
            src={screenshotSrc}
            alt={`Schermata dell'app ${brand.name}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <PlaceholderScreen />
        )}
      </div>
    </div>
  )
}

// ponytail: placeholder finché non ci sono screenshot reali esportati dall'app (task T013).
function PlaceholderScreen() {
  return (
    <div
      className="flex h-full w-full flex-col gap-4 p-5"
      style={{ background: `linear-gradient(180deg, ${brand.bgSoft}, #fff)` }}
    >
      <div className="text-sm font-medium text-neutral-500">Oggi</div>
      <div className="space-y-2">
        {[
          { label: 'Meditazione', done: true },
          { label: 'Lettura 20 min', done: true },
          { label: 'Palestra', done: false },
        ].map((h) => (
          <div
            key={h.label}
            className="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm"
          >
            <span
              className="h-4 w-4 flex-none rounded-full"
              style={{
                background: h.done ? brand.primaryColor : 'transparent',
                border: `2px solid ${brand.primaryColor}`,
              }}
            />
            <span className="text-sm text-neutral-700">{h.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto rounded-xl p-3 text-xs text-white" style={{ background: brand.primaryColor }}>
        Ora: Focus profondo · 14:00–15:00
      </div>
    </div>
  )
}
