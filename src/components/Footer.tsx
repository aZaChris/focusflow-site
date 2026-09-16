import { brand, colors, fonts } from '../config/brand'

export function Footer() {
  return (
    <footer
      className="flex flex-wrap items-center justify-between gap-4 px-5 py-8 md:px-16"
      style={{ borderTop: `1px solid ${colors.border}` }}
    >
      <div className="flex items-center gap-2.5">
        <div
          className="flex h-[26px] w-[26px] items-center justify-center rounded-full border-2"
          style={{ borderColor: colors.accent }}
        >
          <div className="h-1.5 w-1.5 rounded-full" style={{ background: colors.accent }} />
        </div>
        <span style={{ fontFamily: fonts.heading, fontWeight: 600, fontSize: 15 }}>
          {brand.name}
        </span>
      </div>
      <span className="text-[13px]" style={{ color: colors.textFaint }}>
        © {new Date().getFullYear()} {brand.name}. Tutti i diritti riservati.
      </span>
    </footer>
  )
}
