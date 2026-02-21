interface Skill {
  icon: string
  name: string
  badge: string
  badgeColor: string
  percent: number
  level: string
  borderHover: string
  iconBg: string
  barGradient: string
  barShadow: string
  tagHover: string
  description: string
  tags: string[]
}

interface Tool {
  icon: string
  color: string
  label: string
}

const skills: Skill[] = [
  {
    icon: 'code_blocks',
    name: 'React',
    badge: 'Main Stack',
    badgeColor: 'text-accent',
    percent: 90,
    level: '전문가',
    borderHover: 'hover:border-accent/30',
    iconBg: 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-black',
    barGradient: 'from-blue-400 to-accent',
    barShadow: 'shadow-[0_0_10px_rgba(97,218,251,0.5)]',
    tagHover: 'hover:border-accent/50 hover:text-accent',
    description:
      '대규모 애플리케이션의 상태 관리와 컴포넌트 설계에 능숙하며, 성능 최적화 경험이 풍부합니다.',
    tags: ['Next.js', 'Redux Toolkit', 'Recoil', 'React Query', 'Styled Components'],
  },
  {
    icon: 'data_object',
    name: 'Vue.js',
    badge: 'Core Skill',
    badgeColor: 'text-secondary',
    percent: 85,
    level: '숙련',
    borderHover: 'hover:border-secondary/30',
    iconBg: 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white',
    barGradient: 'from-emerald-400 to-secondary',
    barShadow: 'shadow-[0_0_10px_rgba(65,184,131,0.5)]',
    tagHover: 'hover:border-secondary/50 hover:text-secondary',
    description:
      'Vue 2/3의 Composition API 활용이 가능하며, 직관적이고 유지보수가 용이한 코드를 작성합니다.',
    tags: ['Nuxt.js', 'Pinia', 'Vuex', 'Vuetify'],
  },
  {
    icon: 'smartphone',
    name: 'React Native',
    badge: 'Mobile',
    badgeColor: 'text-primary',
    percent: 70,
    level: '활용 가능',
    borderHover: 'hover:border-primary/30',
    iconBg: 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white',
    barGradient: 'from-indigo-400 to-primary',
    barShadow: 'shadow-[0_0_10px_rgba(37,37,244,0.5)]',
    tagHover: 'hover:border-primary/50 hover:text-primary',
    description:
      '크로스 플랫폼 앱 개발 경험이 있으며, 네이티브 모듈 연동 및 배포 프로세스를 이해하고 있습니다.',
    tags: ['Expo', 'Reanimated', 'React Navigation'],
  },
]

const tools: Tool[] = [
  { icon: 'terminal', color: 'text-orange-500', label: 'Git & GitHub' },
  { icon: 'flutter', color: 'text-blue-500', label: 'Figma' },
  { icon: 'warning', color: 'text-yellow-500', label: 'Jira & Slack' },
  { icon: 'cloud', color: 'text-purple-500', label: 'Vercel & Netlify' },
]

export default function TechStack() {
  return (
    <main className="grow flex flex-col items-center px-6 py-20 relative">
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
            보유 기술
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg font-light leading-relaxed mx-auto md:mx-0">
            사용자 중심의 인터페이스 구현을 위한 핵심 기술 스택입니다.
            <br className="hidden md:block" />
            지속적인 학습을 통해 최신 트렌드를 반영하고 깊이 있는 전문성을 추구합니다.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`bg-white/60 dark:bg-surface-dark/50 backdrop-blur-sm border border-slate-200 dark:border-white/5 rounded-2xl p-8 ${skill.borderHover} transition-all duration-300 group hover:-translate-y-1 hover:bg-white dark:hover:bg-surface-dark shadow-xl`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${skill.iconBg} transition-colors`}>
                    <span className="material-symbols-outlined text-[32px]">{skill.icon}</span>
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
                  <span className="text-xs text-slate-400 font-medium">{skill.level}</span>
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
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-white/5">
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
        <div className="mt-8 border-t border-slate-200 dark:border-white/5 pt-12">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-slate-400 dark:bg-slate-500 rounded-full" />
            기타 도구 및 협업
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.label}
                className="flex items-center gap-3 p-4 bg-white dark:bg-surface-light rounded-lg border border-slate-200 dark:border-white/5"
              >
                <span className={`material-symbols-outlined ${tool.color}`}>{tool.icon}</span>
                <span className="text-sm text-slate-600 dark:text-slate-300">{tool.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
