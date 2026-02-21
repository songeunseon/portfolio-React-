import { useState } from 'react'
import { Button } from '@heroui/react'

interface ProjectTag {
  label: string
  color: string
}

interface ProjectLink {
  icon: string
  label: string
}

interface Project {
  image: string
  alt: string
  tags: ProjectTag[]
  title: string
  hoverColor: string
  glowGradient: string
  description: string
  links: ProjectLink[]
  category: string
}

const projects: Project[] = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHMQKQevo82B9Psk_jedlpVF0bL9FuOQ05jH2tZ1LSuwwVyJEZc9tb4f4FfcGN192ZkDIGixeel8_PezjK4uI7KojBKSlanWrMeA98jFEbufXV8QbqqoDsIF_qMGyZnopymgAmdEHXlqMYZ0YWEwqM6Om8vS_74MolyaP59pZ63HXdxIzh0oJfBoRI-gu0kAVAT0TKzg79JG77xZwpHNLuuvlI140-ErC-Al_AzlXf8qIEKCPPqpr1vCEz-runjemtgXRjg_DjxF8',
    alt: 'Dashboard Project',
    tags: [
      { label: 'React', color: 'accent' },
      { label: 'Dashboard', color: 'slate' },
    ],
    title: '금융 데이터 시각화 대시보드',
    hoverColor: 'group-hover:text-accent',
    glowGradient: 'from-primary/20 via-transparent to-secondary/20',
    description: '복잡한 금융 데이터를 실시간 차트로 시각화하여 사용자가 직관적으로 자산을 관리할 수 있도록 돕는 대시보드입니다. Recharts 라이브러리를 최적화하여 렌더링 성능을 개선했습니다.',
    links: [
      { icon: 'code', label: '코드 보기' },
      { icon: 'visibility', label: '라이브 데모' },
    ],
    category: 'React',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLK28lX_2wMg-fCql8mQgVoFDXPp5L3hldlL8ddzW2Kn5a38dXupuHXpJN8B-2qThwLVzKjRLBi9-AF-f1rLTF-Zl1tx8f8vMX68M2izFpYa-Onz1mGJbR4INEEWvJL7qV3lGNKGPlw-hTW2OpCyt4JN48X9XkpuruUgGYLx6lg661GzVTnLUVQS_nkh5ZzGu3md_z7MnJm_b-X1jl4pAx080A12BRBHGTjVWgbOogiOrx1ov-My3EqoIeTAM5jLz8_Kt1SYugw5s',
    alt: 'E-commerce Project',
    tags: [
      { label: 'Vue.js', color: 'secondary' },
      { label: 'E-Commerce', color: 'slate' },
    ],
    title: '프리미엄 의류 쇼핑몰',
    hoverColor: 'group-hover:text-secondary',
    glowGradient: 'from-secondary/20 via-transparent to-primary/20',
    description: 'Vue 3와 Pinia를 활용한 상태 관리로 장바구니 기능을 고도화한 이커머스 플랫폼입니다. 결제 프로세스를 간소화하여 구매 전환율을 15% 상승시켰습니다.',
    links: [
      { icon: 'code', label: '코드 보기' },
      { icon: 'visibility', label: '라이브 데모' },
    ],
    category: 'Vue.js',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdWM_0GD2ubGr3igsL3TeUYWbUo1h5USqrvJHp5Uhffjtfsks7QN76vx1DLqDohfA2omVxi4apwXJQiCn8xLQq0ggiSuXGyjTim8iNMgBt0Q42cmCVVeX4KzJ2I8_TDsQcJaXEGO3GIoI_-STRYdWgRxXvXb_6107oZkAKEY5zJJgFyhZJqI9dKBWVLgz1vmmIz7DjvF1boZlvj3LjOBjMPa-OnIdUrNghhxo6-RwTBktpjG5JNx9RANXvj7z015LQeTutD3opsX0',
    alt: 'Mobile App Project',
    tags: [
      { label: 'React Native', color: 'primary' },
      { label: 'Mobile', color: 'slate' },
    ],
    title: '헬스케어 트래킹 앱',
    hoverColor: 'group-hover:text-primary',
    glowGradient: 'from-primary/20 via-transparent to-accent/20',
    description: '사용자의 운동 기록과 건강 데이터를 추적하는 크로스 플랫폼 모바일 애플리케이션입니다. 네이티브 모듈 연동을 통해 블루투스 기기와의 연결 안정성을 확보했습니다.',
    links: [
      { icon: 'code', label: '코드 보기' },
      { icon: 'smartphone', label: '앱 스토어' },
    ],
    category: 'React Native',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjFx6aq4VFzHSkvcXg283s9qCWlMTdUmFPOa52DfW1wYGbJkNY55--HqU5TA5nI8OpzWSb8vOyhCWt-AzHcB_TL5rgrkqIGF6j7GQlkZ2n2woTzw4JV27wD3PBTE_wXTX0SQjFAG3nVIz2dv5H-5V8xTApJ1Zde2hmNB7wEF2VpQdrTRYK67xe-8WwN2LQKuYCFEJM68keOX8KQUt4H6Bneg8s3fcqDW0PXgdEPPNg30X_P4uPqvwpXyI38S0iSm-_VKWK6ZW7kr4',
    alt: 'Corporate Website',
    tags: [
      { label: 'React', color: 'accent' },
      { label: 'Web', color: 'slate' },
    ],
    title: '스타트업 기업 소개 사이트',
    hoverColor: 'group-hover:text-accent',
    glowGradient: 'from-accent/20 via-transparent to-primary/20',
    description: 'Next.js를 활용하여 SEO를 최적화하고, 인터랙티브한 웹 애니메이션을 적용하여 브랜드 이미지를 강화한 기업 공식 홈페이지입니다.',
    links: [
      { icon: 'code', label: '코드 보기' },
      { icon: 'visibility', label: '라이브 데모' },
    ],
    category: 'React',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUJCOHQcuaC1gGD7DqXpEhZypYb2jha7GrvuOPAETQMB8_0BcJW5BA-dJwinMqsAoLkNhDhionjVydyj4CTNnBsqOpkjN1q985uLaUcjsHP2K0B82Y6FO0YsGvZ8vf_vYEuSrmSOTWKbFYk5fiCdNQp5lAfGEwNK827kaSS8Ia-iBJrecXaoG3XkokUqr_g4-f04tlBCLHw_1UTW-385tqFXfu-KXNaXCKVdMlTiww449FtxDy-NCXUs8FjQEpz5ZzOkSnd6eLa2c',
    alt: 'Admin Panel',
    tags: [
      { label: 'Vue.js', color: 'secondary' },
      { label: 'Admin', color: 'slate' },
    ],
    title: '콘텐츠 관리 시스템 (CMS)',
    hoverColor: 'group-hover:text-secondary',
    glowGradient: 'from-secondary/20 via-transparent to-accent/20',
    description: '관리자가 손쉽게 콘텐츠를 작성하고 배포할 수 있는 CMS를 구축했습니다. WYSIWYG 에디터를 커스터마이징하여 사용성을 극대화했습니다.',
    links: [
      { icon: 'code', label: '코드 보기' },
      { icon: 'visibility', label: '라이브 데모' },
    ],
    category: 'Vue.js',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-qVeVbRNmxjTRiakOe6OWRd7pXgesbu3cL20HhU0SBJa9C_gQtIT4M1MxLmQ34KkhB1JdIrw0jCaTPZiW1iS5itMle4mEGFdRgia83sYmDaCgPSpvA7LVLRqdcPjf3nJt0idmLooghm6D9esJbX-Y_TDPeRx_UctiLK8uMuAlQjEm59qjuIsu6553eYJ0V300QJqjlkcJXPFEx73SQdse2yCAUsN012jRGGEIN9FoF78GgRRx1OZT7zKOInjD73nHFmPp4_6hY1A',
    alt: 'Code Refactor',
    tags: [
      { label: 'TS', color: 'white' },
      { label: 'Tool', color: 'slate' },
    ],
    title: '개발자 생산성 도구',
    hoverColor: 'group-hover:text-slate-900 dark:group-hover:text-white',
    glowGradient: 'from-primary/20 via-transparent to-white/10',
    description: 'TypeScript로 작성된 코드 스니펫 관리 도구입니다. Electron을 사용하여 데스크탑 앱으로 패키징하였으며, 오프라인 접근성을 지원합니다.',
    links: [
      { icon: 'code', label: '코드 보기' },
      { icon: 'download', label: '다운로드' },
    ],
    category: 'Other',
  },
]

