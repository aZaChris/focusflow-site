import { brand, fonts } from '../config/brand'
import { useTheme } from '../theme/ThemeContext'

export function Footer() {
  const { theme } = useTheme()

  return (
    <footer
      className="flex flex-wrap items-center justify-between gap-4 px-5 py-8 md:px-16"
      style={{ borderTop: `1px solid ${theme.border}` }}
    >
      <div className="flex items-center gap-2.5">
        <img src={brand.logo} alt="" className="h-6 w-6 object-contain" />
        <span style={{ fontFamily: fonts.heading, fontWeight: 700, fontSize: 15, color: theme.text }}>
          {brand.name}
        </span>
      </div>
      <span className="text-[13px]" style={{ color: theme.textMuted }}>
        © {new Date().getFullYear()} {brand.name}. Tutti i diritti riservati.
      </span>
    </footer>
  )
}
