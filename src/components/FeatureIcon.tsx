import { colors } from '../config/brand'
import type { IconId } from '../data/features'

export function FeatureIcon({
  icon,
  accent,
}: {
  icon: IconId
  accent: 'mint' | 'periwinkle'
}) {
  const c = accent === 'mint' ? colors.accent : colors.accent2
  const soft = accent === 'mint' ? colors.accentSoft : colors.accent2Soft

  switch (icon) {
    case 'habit':
      return (
        <div
          className="h-10 w-10 rounded-[10px] border-2"
          style={{ borderColor: c }}
        />
      )
    case 'mood':
      return (
        <div
          className="h-10 w-10 rounded-full border-2"
          style={{ borderColor: c }}
        />
      )
    case 'voice':
      return (
        <div
          className="flex h-10 w-10 items-center justify-center rounded-[10px]"
          style={{ background: soft }}
        >
          <div
            className="h-3.5 w-3.5 rounded-full"
            style={{ background: c, animation: 'ffPulse 1.8s ease-in-out infinite' }}
          />
        </div>
      )
    case 'timeline':
      return (
        <div
          className="flex h-10 w-10 items-center justify-center rounded-[10px] border-2"
          style={{ borderColor: c }}
        >
          <div className="h-0.5 w-4" style={{ background: c }} />
        </div>
      )
    case 'widget':
      return (
        <div
          className="h-10 w-10 rounded-[10px] border-2 border-dashed"
          style={{ borderColor: c }}
        />
      )
    case 'privacy':
      return (
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full"
          style={{ background: soft }}
        >
          <div
            className="h-[18px] w-3.5 rounded-[3px] border-2"
            style={{ borderColor: c }}
          />
        </div>
      )
  }
}
