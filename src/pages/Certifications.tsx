import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'

import wsExpert2Img from '../assets/my/웹스퀘어고급.png'
import wsExpert1Img from '../assets/my/웹스퀘어공통.png'
import wsEngineerImg from '../assets/my/웹스퀘어기본.png'
import wsPublisherImg from '../assets/my/웹스퀘어퍼블리셔.png'
import ncsImg from '../assets/my/NCS이수증.png'
import completionImg from '../assets/my/수료증.png'
import awardImg from '../assets/my/표창장.png'

interface Certification {
  titleKey: string
  issuerKey: string
  date: string
  icon: string
  color: string
  badgeKey?: string
  badgeColor?: string
  image: string
}

const certifications: Certification[] = [
  {
    titleKey: 'certs.items.wsExpert2.title',
    issuerKey: 'certs.items.wsExpert2.issuer',
    date: '2025.02.19',
    icon: 'verified',
    color: 'text-amber-500',
    badgeKey: 'certs.levels.expert',
    badgeColor: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    image: wsExpert2Img,
  },
  {
    titleKey: 'certs.items.wsExpert1.title',
    issuerKey: 'certs.items.wsExpert1.issuer',
    date: '2025.02.18',
    icon: 'verified',
    color: 'text-amber-500',
    badgeKey: 'certs.levels.expert',
    badgeColor: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    image: wsExpert1Img,
  },
  {
    titleKey: 'certs.items.wsEngineer.title',
    issuerKey: 'certs.items.wsEngineer.issuer',
    date: '2025.01.23',
    icon: 'engineering',
    color: 'text-blue-500',
    badgeKey: 'certs.levels.engineer',
    badgeColor: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    image: wsEngineerImg,
  },
  {
    titleKey: 'certs.items.wsPublisher.title',
    issuerKey: 'certs.items.wsPublisher.issuer',
    date: '2025.01.22',
    icon: 'web',
    color: 'text-green-500',
    badgeKey: 'certs.levels.publisher',
    badgeColor: 'bg-green-500/10 text-green-500 border-green-500/20',
    image: wsPublisherImg,
  },
  {
    titleKey: 'certs.items.ncs.title',
    issuerKey: 'certs.items.ncs.issuer',
    date: '2023.10.27',
    icon: 'school',
    color: 'text-primary',
    image: ncsImg,
  },
  {
    titleKey: 'certs.items.completion.title',
    issuerKey: 'certs.items.completion.issuer',
    date: '2023.05 - 2023.10',
    icon: 'menu_book',
    color: 'text-secondary',
    image: completionImg,
  },
  {
    titleKey: 'certs.items.award.title',
    issuerKey: 'certs.items.award.issuer',
    date: '2023.10.27',
    icon: 'emoji_events',
    color: 'text-yellow-500',
    badgeKey: 'certs.levels.top',
    badgeColor: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
    image: awardImg,
  },
]

export default function Certifications() {
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <main className="grow flex flex-col items-center px-6 py-16 relative">
      <div className="max-w-7xl w-full flex flex-col gap-10">
        {/* Header */}
        <div
          className="flex flex-col gap-4 text-center md:text-left mb-4"
          style={{ animation: 'fadeIn 0.5s ease-out' }}
        >
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight flex items-center justify-center md:justify-start gap-4">
            <span className="material-symbols-outlined text-4xl md:text-6xl text-primary">
              workspace_premium
            </span>
            {t('certs.title')}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg font-light leading-relaxed mx-auto md:mx-0">
            {t('certs.subtitle')}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden hover:border-slate-300 dark:hover:border-white/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              style={{ animation: `fadeIn 0.5s ease-out ${i * 0.08}s both` }}
              onClick={() => setSelectedImage(cert.image)}
            >
              {/* Image Preview */}
              <div className="relative h-44 bg-slate-50 dark:bg-white/5 overflow-hidden">
                <img
                  src={cert.image}
                  alt={t(cert.titleKey)}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg">
                    zoom_in
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                {/* Icon + Badge */}
                <div className="flex items-start justify-between mb-3">
                  <div className={`size-10 rounded-lg bg-slate-50 dark:bg-white/5 flex items-center justify-center ${cert.color}`}>
                    <span className="material-symbols-outlined text-[22px]">{cert.icon}</span>
                  </div>
                  {cert.badgeKey && (
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${cert.badgeColor}`}>
                      {t(cert.badgeKey)}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                  {t(cert.titleKey)}
                </h3>

                {/* Issuer */}
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                  {t(cert.issuerKey)}
                </p>

                {/* Date */}
                <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
                  <span className="material-symbols-outlined text-[14px]">calendar_month</span>
                  {cert.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Certificate"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-6 right-6 size-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
