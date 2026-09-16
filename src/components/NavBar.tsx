import { brand, colors, fonts } from '../config/brand'

const links = [
  { href: '#come-funziona', label: 'Come funziona' },
  { href: '#funzionalita', label: 'Funzionalità' },
  { href: '#screenshot', label: 'Anteprima' },
]

export function NavBar() {
  return (
    <div
      className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-4 px-5 py-5 md:px-16"
      style={{
        background: 'rgba(16,19,23,0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <div className="flex items-center gap-2.5">
        <div
          className="flex h-[34px] w-[34px] items-center justify-center rounded-full border-2"
          style={{ borderColor: colors.accent }}
        >
          <div className="h-2 w-2 rounded-full" style={{ background: colors.accent }} />
        </div>
        <span style={{ fontFamily: fonts.heading, fontWeight: 600, fontSize: 19, letterSpacing: '-0.01em' }}>
          {brand.name}
        </span>
      </div>

      <div className="flex flex-wrap gap-4 text-[15px] md:gap-7" style={{ color: colors.textSecondary }}>
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </div>

      <a
        href={brand.ctaHref}
        className="rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors"
        style={{ background: colors.accent, color: '#0B1210' }}
      >
        Prova gratis
      </a>
    </div>
  )
}
