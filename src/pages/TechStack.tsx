import { useTranslation } from 'react-i18next'

import reactSvg from '../assets/skills-icon/react.svg'
import vuePng from '../assets/skills-icon/vue.png'
import vercelPng from '../assets/skills-icon/vercel.png'
import expoPng from '../assets/skills-icon/expo.png'
import githubPng from '../assets/skills-icon/github.png'
import figmaPng from '../assets/skills-icon/figma.png'
import zeplinPng from '../assets/skills-icon/zeplin.png'
import canvaPng from '../assets/skills-icon/canva.png'
import firebasePng from '../assets/skills-icon/firebase.png'
import googleCloudPng from '../assets/skills-icon/google-cloud.png'
import postmanPng from '../assets/skills-icon/postman.png'
import vscodePng from '../assets/skills-icon/visual-studio-code.png'
import reactNativePng from '../assets/skills-icon/react-native.png'
import tailwindPng from '../assets/skills-icon/tailwind.png'
import zustandPng from '../assets/skills-icon/zustand.png'
import threePng from '../assets/skills-icon/three.png'
import bootstrapPng from '../assets/skills-icon/bootstrap.png'

interface Skill {
  icon: string
  iconImage?: string
  name: string
  badge: string
  badgeColor: string
  percent: number
  levelKey: string
  borderHover: string
  iconBg: string
  barGradient: string
  barShadow: string
  tagHover: string
  descriptionKey: string
  tags: string[]
}

interface Tool {
  icon: string
  iconImage?: string
  color: string
  label: string
}

const skills: Skill[] = [
  {
    icon: 'code_blocks',
    iconImage: reactSvg,
    name: 'React',
    badge: 'Web',
    badgeColor: 'text-accent',
    percent: 85,
    levelKey: 'skills.levels.proficient',
    borderHover: 'hover:border-accent/30',
    iconBg: 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-black',
    barGradient: 'from-blue-400 to-accent',
    barShadow: 'shadow-[0_0_10px_rgba(97,218,251,0.5)]',
    tagHover: 'hover:border-accent/50 hover:text-accent',
    descriptionKey: 'skills.descriptions.react',
    tags: ['Zustand', 'React Query', 'TanStack Router', 'Tailwind CSS', 'shadcn/ui', 'Three.js'],
  },
  {
    icon: 'data_object',
    iconImage: vuePng,
    name: 'Vue.js',
    badge: 'Web',
    badgeColor: 'text-secondary',
    percent: 85,
    levelKey: 'skills.levels.proficient',
    borderHover: 'hover:border-secondary/30',
    iconBg: 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white',
    barGradient: 'from-emerald-400 to-secondary',
    barShadow: 'shadow-[0_0_10px_rgba(65,184,131,0.5)]',
    tagHover: 'hover:border-secondary/50 hover:text-secondary',
    descriptionKey: 'skills.descriptions.vue',
    tags: ['Pinia', 'Vue Router', 'Bootstrap', 'Chart.js', 'Firebase'],
  },
  {
    icon: 'smartphone',
    iconImage: reactNativePng,
    name: 'React Native',
    badge: 'Mobile',
    badgeColor: 'text-primary',
    percent: 85,
    levelKey: 'skills.levels.proficient',
    borderHover: 'hover:border-primary/30',
    iconBg: 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white',
    barGradient: 'from-indigo-400 to-primary',
    barShadow: 'shadow-[0_0_10px_rgba(37,37,244,0.5)]',
    tagHover: 'hover:border-primary/50 hover:text-primary',
    descriptionKey: 'skills.descriptions.rn',
    tags: ['Expo Router', 'Zustand', 'React Query', 'HeroUI Native', 'Reanimated'],
  },
]

