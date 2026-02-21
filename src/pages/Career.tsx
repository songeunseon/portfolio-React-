import { Button } from '@heroui/react'
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
  key: 'freelancer' | 'intern' | 'start'
}

const experiences: ExperienceStyle[] = [
  {
    dotColor: 'border-accent',
    dotGlow: 'shadow-[0_0_10px_rgba(97,218,251,0.5)]',
    dotPulse: true,
    dateLabelKey: 'career.now',
    dateLabelColor: 'text-accent',
    periodBg: 'bg-accent/10 text-accent border-accent/20',
    hoverColor: 'group-hover:text-accent',
    hoverBorder: 'hover:border-accent/30',
    hoverShadow: 'hover:shadow-accent/5',
    checkColor: 'text-accent',
    tags: ['React', 'Next.js', 'TypeScript'],
    key: 'freelancer',
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
    tags: ['Vue.js', 'Pinia', 'TailwindCSS'],
    key: 'intern',
  },
  {
    dotColor: 'border-primary',
    dotGlow: '',
    dotPulse: false,
    dateLabelKey: '',
    dateLabelColor: 'text-primary',
    periodBg: 'bg-primary/10 text-primary border-primary/20',
    hoverColor: 'group-hover:text-primary',
    hoverBorder: 'hover:border-primary/30',
    hoverShadow: 'hover:shadow-primary/5',
    checkColor: 'text-primary',
    tags: ['HTML/CSS', 'JavaScript', 'Git'],
    key: 'start',
  },
]

export default function Career() {
  const { t } = useTranslation()

  return (
    <main className="grow flex flex-col items-center px-6 py-16 relative">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar - Career Summary */}
        <div className="lg:col-span-4 order-1 lg:order-2">
          <div className="sticky top-28 space-y-8">
            <div className="bg-white dark:bg-surface-card border border-slate-200 dark:border-white/10 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-accent">summarize</span>
                {t('career.summary')}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-background-dark/50 p-4 rounded-xl border border-slate-200 dark:border-white/5">
                  <span className="block text-slate-400 text-xs uppercase tracking-wider mb-1">
                    {t('career.total_projects')}
                  </span>
                  <span className="text-2xl font-black text-slate-900 dark:text-white">
                    12<span className="text-base text-primary font-normal ml-1">{t('career.total_projects_unit')}</span>
                  </span>
                </div>
                <div className="bg-slate-50 dark:bg-background-dark/50 p-4 rounded-xl border border-slate-200 dark:border-white/5">
                  <span className="block text-slate-400 text-xs uppercase tracking-wider mb-1">
                    {t('career.active_period')}
                  </span>
                  <span className="text-2xl font-black text-slate-900 dark:text-white">
                    6<span className="text-base text-secondary font-normal ml-1">{t('career.active_period_unit')}</span>
                  </span>
                </div>
                <div className="bg-slate-50 dark:bg-background-dark/50 p-4 rounded-xl border border-slate-200 dark:border-white/5 col-span-2">
                  <span className="block text-slate-400 text-xs uppercase tracking-wider mb-1">
                    {t('career.core_skills')}
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary text-[10px] rounded border border-primary/20">
                      Frontend
                    </span>
                    <span className="px-2 py-1 bg-secondary/20 text-secondary text-[10px] rounded border border-secondary/20">
                      UI/UX
                    </span>
                    <span className="px-2 py-1 bg-accent/20 text-accent text-[10px] rounded border border-accent/20">
                      Responsive
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10">
                <Button
                  className="w-full py-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 rounded-lg text-sm text-slate-700 dark:text-white font-medium flex items-center justify-center gap-2 group"
                  variant="bordered"
                >
                  <span>{t('career.download_resume')}</span>
                  <span className="material-symbols-outlined text-lg group-hover:translate-y-1 transition-transform">
                    download
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="lg:col-span-8 order-2 lg:order-1">
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

          <div className="relative pl-8 md:pl-16 border-l border-slate-200 dark:border-white/10 space-y-16">
            {/* Timeline gradient line */}
            <div className="absolute -left-px top-0 bottom-0 w-0.75 bg-timeline-gradient shadow-[0_0_15px_rgba(37,37,244,0.5)] rounded-full" />

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
                    className={`absolute -left-10.25 md:-left-18.25 top-0 flex items-center justify-center size-5 bg-background-light dark:bg-background-dark border-2 ${exp.dotColor} rounded-full z-10 ${exp.dotGlow}`}
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
              <div className="absolute -left-10.25 md:-left-18.25 top-1/2 -translate-y-1/2 size-3 bg-slate-900 dark:bg-white rounded-full z-10" />
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
