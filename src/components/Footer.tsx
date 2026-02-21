export default function Footer() {
  return (
    <footer className="xl:hidden py-8 border-t border-slate-200 dark:border-white/5 bg-white/50 dark:bg-background-dark text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a className="text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors" href="#">
          <span className="material-symbols-outlined">code</span>
        </a>
        <a className="text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors" href="#">
          <span className="material-symbols-outlined">work</span>
        </a>
        <a className="text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors" href="#">
          <span className="material-symbols-outlined">alternate_email</span>
        </a>
      </div>
      <p className="text-slate-400 dark:text-slate-600 text-xs">&copy; 2024 Frontend Developer Portfolio</p>
    </footer>
  )
}