const filters = ['전체', 'React', 'Vue.js', 'React Native']

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
  const [activeFilter, setActiveFilter] = useState('전체')

  const filtered = activeFilter === '전체'
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
            작업물
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl text-lg font-light leading-relaxed">
            사용자 경험을 최우선으로 생각하며 제작한 프로젝트들입니다.{' '}
            <br className="hidden md:block" />
            최신 프론트엔드 기술을 활용하여 해결한 문제들을 확인해보세요.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-slate-400 dark:text-slate-500 text-sm font-medium mr-2">필터:</span>
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
            key={project.title}
            className="project-card group relative rounded-2xl overflow-hidden glass-card transition-all duration-300 hover:-translate-y-2"
          >
            {/* Glow Effect */}
            <div
              className={`card-glow absolute inset-0 bg-linear-to-br ${project.glowGradient} opacity-0 transition-opacity duration-500 pointer-events-none z-0`}
            />

            <div className="relative z-10">
              {/* Image */}
              <div className="aspect-video w-full overflow-hidden border-b border-slate-200 dark:border-white/5">
                <img
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-background-light/20 dark:bg-background-dark/20 group-hover:bg-transparent transition-colors duration-300" />
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
                  <a className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
                    <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                  </a>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold text-slate-900 dark:text-white mb-2 ${project.hoverColor} transition-colors`}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Action Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-white/5">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      href="#"
                    >
                      <span className="material-symbols-outlined text-[16px]">{link.icon}</span>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-16 text-center">
        <Button
          className="inline-flex items-center gap-2 bg-transparent hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-8 py-3 rounded-full text-sm font-bold group"
          variant="bordered"
        >
          더 많은 프로젝트 보기
          <span className="material-symbols-outlined text-[18px] group-hover:translate-y-1 transition-transform">
            expand_more
          </span>
        </Button>
      </div>
    </main>
  )
}
