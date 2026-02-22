import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Projects from './pages/Projects'
import TechStack from './pages/TechStack'
import Career from './pages/Career'
import Contact from './pages/Contact'
import Certifications from './pages/Certifications'
import SocialSidebar from './components/SocialSidebar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col relative overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Background Glow Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-primary/10 dark:bg-primary/20 blur-[120px] dark:mix-blend-screen opacity-40 animate-pulse" />
        <div className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-secondary/5 dark:bg-secondary/10 blur-[100px] dark:mix-blend-screen opacity-30" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-75 bg-linear-to-t from-background-light dark:from-background-dark to-transparent z-10" />
      </div>

      {/* Grain Overlay */}
      <div className="grain-overlay dark:opacity-[0.03] opacity-[0.015]" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<TechStack />} />
          <Route path="/career" element={<Career />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <SocialSidebar />
        <Footer />
      </div>
    </div>
  )
}

export default App
