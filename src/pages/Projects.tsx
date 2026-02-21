import { useState } from 'react'
import { Button } from '@heroui/react'
import { useTranslation } from 'react-i18next'

interface ProjectTag {
  label: string
  color: string
}

interface ProjectLink {
  icon: string
  labelKey: string
  href: string
}

interface Project {
  alt: string
  tags: ProjectTag[]
  titleKey: string
  descriptionKey: string
  hoverColor: string
  glowGradient: string
  links: ProjectLink[]
  category: string
  github: string
}

const projects: Project[] = [
  {
    alt: 'dev-study-hub',
    tags: [
      { label: 'TypeScript', color: 'accent' },
      { label: 'Planner', color: 'slate' },
    ],
    titleKey: 'projects.items.devStudyHub.title',
    descriptionKey: 'projects.items.devStudyHub.description',
    hoverColor: 'group-hover:text-accent',
    glowGradient: 'from-accent/20 via-transparent to-primary/20',
    links: [
      { icon: 'code', labelKey: 'projects.viewCode', href: 'https://github.com/songeunseon/dev-study-hub' },
      { icon: 'visibility', labelKey: 'projects.liveDemo', href: 'https://dev-study-hub.vercel.app' },
    ],
    category: 'TypeScript',
    github: 'https://github.com/songeunseon/dev-study-hub',
  },
  {
    alt: 'Raonaria',
    tags: [
      { label: 'Vue', color: 'secondary' },
      { label: 'Team', color: 'slate' },
    ],
    titleKey: 'projects.items.raonaria.title',
    descriptionKey: 'projects.items.raonaria.description',
    hoverColor: 'group-hover:text-secondary',
    glowGradient: 'from-secondary/20 via-transparent to-primary/20',
    links: [
      { icon: 'code', labelKey: 'projects.viewCode', href: 'https://github.com/songeunseon/Raonaria' },
      { icon: 'visibility', labelKey: 'projects.liveDemo', href: 'https://raonaria.vercel.app' },
    ],
    category: 'Vue.js',
    github: 'https://github.com/songeunseon/Raonaria',
  },
  {
    alt: 'air',
    tags: [
      { label: 'Vue', color: 'secondary' },
      { label: 'Web', color: 'slate' },
    ],
    titleKey: 'projects.items.air.title',
    descriptionKey: 'projects.items.air.description',
    hoverColor: 'group-hover:text-secondary',
    glowGradient: 'from-secondary/20 via-transparent to-accent/20',
    links: [
      { icon: 'code', labelKey: 'projects.viewCode', href: 'https://github.com/songeunseon/air' },
      { icon: 'visibility', labelKey: 'projects.liveDemo', href: 'https://air-three-rho.vercel.app' },
    ],
    category: 'Vue.js',
    github: 'https://github.com/songeunseon/air',
  },
  {
    alt: 'DW-essong',
    tags: [
      { label: 'HTML', color: 'primary' },
      { label: 'Script', color: 'slate' },
    ],
    titleKey: 'projects.items.dwEssong.title',
    descriptionKey: 'projects.items.dwEssong.description',
    hoverColor: 'group-hover:text-primary',
    glowGradient: 'from-primary/20 via-transparent to-accent/20',
    links: [
      { icon: 'code', labelKey: 'projects.viewCode', href: 'https://github.com/songeunseon/DW-essong' },
    ],
    category: 'HTML/CSS',
    github: 'https://github.com/songeunseon/DW-essong',
  },
  {
    alt: 'toy',
    tags: [
      { label: 'CSS', color: 'primary' },
      { label: 'Toy', color: 'slate' },
    ],
    titleKey: 'projects.items.toy.title',
    descriptionKey: 'projects.items.toy.description',
    hoverColor: 'group-hover:text-primary',
    glowGradient: 'from-primary/20 via-transparent to-secondary/20',
    links: [
      { icon: 'code', labelKey: 'projects.viewCode', href: 'https://github.com/songeunseon/toy' },
    ],
    category: 'HTML/CSS',
    github: 'https://github.com/songeunseon/toy',
  },
]

function getTagClasses(color: string): string {
  switch (color) {
    case 'accent':
      return 'bg-accent/10 border-accent/20 text-accent'
    case 'secondary':
      return 'bg-secondary/10 border-secondary/20 text-secondary'
    case 'primary':
      return 'bg-primary/10 border-primary/20 text-primary'
    case 'white':
      return 'bg-slate-100 dark:bg-white/10 border-slate-300 dark:border-white/20 text-slate-700 dark:text-white'
    default:
      return 'bg-slate-100 dark:bg-slate-700/50 border-slate-300 dark:border-slate-600/30 text-slate-600 dark:text-slate-300'
  }
}

export default function Projects() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState(t('projects.all'))

  const filters = [t('projects.all'), 'Vue.js', 'TypeScript', 'HTML/CSS']

  const filtered = activeFilter === t('projects.all')
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <main className="grow w-full max-w-7xl mx-auto px-6 py-12 relative">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-4 mb-4">
            <span className="material-symbols-outlined text-4xl md:text-6xl text-primary">
              folder_special
            </span>
            {t('projects.title')}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl text-lg font-light leading-relaxed">
            {t('projects.subtitle')}{' '}
            <br className="hidden md:block" />
            {t('projects.subtitle2')}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-slate-400 dark:text-slate-500 text-sm font-medium mr-2">{t('projects.filter')}</span>
          {filters.map((filter) => (
            <Button
              key={filter}
              className={
                activeFilter === filter
                  ? 'px-4 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-background-dark text-sm font-bold shadow-lg shadow-slate-900/10 dark:shadow-white/10'
                  : 'px-4 py-2 rounded-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/30 text-sm font-medium'
              }
              variant="light"
              onPress={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <div
            key={project.alt}
            className="project-card group relative rounded-2xl overflow-hidden glass-card transition-all duration-300 hover:-translate-y-2"
          >
            {/* Glow Effect */}
            <div
              className={`card-glow absolute inset-0 bg-linear-to-br ${project.glowGradient} opacity-0 transition-opacity duration-500 pointer-events-none z-0`}
            />

            <div className="relative z-10">
              {/* Icon Header */}
              <div className="aspect-video w-full overflow-hidden border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-background-dark/50 flex items-center justify-center">
                <span className="material-symbols-outlined text-[64px] text-slate-300 dark:text-slate-600 group-hover:text-primary transition-colors duration-300">
                  code_blocks
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags & External Link */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className={`px-2.5 py-1 rounded border text-[10px] font-bold uppercase tracking-wider ${getTagClasses(tag.color)}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  <a
                    className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                  </a>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold text-slate-900 dark:text-white mb-2 ${project.hoverColor} transition-colors`}>
                  {t(project.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                  {t(project.descriptionKey)}
                </p>

                {/* Action Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-white/5">
                  {project.links.map((link) => (
                    <a
                      key={link.labelKey}
                      className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="material-symbols-outlined text-[16px]">{link.icon}</span>
                      {t(link.labelKey)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
