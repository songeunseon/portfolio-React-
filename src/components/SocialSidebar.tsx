import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import ThemeSettings from './ThemeSettings'
import logoPng from '../assets/logo.png'

interface NavItem {
  icon: string
  label: string
  path: string
  hoverColor: string
}

interface SocialLink {
  icon: string
  label: string
  href: string
  hoverColor: string
}

const navItems: NavItem[] = [
  { icon: 'folder_special', label: '프로젝트', path: '/projects', hoverColor: 'text-primary' },
  { icon: 'layers', label: '기술 스택', path: '/skills', hoverColor: 'text-secondary' },
  { icon: 'timeline', label: '경력', path: '/career', hoverColor: 'text-accent' },
  { icon: 'mail', label: '연락처', path: '/contact', hoverColor: 'text-white dark:text-white' },
]

const socialLinks: SocialLink[] = [
  { icon: 'code', label: 'GitHub', href: '#', hoverColor: 'text-white' },
  { icon: 'work', label: 'LinkedIn', href: '#', hoverColor: 'text-primary' },
  { icon: 'alternate_email', label: 'Email', href: '#', hoverColor: 'text-accent' },
]

const hoverColorMap: Record<string, string> = {
  'text-primary': '#2525f4',
  'text-secondary': '#41b883',
  'text-accent': '#61dafb',
  'text-white': '#fff',
  'text-white dark:text-white': '#fff',
}

function SidebarNavItem({ icon, label, path, hoverColor }: NavItem) {
  const [hovered, setHovered] = useState(false)
  const location = useLocation()
  const active = location.pathname === path

  return (
    <Link
      to={path}
      className="relative flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={`material-symbols-outlined text-[20px] transition-colors duration-200 ${
          active ? hoverColor : 'text-slate-400'
        }`}
        style={hovered && !active ? { color: hoverColorMap[hoverColor] } : undefined}
      >
        {icon}
      </span>

      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: -4, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -4, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute left-full ml-3 px-2.5 py-1 rounded-md bg-slate-200/80 dark:bg-white/10 backdrop-blur-sm border border-slate-300 dark:border-white/10 text-[11px] font-bold whitespace-nowrap text-slate-800 dark:text-white"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>

      {active && (
        <span className="absolute -left-3 size-1.5 rounded-full bg-current" />
      )}
    </Link>
  )
}

function SidebarSocialItem({ icon, label, href, hoverColor }: SocialLink) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      aria-label={label}
      className="relative flex items-center justify-center text-slate-400 transition-colors duration-200"
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={hovered ? { color: hoverColorMap[hoverColor] } : undefined}
    >
      <span className="material-symbols-outlined text-[20px]">{icon}</span>

      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: -4, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -4, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute left-full ml-3 px-2.5 py-1 rounded-md bg-slate-200/80 dark:bg-white/10 backdrop-blur-sm border border-slate-300 dark:border-white/10 text-[11px] font-bold whitespace-nowrap text-slate-800 dark:text-white"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </a>
  )
}

export default function SocialSidebar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  function isActive(path: string) {
    return location.pathname === path
  }

  return (
    <>
      {/* Logo - Fixed Top Left */}
      <Link to="/" className="fixed top-6 left-6 z-30 hover:scale-105 transition-transform">
        <img src={logoPng} alt="Home" className="w-1/2" />
      </Link>

      {/* Desktop Left Sidebar - Nav + Social + Theme */}
      <div className="hidden xl:flex fixed left-8 top-0 bottom-0 flex-col items-center z-20 justify-end">
        {/* Navigation Links */}
        <div className="flex flex-col gap-5 items-center mb-6">
          {navItems.map((item) => (
            <SidebarNavItem key={item.label} {...item} />
          ))}
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-slate-300 dark:bg-white/20 mb-6" />

        {/* Social Links */}
        <div className="flex flex-col gap-5 items-center">
          {socialLinks.map((item) => (
            <SidebarSocialItem key={item.label} {...item} />
          ))}
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-slate-300 dark:bg-white/20 my-4" />

        {/* Theme Settings */}
        <div className="mb-4">
          <ThemeSettings />
        </div>

        {/* Bottom Line */}
        <div className="w-px h-16 bg-slate-300 dark:bg-white/20" />
      </div>

      {/* Desktop Right Scroll Indicator */}
      <div className="hidden xl:flex fixed right-8 bottom-12 flex-col gap-2 items-center z-20 animate-bounce">
        <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest rotate-90 origin-right translate-x-3 mb-8">
          Scroll
        </span>
        <span className="material-symbols-outlined text-slate-400 dark:text-slate-500">arrow_downward</span>
      </div>

      {/* Mobile/Tablet Floating Menu Button */}
      <button
        className="xl:hidden fixed bottom-6 right-6 z-50 size-14 rounded-full bg-primary text-white shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span className="material-symbols-outlined text-[24px]">
          {mobileMenuOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Mobile/Tablet Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="xl:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="xl:hidden fixed bottom-24 right-6 z-50 w-64 bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Logo */}
              <div className="px-5 pt-5 pb-3 border-b border-slate-100 dark:border-white/5">
                <Link
                  to="/"
                  className="flex items-center gap-2.5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <img src={logoPng} alt="Home" className="size-5 rounded-md" />
                  <div className="flex flex-col">
                    <span className="text-slate-900 dark:text-white font-bold text-base leading-none tracking-tight">DevPortfolio</span>
                    <span className="text-[10px] text-slate-400 font-medium">Frontend Engineer</span>
                  </div>
                </Link>
              </div>

              {/* Nav Links */}
              <nav className="p-3">
                {navItems.map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive(link.path)
                        ? 'text-primary bg-primary/10 dark:bg-white/10 dark:text-white'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="material-symbols-outlined text-[18px]">{link.icon}</span>
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Social + Theme */}
              <div className="px-5 py-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      className="text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
                    >
                      <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                    </a>
                  ))}
                </div>
                <ThemeSettings />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
