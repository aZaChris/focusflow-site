import { motion } from 'motion/react'
import { brand, fonts } from '../config/brand'
import { useTheme } from '../theme/ThemeContext'

const links = [
  { href: '#come-funziona', label: 'Come funziona' },
  { href: '#funzionalita', label: 'Funzionalità' },
  { href: '#screenshot', label: 'Anteprima' },
]

export function NavBar() {
  const { theme, isDark, toggleDark } = useTheme()

  return (
    <div
      className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-4 px-5 py-4.5 md:px-16"
      style={{
        background: theme.navBg,
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${theme.border}`,
      }}
    >
      <div className="flex items-center gap-2.5">
        <img src={brand.logo} alt={brand.name} className="h-8 w-8 object-contain" />
        <span style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 19, letterSpacing: '-0.01em' }}>
          {brand.name}
        </span>
      </div>

      <div className="flex flex-wrap gap-4 text-[15px] md:gap-7" style={{ color: theme.textSecondary }}>
        {links.map((l) => (
          <a key={l.href} href={l.href} style={{ color: theme.textSecondary }}>
            {l.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2.5">
        <motion.button
          type="button"
          aria-label={isDark ? 'Passa al tema chiaro' : 'Passa al tema scuro'}
          onClick={toggleDark}
          whileHover={{ scale: 1.1, rotate: 15 }}
          className="flex h-9 w-9 flex-none cursor-pointer items-center justify-center rounded-full"
          style={{ background: theme.surfaceAlt }}
        >
          {isDark ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z"
                fill={theme.textSecondary}
              />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="4.5" stroke={theme.textSecondary} strokeWidth="1.6" />
              <path
                d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
                stroke={theme.textSecondary}
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          )}
        </motion.button>
        <motion.a
          href={brand.ctaHref}
          whileHover={{ y: -2, boxShadow: '0 8px 18px -6px rgba(193,80,46,0.55)' }}
          className="rounded-full px-5 py-2.5 text-sm font-bold whitespace-nowrap text-white"
          style={{ background: theme.accent }}
        >
          Prova gratis
        </motion.a>
      </div>
    </div>
  )
}
