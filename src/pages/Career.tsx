import { Button } from '@heroui/react'

interface Experience {
  dotColor: string
  dotGlow: string
  dotPulse: boolean
  dateLabel: string
  dateLabelColor: string
  period: string
  periodBg: string
  title: string
  subtitle: string
  hoverColor: string
  hoverBorder: string
  hoverShadow: string
  checkColor: string
  description: string
  achievements: string[]
  tags: string[]
}

const experiences: Experience[] = [
  {
    dotColor: 'border-accent',
    dotGlow: 'shadow-[0_0_10px_rgba(97,218,251,0.5)]',
    dotPulse: true,
    dateLabel: '현재',
    dateLabelColor: 'text-accent',
    period: '2024.03 - 현재',
    periodBg: 'bg-accent/10 text-accent border-accent/20',
    title: '프론트엔드 프리랜서',
    subtitle: '개인 프로젝트 및 외주 개발',
    hoverColor: 'group-hover:text-accent',
    hoverBorder: 'hover:border-accent/30',
    hoverShadow: 'hover:shadow-accent/5',
    checkColor: 'text-accent',
    description:
      'React와 Vue.js를 활용하여 다양한 클라이언트의 웹 애플리케이션을 개발하고 있습니다. 사용자 경험 중심의 인터페이스 설계와 성능 최적화에 주력하며, 모던 웹 기술을 적극적으로 도입하여 프로젝트의 완성도를 높이고 있습니다.',
    achievements: [
      'e-Commerce 플랫폼 대시보드 UI 리뉴얼 및 성능 30% 개선',
      '반응형 기업 포트폴리오 사이트 제작 (Next.js 활용)',
      '재사용 가능한 커스텀 훅 및 컴포넌트 라이브러리 구축',
    ],
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    dotColor: 'border-secondary',
    dotGlow: '',
    dotPulse: false,
    dateLabel: '2024.01',
    dateLabelColor: 'text-secondary',
    period: '2024.01 - 2024.02',
    periodBg: 'bg-secondary/10 text-secondary border-secondary/20',
    title: '테크 스타트업 인턴',
    subtitle: '(주)퓨처웨이브',
    hoverColor: 'group-hover:text-secondary',
    hoverBorder: 'hover:border-secondary/30',
    hoverShadow: 'hover:shadow-secondary/5',
    checkColor: 'text-secondary',
    description:
      '초기 단계의 스타트업에서 사내 관리자 페이지 개발에 참여했습니다. Vue.js 생태계를 경험하며 상태 관리 패턴과 컴포넌트 설계에 대한 이해도를 높였습니다.',
    achievements: [
      'Vue 3 & Pinia 기반의 사내 인트라넷 게시판 모듈 개발',
      'Rest API 연동 및 데이터 시각화 차트(Chart.js) 구현',
    ],
    tags: ['Vue.js', 'Pinia', 'TailwindCSS'],
  },
  {
    dotColor: 'border-primary',
    dotGlow: '',
    dotPulse: false,
    dateLabel: '2023.12',
    dateLabelColor: 'text-primary',
    period: '2023.12',
    periodBg: 'bg-primary/10 text-primary border-primary/20',
    title: '커리어 시작',
    subtitle: '프론트엔드 개발 입문',
    hoverColor: 'group-hover:text-primary',
    hoverBorder: 'hover:border-primary/30',
    hoverShadow: 'hover:shadow-primary/5',
    checkColor: 'text-primary',
    description:
      'HTML, CSS, JavaScript 기초 학습을 완료하고 본격적인 프론트엔드 개발자로서의 여정을 시작했습니다. 첫 개인 토이 프로젝트를 배포하며 웹 동작 원리에 대해 깊이 탐구했습니다.',
    achievements: [
      'Todo List 및 날씨 정보 웹 앱 제작 (OpenWeatherMap API)',
      'Git/GitHub를 활용한 버전 관리 학습 시작',
    ],
    tags: ['HTML/CSS', 'JavaScript', 'Git'],
  },
]

export default function Career() {
  return (
    <main className="flex-grow flex flex-col items-center px-6 py-16 relative">
      <div className="max-w-[1280px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar - Career Summary */}
        <div className="lg:col-span-4 order-1 lg:order-2">
          <div className="sticky top-28 space-y-8">
            <div className="bg-white dark:bg-surface-card border border-slate-200 dark:border-white/10 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-accent">summarize</span>
                Career Summary
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-background-dark/50 p-4 rounded-xl border border-slate-200 dark:border-white/5">
                  <span className="block text-slate-400 text-xs uppercase tracking-wider mb-1">
                    총 프로젝트 수
                  </span>
                  <span className="text-2xl font-black text-slate-900 dark:text-white">
                    12<span className="text-base text-primary font-normal ml-1">개</span>
                  </span>
                </div>
                <div className="bg-slate-50 dark:bg-background-dark/50 p-4 rounded-xl border border-slate-200 dark:border-white/5">
                  <span className="block text-slate-400 text-xs uppercase tracking-wider mb-1">
                    활동 기간
                  </span>
                  <span className="text-2xl font-black text-slate-900 dark:text-white">
                    6<span className="text-base text-secondary font-normal ml-1">개월+</span>
                  </span>
                </div>
                <div className="bg-slate-50 dark:bg-background-dark/50 p-4 rounded-xl border border-slate-200 dark:border-white/5 col-span-2">
                  <span className="block text-slate-400 text-xs uppercase tracking-wider mb-1">
                    핵심 역량
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
                  <span>이력서 다운로드</span>
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
              경력 히스토리
            </h1>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg font-light leading-relaxed">
              지속적인 성장과 도전의 기록들
            </p>
          </div>

          <div className="relative pl-8 md:pl-16 border-l border-slate-200 dark:border-white/10 space-y-16">
            {/* Timeline gradient line */}
            <div className="absolute left-[-1px] top-0 bottom-0 w-[3px] bg-timeline-gradient shadow-[0_0_15px_rgba(37,37,244,0.5)] rounded-full" />

            {/* Experience Items */}
            {experiences.map((exp) => (
              <div key={exp.title} className="relative group">
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[41px] md:-left-[73px] top-0 flex items-center justify-center size-5 bg-background-light dark:bg-background-dark border-2 ${exp.dotColor} rounded-full z-10 ${exp.dotGlow}`}
                >
                  {exp.dotPulse ? (
                    <div className="size-2 bg-accent rounded-full animate-pulse" />
                  ) : null}
                </div>

                {/* Date Label (desktop) */}
                <span
                  className={`absolute -left-[50px] md:-left-[150px] top-0.5 text-xs font-bold ${exp.dateLabelColor} text-right w-[60px] hidden md:block`}
                >
                  {exp.dateLabel}
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
                        {exp.title}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{exp.subtitle}</p>
                    </div>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full ${exp.periodBg} text-xs font-medium border`}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((item) => (
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
            ))}

            {/* Timeline Start Marker */}
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[73px] top-1/2 -translate-y-1/2 size-3 bg-slate-900 dark:bg-white rounded-full z-10" />
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/10 shadow-xl backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-xs font-bold text-slate-900 dark:text-white tracking-wide">
                  2023.12 - 커리어 시작
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
