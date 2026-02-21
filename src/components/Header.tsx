import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeSettings from './ThemeSettings'

interface NavLink {
  label: string
  path: string
  icon: string
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks: NavLink[] = [
    { label: '프로젝트', path: '/projects', icon: 'folder_special' },
    { label: '기술 스택', path: '/skills', icon: 'layers' },
    { label: '경력', path: '/career', icon: 'timeline' },
    { label: '연락처', path: '/contact', icon: 'mail' },
  ]

  function isActive(path: string): boolean {
    return location.pathname === path
  }

  return (
    <header className="w-full border-b border-white/5 bg-background-dark/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer">
          <div className="size-9 sm:size-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
            <span className="material-symbols-outlined text-[20px] sm:text-[24px]">terminal</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-base sm:text-lg leading-none tracking-tight">DevPortfolio</span>
            <span className="text-[10px] sm:text-xs text-slate-400 font-medium">Frontend Engineer</span>
          </div>
        </Link>

        {/* Theme Settings + Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeSettings />

          {/* Menu Button - visible below xl (tablet + mobile) */}
          <button
            className="xl:hidden flex items-center justify-center size-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="material-symbols-outlined text-[20px]">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu - visible below xl */}
      {menuOpen && (
        <div className="xl:hidden border-t border-white/5 bg-background-dark/95 backdrop-blur-md px-4 sm:px-6 py-3">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-white bg-white/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <span className="material-symbols-outlined text-[18px]">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
