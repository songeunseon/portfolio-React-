import { useTranslation } from 'react-i18next'

interface ExperienceStyle {
  dotColor: string
  dotGlow: string
  dotPulse: boolean
  dateLabelKey: string
  dateLabelColor: string
  periodBg: string
  hoverColor: string
  hoverBorder: string
  hoverShadow: string
  checkColor: string
  tags: string[]
  key: 'aitron' | 'assemble' | 'training'
}

const experiences: ExperienceStyle[] = [
  {
    dotColor: 'border-primary',
    dotGlow: 'shadow-[0_0_10px_rgba(37,37,244,0.5)]',
    dotPulse: true,
    dateLabelKey: 'career.now',
    dateLabelColor: 'text-primary',
    periodBg: 'bg-primary/10 text-primary border-primary/20',
    hoverColor: 'group-hover:text-primary',
    hoverBorder: 'hover:border-primary/30',
    hoverShadow: 'hover:shadow-primary/5',
    checkColor: 'text-primary',
    tags: ['React', 'React Native', 'TypeScript', 'Zustand', 'TanStack', 'Expo'],
    key: 'aitron',
  },
  {
    dotColor: 'border-accent',
    dotGlow: '',
    dotPulse: false,
    dateLabelKey: '',
    dateLabelColor: 'text-accent',
    periodBg: 'bg-accent/10 text-accent border-accent/20',
    hoverColor: 'group-hover:text-accent',
    hoverBorder: 'hover:border-accent/30',
    hoverShadow: 'hover:shadow-accent/5',
    checkColor: 'text-accent',
    tags: ['Vue 3', 'Vite', 'Pinia', 'Three.js', 'WebSocket', 'Highcharts.js'],
    key: 'assemble',
  },
  {
    dotColor: 'border-secondary',
    dotGlow: '',
    dotPulse: false,
    dateLabelKey: '',
    dateLabelColor: 'text-secondary',
    periodBg: 'bg-secondary/10 text-secondary border-secondary/20',
    hoverColor: 'group-hover:text-secondary',
    hoverBorder: 'hover:border-secondary/30',
    hoverShadow: 'hover:shadow-secondary/5',
    checkColor: 'text-secondary',
    tags: ['HTML/CSS', 'JavaScript', 'Vue.js', 'Bootstrap', 'Firebase'],
    key: 'training',
  },
]

export default function Career() {
  const { t } = useTranslation()

  return (
    <main className="grow flex flex-col items-center px-6 py-16 relative">
      <div className="max-w-4xl w-full">
        {/* Timeline */}
        <div>
          <div
            className="flex flex-col gap-4 mb-12"
            style={{ animation: 'fadeIn 0.5s ease-out' }}
          >
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-4">
              <span className="material-symbols-outlined text-4xl md:text-6xl text-primary">
                timeline
              </span>
              {t('career.title')}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg font-light leading-relaxed">
              {t('career.subtitle')}
            </p>
          </div>

          <div className="relative pl-8 md:pl-16 space-y-16">
            {/* Timeline gradient line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-timeline-gradient shadow-[0_0_12px_rgba(37,37,244,0.4)]" />

            {/* Experience Items */}
            {experiences.map((exp) => {
              const title = t(`career.experiences.${exp.key}.title`)
              const subtitle = t(`career.experiences.${exp.key}.subtitle`)
              const period = t(`career.experiences.${exp.key}.period`)
              const description = t(`career.experiences.${exp.key}.description`)
              const achievements = t(`career.experiences.${exp.key}.achievements`, { returnObjects: true }) as string[]
              const dateLabel = exp.dateLabelKey ? t(exp.dateLabelKey) : period.split(' ')[0]

              return (
                <div key={exp.key} className="relative group">
                  {/* Timeline Dot */}
                  <div
                    className={`absolute -left-10.5 md:-left-18.5 top-0 flex items-center justify-center size-5 bg-background-light dark:bg-background-dark border-2 ${exp.dotColor} rounded-full z-10 ${exp.dotGlow}`}
                  >
                    {exp.dotPulse ? (
                      <div className="size-2 bg-accent rounded-full animate-pulse" />
                    ) : null}
                  </div>

                  {/* Date Label (desktop) */}
                  <span
                    className={`absolute -left-12.5 md:-left-37.5 top-0.5 text-xs font-bold ${exp.dateLabelColor} text-right w-15 hidden md:block`}
                  >
                    {dateLabel}
                  </span>

                  {/* Card */}
                  <div
                    className={`bg-white dark:bg-surface-card hover:bg-slate-50 dark:hover:bg-white/5 border border-slate-200 dark:border-white/10 p-6 md:p-8 rounded-2xl transition-all duration-300 ${exp.hoverBorder} hover:-translate-y-1 hover:shadow-xl ${exp.hoverShadow}`}
                  >
                    {/* Card Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <h3
                          className={`text-xl font-bold text-slate-900 dark:text-white ${exp.hoverColor} transition-colors`}
                        >
                          {title}
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{subtitle}</p>
                      </div>
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full ${exp.periodBg} text-xs font-medium border`}
                      >
                        {period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">{description}</p>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {achievements.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate-500 dark:text-slate-400">
                          <span
                            className={`material-symbols-outlined ${exp.checkColor} text-[18px] mt-0.5 shrink-0`}
                          >
                            check_circle
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex gap-2 mt-6">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-[10px] rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Timeline Start Marker */}
            <div className="relative">
              <div className="absolute -left-9 md:-left-17 top-1/2 -translate-y-1/2 size-3 bg-slate-900 dark:bg-white rounded-full z-10" />
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/10 shadow-xl backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-xs font-bold text-slate-900 dark:text-white tracking-wide">
                  {t('career.career_start')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
