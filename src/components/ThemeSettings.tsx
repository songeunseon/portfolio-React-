import { useState, useEffect } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '@heroui/react'
import { useTranslation } from 'react-i18next'

interface ColorPreset {
  key: string
  labelKey: string
  primary: string
  secondary: string
  accent: string
}

const modeKeys = [
  { key: 'system', icon: 'desktop_windows', labelKey: 'theme.system' },
  { key: 'light', icon: 'light_mode', labelKey: 'theme.light' },
  { key: 'dark', icon: 'dark_mode', labelKey: 'theme.dark' },
]

const colorPresets: ColorPreset[] = [
  { key: 'blue', labelKey: 'theme.blue', primary: '#2525f4', secondary: '#41b883', accent: '#61dafb' },
  { key: 'violet', labelKey: 'theme.violet', primary: '#7c3aed', secondary: '#a78bfa', accent: '#c4b5fd' },
  { key: 'rose', labelKey: 'theme.rose', primary: '#e11d48', secondary: '#fb7185', accent: '#fda4af' },
  { key: 'emerald', labelKey: 'theme.emerald', primary: '#059669', secondary: '#34d399', accent: '#6ee7b7' },
  { key: 'orange', labelKey: 'theme.orange', primary: '#ea580c', secondary: '#fb923c', accent: '#fdba74' },
  { key: 'cyan', labelKey: 'theme.cyan', primary: '#0891b2', secondary: '#22d3ee', accent: '#67e8f9' },
]

function getSystemTheme(): 'dark' | 'light' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyMode(mode: string) {
  const resolved = mode === 'system' ? getSystemTheme() : mode
  if (resolved === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

function applyColors(preset: ColorPreset) {
  const root = document.documentElement
  root.style.setProperty('--color-primary', preset.primary)
  root.style.setProperty('--color-secondary', preset.secondary)
  root.style.setProperty('--color-accent', preset.accent)
}

export default function ThemeSettings() {
  const [mode, setMode] = useState(() => localStorage.getItem('theme-mode') || 'dark')
  const [colorKey, setColorKey] = useState(() => localStorage.getItem('theme-color') || 'blue')
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language

  useEffect(() => {
    applyMode(mode)
    localStorage.setItem('theme-mode', mode)

    if (mode === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      const handler = () => applyMode('system')
      mq.addEventListener('change', handler)
      return () => mq.removeEventListener('change', handler)
    }
  }, [mode])

  useEffect(() => {
    const preset = colorPresets.find((p) => p.key === colorKey)
    if (preset) {
      applyColors(preset)
      localStorage.setItem('theme-color', colorKey)
    }
  }, [colorKey])

  return (
    <Popover placement="bottom-end" backdrop="opaque">
      <PopoverTrigger>
        <button className="flex items-center justify-center size-10 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-slate-500 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white transition-all">
          <span className="material-symbols-outlined text-[20px]">palette</span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/10 rounded-xl p-0 w-65 shadow-2xl">
        <div className="p-4">
          {/* Language Toggle */}
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
            {t('lang.label')}
          </p>
          <div className="flex gap-1 mb-5">
            <button
              onClick={() => { i18n.changeLanguage('ko'); localStorage.setItem('lang', 'ko') }}
              className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                currentLang === 'ko'
                  ? 'bg-primary/15 text-primary border border-primary/30'
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent'
              }`}
            >
              {t('lang.ko')}
            </button>
            <button
              onClick={() => { i18n.changeLanguage('en'); localStorage.setItem('lang', 'en') }}
              className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                currentLang === 'en'
                  ? 'bg-primary/15 text-primary border border-primary/30'
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent'
              }`}
            >
              {t('lang.en')}
            </button>
          </div>

          {/* Mode Selection */}
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
            {t('theme.mode')}
          </p>
          <ul className="flex flex-col gap-1 mb-5">
            {modeKeys.map((m) => (
              <li key={m.key}>
                <button
                  onClick={() => setMode(m.key)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    mode === m.key
                      ? 'bg-primary/15 text-primary border border-primary/30'
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-700 dark:hover:text-white border border-transparent'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">{m.icon}</span>
                  <span>{t(m.labelKey)}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Color Selection */}
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
            {t('theme.color')}
          </p>
          <ul className="flex flex-col gap-1">
            {colorPresets.map((preset) => (
              <li key={preset.key}>
                <button
                  onClick={() => setColorKey(preset.key)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    colorKey === preset.key
                      ? 'bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white border border-slate-300 dark:border-white/20'
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-700 dark:hover:text-white border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span
                      className="size-3.5 rounded-full border border-slate-300 dark:border-white/20 shrink-0"
                      style={{ backgroundColor: preset.primary }}
                    />
                    <span
                      className="size-3.5 rounded-full border border-slate-300 dark:border-white/20 shrink-0"
                      style={{ backgroundColor: preset.secondary }}
                    />
                    <span
                      className="size-3.5 rounded-full border border-slate-300 dark:border-white/20 shrink-0"
                      style={{ backgroundColor: preset.accent }}
                    />
                  </div>
                  <span>{t(preset.labelKey)}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  )
}