const tools: Tool[] = [
  { icon: 'terminal', iconImage: githubPng, color: 'text-orange-500', label: 'Git & GitHub' },
  { icon: 'flutter', iconImage: figmaPng, color: 'text-blue-500', label: 'Figma' },
  { icon: 'cloud', iconImage: vercelPng, color: 'text-purple-500', label: 'Vercel & Netlify' },
  { icon: 'smartphone', iconImage: expoPng, color: 'text-slate-500', label: 'Expo' },
  { icon: 'palette', iconImage: zeplinPng, color: 'text-pink-500', label: 'Zeplin' },
  { icon: 'brush', iconImage: canvaPng, color: 'text-cyan-500', label: 'Canva' },
  { icon: 'local_fire_department', iconImage: firebasePng, color: 'text-amber-500', label: 'Firebase' },
  { icon: 'search', iconImage: googleCloudPng, color: 'text-green-500', label: 'Google Console' },
  { icon: 'api', iconImage: postmanPng, color: 'text-orange-400', label: 'Postman' },
  { icon: 'code', iconImage: vscodePng, color: 'text-blue-400', label: 'VS Code' },
  { icon: 'css', iconImage: tailwindPng, color: 'text-sky-400', label: 'Tailwind CSS' },
  { icon: 'store', iconImage: zustandPng, color: 'text-amber-600', label: 'Zustand' },
  { icon: '3d_rotation', iconImage: threePng, color: 'text-slate-400', label: 'Three.js' },
  { icon: 'grid_view', iconImage: bootstrapPng, color: 'text-violet-500', label: 'Bootstrap' },
]

export default function TechStack() {
  const { t } = useTranslation()

  return (
    <main className="grow flex flex-col items-center px-6 py-16 relative">
      <div className="max-w-7xl w-full flex flex-col gap-12">
        {/* Page Header */}
        <div
          className="flex flex-col gap-4 text-center md:text-left mb-8"
          style={{ animation: 'fadeIn 0.5s ease-out' }}
        >
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight flex items-center justify-center md:justify-start gap-4">
            <span className="material-symbols-outlined text-4xl md:text-6xl text-primary">
              layers
            </span>
            {t('skills.title')}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg font-light leading-relaxed mx-auto md:mx-0">
            {t('skills.subtitle')}
            <br className="hidden md:block" />
            {t('skills.subtitle2')}
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`bg-white/60 dark:bg-surface-dark/50 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-2xl p-8 ${skill.borderHover} transition-all duration-300 group hover:-translate-y-1 hover:bg-white dark:hover:bg-surface-dark shadow-xl`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${skill.iconBg} transition-colors`}>
                    {skill.iconImage ? (
                      <img src={skill.iconImage} alt={skill.name} className="size-8 object-contain" />
                    ) : (
                      <span className="material-symbols-outlined text-[32px]">{skill.icon}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{skill.name}</h3>
                    <p className={`text-xs ${skill.badgeColor} mt-0.5 font-medium`}>
                      {skill.badge}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-2xl font-black text-slate-900 dark:text-white">{skill.percent}%</span>
                  <span className="text-xs text-slate-400 font-medium">{t(skill.levelKey)}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-linear-to-r ${skill.barGradient} rounded-full ${skill.barShadow}`}
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>

              {/* Description & Tags */}
              <div className="space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed min-h-10">
                  {t(skill.descriptionKey)}
                </p>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-white/10">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 ${skill.tagHover} transition-colors`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="mt-8 border-t border-slate-200 dark:border-white/10 pt-12">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-slate-400 dark:bg-slate-500 rounded-full" />
            {t('skills.tools_title')}
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.label}
                className="flex items-center gap-3 p-4 bg-white dark:bg-surface-light rounded-lg border border-slate-200 dark:border-white/10"
              >
                {tool.iconImage ? (
                  <img src={tool.iconImage} alt={tool.label} className="size-5 object-contain" />
                ) : (
                  <span className={`material-symbols-outlined ${tool.color}`}>{tool.icon}</span>
                )}
                <span className="text-sm text-slate-600 dark:text-slate-300">{tool.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
