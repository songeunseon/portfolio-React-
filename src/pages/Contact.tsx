import { useState, type FormEvent } from 'react'

interface ContactLink {
  icon: string
  label: string
  value: string
  hoverColor: string
  href: string
}

const contactLinks: ContactLink[] = [
  {
    icon: 'mail',
    label: 'Email',
    value: 'hello@developer.com',
    hoverColor: 'group-hover:text-primary',
    href: 'mailto:hello@developer.com',
  },
  {
    icon: 'work',
    label: 'LinkedIn',
    value: '@frontend-dev',
    hoverColor: 'group-hover:text-[#0077b5]',
    href: '#',
  },
  {
    icon: 'code',
    label: 'GitHub',
    value: '@devportfolio',
    hoverColor: 'group-hover:text-slate-900 dark:group-hover:text-white',
    href: '#',
  },
  {
    icon: 'photo_camera',
    label: 'Instagram',
    value: '@dev_daily',
    hoverColor: 'group-hover:text-[#E1306C]',
    href: '#',
  },
]

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <main className="flex-grow flex items-center justify-center px-6 py-12 relative">
      <div className="max-w-[1280px] w-full flex flex-col gap-10">
        {/* Header */}
        <div
          className="flex flex-col gap-4 text-center md:text-left mb-8"
          style={{ animation: 'fadeIn 0.5s ease-out' }}
        >
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight flex items-center justify-center md:justify-start gap-4">
            <span className="material-symbols-outlined text-4xl md:text-6xl text-primary">
              mail
            </span>
            연락처
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg font-light leading-relaxed mx-auto md:mx-0">
            프로젝트 문의, 채용 제안 또는 가벼운 커피챗도 환영합니다.
            <br className="hidden md:block" />
            함께 성장할 파트너를 찾으시나요?
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 w-full max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 rounded-2xl p-8 md:p-10 shadow-xl backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">mail</span>
              메시지 보내기
            </h2>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-300 ml-1" htmlFor="name">
                    이름
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="홍길동"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-background-dark/50 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-300 ml-1" htmlFor="email">
                    이메일
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-background-dark/50 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300 ml-1" htmlFor="message">
                  메시지
                </label>
                <textarea
                  id="message"
                  placeholder="프로젝트에 대해 이야기해 볼까요?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-background-dark/50 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all h-40 resize-none"
                />
              </div>

              <button
                type="button"
                className="mt-4 w-full h-14 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white text-base font-bold rounded-lg transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                보내기
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                  send
                </span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 rounded-2xl p-8 shadow-xl backdrop-blur-sm h-full flex flex-col">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">
                  connect_without_contact
                </span>
                연락처 정보
              </h2>

              <div className="flex flex-col gap-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20 transition-all group"
                  >
                    <div
                      className={`size-12 rounded-lg bg-white dark:bg-background-dark flex items-center justify-center text-slate-400 ${link.hoverColor} transition-colors`}
                    >
                      <span className="material-symbols-outlined">{link.icon}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wider mb-0.5">
                        {link.label}
                      </span>
                      <span
                        className={`text-slate-700 dark:text-slate-200 font-medium ${link.hoverColor} transition-colors`}
                      >
                        {link.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
