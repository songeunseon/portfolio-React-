import { Button } from '@heroui/react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import reactSvg from '../assets/skills-icon/react.svg'
import vuePng from '../assets/skills-icon/vue.png'
import expoPng from '../assets/skills-icon/expo.png'
import tailwindPng from '../assets/skills-icon/tailwind.png'
import zustandPng from '../assets/skills-icon/zustand.png'
import threePng from '../assets/skills-icon/three.png'
import firebasePng from '../assets/skills-icon/firebase.png'
import bootstrapPng from '../assets/skills-icon/bootstrap.png'
import vercelPng from '../assets/skills-icon/vercel.png'
import figmaPng from '../assets/skills-icon/figma.png'
import githubPng from '../assets/skills-icon/github.png'
import reactNativePng from '../assets/skills-icon/react-native.png'
import postmanPng from '../assets/skills-icon/postman.png'

interface TechIcon {
  image: string
  label: string
}

export default function Hero() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const techIcons: TechIcon[] = [
    { image: reactSvg, label: 'React' },
    { image: vuePng, label: 'Vue.js' },
    { image: reactNativePng, label: 'React Native' },
    { image: expoPng, label: 'Expo' },
    { image: tailwindPng, label: 'Tailwind CSS' },
    { image: zustandPng, label: 'Zustand' },
    { image: threePng, label: 'Three.js' },
    { image: firebasePng, label: 'Firebase' },
    { image: bootstrapPng, label: 'Bootstrap' },
    { image: vercelPng, label: 'Vercel' },
    { image: figmaPng, label: 'Figma' },
    { image: githubPng, label: 'GitHub' },
    { image: postmanPng, label: 'Postman' },
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
          <span className="text-xs font-medium text-slate-500 dark:text-slate-300 tracking-wide uppercase">{t('hero.badge')}</span>
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-6 max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight dark:mix-blend-screen dark:drop-shadow-2xl">
            {t('hero.title1')}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400">
              {t('hero.title2')}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            <span className="text-accent font-medium">React</span>,{' '}
            <span className="text-secondary font-medium">Vue.js</span>,{' '}
            <span className="text-primary font-medium">React Native</span>
            {t('hero.subtitle_prefix')}
            <br className="hidden md:block" />
            {t('hero.subtitle_suffix')}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button
            className="w-full sm:w-auto h-14 px-8 bg-primary hover:bg-primary/90 text-white text-base font-bold rounded-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            size="lg"
            onPress={() => navigate('/projects')}
          >
            {t('hero.cta_portfolio')}
            <span className="material-symbols-outlined text-[20px]">visibility</span>
          </Button>
          <Button
            className="w-full sm:w-auto h-14 px-8 bg-transparent border border-slate-300 dark:border-white/20 hover:border-slate-400 dark:hover:border-white/40 hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-white text-base font-bold rounded-lg flex items-center justify-center gap-2"
            variant="bordered"
            size="lg"
            onPress={() => navigate('/contact')}
          >
            {t('hero.cta_contact')}
            <span className="material-symbols-outlined text-[20px]">mail</span>
          </Button>
        </div>

        {/* Tech Stack Marquee */}
        <div className="pt-8 md:pt-12 border-t border-slate-200 dark:border-white/10 w-full mt-4">
          <div className="overflow-hidden mask-x">
            <div className="marquee-track flex items-center gap-10 w-max">
              {[...techIcons, ...techIcons].map((tech, i) => (
                <div key={`${tech.label}-${i}`} className="flex flex-col items-center gap-2 group cursor-default relative shrink-0">
                  <img
                    src={tech.image}
                    alt={tech.label}
                    className="size-8 object-contain opacity-50 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-5 whitespace-nowrap">
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
