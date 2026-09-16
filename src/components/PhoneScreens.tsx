import { heroHabits, journalPreview, moodChartPoints, moodLabels, selectedMoodIndex } from '../data/preview'
import { useTheme } from '../theme/ThemeContext'

function HabitDot({ done }: { done: boolean }) {
  const { theme } = useTheme()
  return (
    <div
      className="h-4 w-4 flex-none rounded-full"
      style={{
        background: done ? theme.accent : theme.surface,
        border: done ? 'none' : `1.5px solid ${theme.border}`,
      }}
    />
  )
}

export function HeroScreen() {
  const { theme } = useTheme()
  return (
    <div className="h-full w-full px-4 pt-14 pb-4">
      <div className="mb-0.5 text-sm font-extrabold" style={{ color: theme.text }}>
        Buongiorno
      </div>
      <div className="mb-3 text-[10px]" style={{ color: theme.textMuted }}>
        Giovedì, 6 agosto
      </div>
      <div
        className="mb-3 rounded-[14px] p-3"
        style={{ background: theme.surface, border: `1px solid ${theme.border}` }}
      >
        <div className="mb-2 flex justify-between text-[11px] font-bold" style={{ color: theme.text }}>
          <span>Focus di oggi</span>
          <span className="font-semibold" style={{ color: theme.textMuted }}>
            21 giorni
          </span>
        </div>
        <div className="h-[5px] rounded-full" style={{ background: theme.surfaceAlt }}>
          <div className="h-full w-2/5 rounded-full" style={{ background: theme.accent }} />
        </div>
      </div>
      {heroHabits.map((h) => (
        <div
          key={h.name}
          className="mb-1.5 flex items-center gap-2.5 rounded-xl p-2.5"
          style={{ background: theme.surface, border: `1px solid ${theme.border}` }}
        >
          <HabitDot done={h.done} />
          <div className="flex-1">
            <div className="text-[11px] font-semibold" style={{ color: theme.text }}>
              {h.name}
            </div>
            <div className="text-[9px]" style={{ color: theme.textMuted }}>
              {h.time}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function HabitsScreen() {
  const { theme } = useTheme()
  return (
    <div className="h-full w-full px-3.5 pt-[50px] pb-3.5">
      <div className="mb-2.5 text-xs font-extrabold" style={{ color: theme.text }}>
        Abitudini
      </div>
      {heroHabits.map((h) => (
        <div
          key={h.name}
          className="mb-1.5 flex items-center gap-2 rounded-[11px] p-2"
          style={{ background: theme.surface, border: `1px solid ${theme.border}` }}
        >
          <HabitDot done={h.done} />
          <div className="text-[10px] font-semibold" style={{ color: theme.text }}>
            {h.name}
          </div>
        </div>
      ))}
    </div>
  )
}

export function MoodScreen() {
  const { theme } = useTheme()
  return (
    <div className="h-full w-full px-3.5 pt-[50px] pb-3.5">
      <div className="mb-2.5 text-xs font-extrabold" style={{ color: theme.text }}>
        Umore
      </div>
      <div className="mb-3 flex gap-1.5">
        {moodLabels.map((label, i) => (
          <div
            key={label}
            className="flex-1 rounded-lg px-0.5 py-1.5 text-center text-[9px] font-semibold"
            style={{
              background: i === selectedMoodIndex ? theme.accent : theme.surface,
              color: i === selectedMoodIndex ? '#fff' : theme.text,
              border: `1px solid ${i === selectedMoodIndex ? theme.accent : theme.border}`,
            }}
          >
            {label.slice(0, 3)}
          </div>
        ))}
      </div>
      <div className="rounded-[11px] p-2.5" style={{ background: theme.surface, border: `1px solid ${theme.border}` }}>
        <svg width="100%" height="42" viewBox="0 0 190 42" preserveAspectRatio="none">
          <polyline points={moodChartPoints} fill="none" stroke={theme.accent} strokeWidth="2" />
        </svg>
      </div>
    </div>
  )
}

export function JournalScreen() {
  const { theme } = useTheme()
  return (
    <div className="h-full w-full px-3.5 pt-[50px] pb-3.5">
      <div className="mb-2.5 text-xs font-extrabold" style={{ color: theme.text }}>
        Diario
      </div>
      {journalPreview.map((j) => (
        <div
          key={j.title}
          className="mb-1.5 flex items-center gap-2 rounded-[11px] p-2"
          style={{ background: theme.surface, border: `1px solid ${theme.border}` }}
        >
          <div className="h-6 w-6 flex-none rounded-[7px]" style={{ background: theme.accentTint }} />
          <div>
            <div className="text-[10px] font-semibold" style={{ color: theme.text }}>
              {j.title}
            </div>
            <div className="text-[8px]" style={{ color: theme.textMuted }}>
              {j.date}
            </div>
          </div>
        </div>
      ))}
      <div className="mt-4 flex justify-center">
        <div className="h-9 w-9 rounded-full" style={{ background: theme.accent }} />
      </div>
    </div>
  )
}
