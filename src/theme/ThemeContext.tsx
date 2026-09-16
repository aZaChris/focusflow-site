import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { darkTheme, lightTheme } from '../config/brand'
import type { Theme } from '../config/brand'

const STORAGE_KEY = 'ff-theme'

interface ThemeContextValue {
  theme: Theme
  isDark: boolean
  toggleDark: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function readStoredPreference(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'dark'
  } catch {
    return false
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(readStoredPreference)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light')
    } catch {
      // ponytail: browser storage can throw (private mode) — theme just won't persist.
    }
  }, [isDark])

  const theme = isDark ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleDark: () => setIsDark((d) => !d) }}>
      <div
        style={{
          background: theme.bg,
          color: theme.text,
          minHeight: '100vh',
          transition: 'background 0.25s ease, color 0.25s ease',
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
