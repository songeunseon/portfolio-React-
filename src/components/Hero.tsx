import { Button } from '@heroui/react'
import { useNavigate } from 'react-router-dom'

interface TechIcon {
  icon: string
  label: string
  hoverColor: string
}

export default function Hero() {
  const navigate = useNavigate()

  const techIcons: TechIcon[] = [
    { icon: 'code_blocks', label: 'React', hoverColor: 'group-hover:text-accent' },
    { icon: 'data_object', label: 'Vue', hoverColor: 'group-hover:text-secondary' },
    { icon: 'smartphone', label: 'Native', hoverColor: 'group-hover:text-primary' },
    { icon: 'api', label: 'API', hoverColor: 'group-hover:text-slate-900 dark:group-hover:text-white' },
  ]

  return (
    <main className="grow flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-5xl w-full flex flex-col items-center text-center gap-10 md:gap-14">
        {/* Status Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/10 shadow-xl backdrop-blur-sm"
          style={{ animation: 'fadeIn 0.5s ease-out' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
          </span>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-300 tracking-wide uppercase">활동 시작 2023.12</span>
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-6 max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight dark:mix-blend-screen dark:drop-shadow-2xl">
            끊임없이 진화하는
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400">
              프론트엔드 개발자
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            <span className="text-accent font-medium">React</span>,{' '}
            <span className="text-secondary font-medium">Vue.js</span>,{' '}
            <span className="text-primary font-medium">React Native</span>를 활용한
            <br className="hidden md:block" />
            최적의 사용자 경험 설계
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button
            className="w-full sm:w-auto h-14 px-8 bg-primary hover:bg-primary/90 text-white text-base font-bold rounded-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            size="lg"
            onPress={() => navigate('/projects')}
          >
            포트폴리오 보기
            <span className="material-symbols-outlined text-[20px]">visibility</span>
          </Button>
          <Button
            className="w-full sm:w-auto h-14 px-8 bg-transparent border border-slate-300 dark:border-white/20 hover:border-slate-400 dark:hover:border-white/40 hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-white text-base font-bold rounded-lg flex items-center justify-center gap-2"
            variant="bordered"
            size="lg"
            onPress={() => navigate('/contact')}
          >
            문의하기
            <span className="material-symbols-outlined text-[20px]">mail</span>
          </Button>
        </div>

        {/* Tech Stack Icons */}
        <div className="pt-8 md:pt-12 border-t border-slate-200 dark:border-white/5 w-full max-w-lg mt-4">
          <p className="text-slate-400 dark:text-slate-500 text-xs uppercase tracking-widest mb-6 font-semibold">사용 기술</p>
          <div className="flex justify-center items-center gap-8 text-slate-400">
            {techIcons.map((tech) => (
              <div key={tech.label} className="flex flex-col items-center gap-2 group cursor-default relative">
                <span className={`material-symbols-outlined text-[32px] ${tech.hoverColor} transition-colors`}>
                  {tech.icon}
                </span>
                <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-5">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
