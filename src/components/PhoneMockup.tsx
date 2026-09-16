import type { ReactNode } from 'react'
import { useTheme } from '../theme/ThemeContext'

export function PhoneMockup({
  width = 250,
  height = 520,
  children,
}: {
  width?: number
  height?: number
  children?: ReactNode
}) {
  const { theme } = useTheme()
  const notchWidth = Math.round(width * 0.36)

  return (
    <div
      className="relative rounded-[42px] p-3.5"
      style={{
        width,
        height,
        background: theme.bezel,
        border: `1px solid ${theme.bezelBorder}`,
        boxShadow: '0 40px 80px -20px rgba(0,0,0,0.5)',
      }}
    >
      <div
        className="absolute top-3.5 left-1/2 z-10 h-[22px] -translate-x-1/2 rounded-full"
        style={{ width: notchWidth, background: theme.notch }}
      />
      <div
        className="h-full w-full overflow-hidden rounded-[30px]"
        style={{ background: theme.bg }}
      >
        {children}
      </div>
      <div
        className="absolute bottom-3 left-1/2 z-10 h-1 -translate-x-1/2 rounded-full"
        style={{ width: notchWidth, background: theme.homeBar }}
      />
    </div>
  )
}
