import { useTranslation } from 'react-i18next'
import profileImg from '../assets/my/ses.jpg'
import gmailIcon from '../assets/gmail.png'
import naverMailIcon from '../assets/naver-mail.png'
import githubIcon from '../assets/skills-icon/github.png'
import instagramIcon from '../assets/Instagram.png'

interface ContactLink {
  iconImage: string
  label: string
  value: string
  hoverBorder: string
  href: string
}

const contactLinks: ContactLink[] = [
  {
    iconImage: gmailIcon,
    label: 'Gmail',
    value: 'ses920525@gmail.com',
    hoverBorder: 'hover:border-red-400/30',
    href: 'mailto:ses920525@gmail.com',
  },
  {
    iconImage: naverMailIcon,
    label: 'Naver Mail',
    value: 'ttioni_v0v@naver.com',
    hoverBorder: 'hover:border-green-500/30',
    href: 'mailto:ttioni_v0v@naver.com',
  },
  {
    iconImage: githubIcon,
    label: 'GitHub',
    value: '@songeunseon',
    hoverBorder: 'hover:border-slate-400/30 dark:hover:border-white/30',
    href: 'https://github.com/songeunseon',
  },
  {
    iconImage: instagramIcon,
    label: 'Instagram',
    value: '@sil____ver.s',
    hoverBorder: 'hover:border-[#E1306C]/30',
    href: 'https://instagram.com/sil____ver.s',
  },
]

export default function Contact() {
  const { t } = useTranslation()

  return (
    <main className="grow flex flex-col items-center justify-center px-6 py-16 relative">
      <div className="w-full max-w-4xl flex flex-col items-center gap-12">
        {/* Header */}
        <div className="text-center space-y-4" style={{ animation: 'fadeIn 0.5s ease-out' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
            {t('contact.subtitle2')}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-light">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Business Card */}
        <div className="w-full max-w-135 relative group">
          {/* Neon border effect */}
          <div className="absolute -inset-px rounded-3xl bg-linear-to-r from-primary via-accent to-secondary opacity-30 group-hover:opacity-50 blur-sm transition-opacity" />

          <div className="relative bg-white/80 dark:bg-white/3 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden">
            {/* Dot pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[20px_20px]" />

            <div className="relative z-10">
              {/* Profile Section */}
              <div className="flex flex-col md:flex-row items-center gap-6 mb-10 text-center md:text-left">
                <div className="relative">
                  <div className="absolute -inset-1 bg-linear-to-tr from-primary to-accent rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="size-28 md:size-32 rounded-full border-2 border-slate-200 dark:border-white/20 overflow-hidden relative bg-slate-100 dark:bg-surface-dark">
                    <img
                      src={profileImg}
                      alt={t('contact.card_name')}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {t('contact.card_name')}
                  </h2>
                  <p className="text-accent dark:text-accent font-medium uppercase tracking-widest text-sm">
                    {t('contact.role')}
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20">
                      {t('contact.status')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Links */}
              <div className="grid grid-cols-1 gap-3">
                {contactLinks.map((link) => {
                  const isExternal = !link.href.startsWith('mailto:')
                  return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className={`flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 ${link.hoverBorder} transition-all group/item`}
                  >
                    <div className="size-10 rounded-xl bg-white dark:bg-white/20 flex items-center justify-center group-hover/item:scale-110 transition-all">
                      <img src={link.iconImage} alt={link.label} className="size-5 object-contain" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">
                        {link.label}
                      </span>
                      <span className="text-slate-700 dark:text-slate-200 font-medium">
                        {link.value}
                      </span>
                    </div>
                    <span className="material-symbols-outlined ml-auto text-slate-300 dark:text-slate-600 text-[18px] opacity-0 group-hover/item:opacity-100 transition-opacity">
                      arrow_outward
                    </span>
                  </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
