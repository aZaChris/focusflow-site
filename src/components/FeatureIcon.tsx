import type { IconId } from '../data/features'

export function FeatureIcon({ icon, color }: { icon: IconId; color: string }) {
  const props = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none' }

  switch (icon) {
    case 'habit':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1.7" />
          <path
            d="M9 12l2 2 4-4"
            stroke={color}
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'mood':
      return (
        <svg {...props}>
          <path
            d="M12 21s-7-4.5-7-10.5A5 5 0 0112 6a5 5 0 017 4.5C19 16.5 12 21 12 21z"
            stroke={color}
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'voice':
      return (
        <svg {...props}>
          <rect x="9" y="3" width="6" height="11" rx="3" stroke={color} strokeWidth="1.6" />
          <path
            d="M6 11a6 6 0 0012 0M12 17v3"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'timeline':
      return (
        <svg {...props}>
          <path
            d="M4 19V9M11 19V4M18 19v-6"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'reminder':
      return (
        <svg {...props}>
          <path
            d="M12 3v2M5 8a7 7 0 0114 0c0 4 2 5 2 7H3c0-2 2-3 2-7z"
            stroke={color}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M9.5 19a2.5 2.5 0 005 0" stroke={color} strokeWidth="1.6" />
        </svg>
      )
    case 'privacy':
      return (
        <svg {...props}>
          <path
            d="M12 3l7 3v6c0 5-3 7.5-7 9-4-1.5-7-4-7-9V6l7-3z"
            stroke={color}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )
  }
}
