import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="py-6 text-center">
      <p className="text-slate-400 dark:text-slate-500 text-xs">{t('footer.copyright')}</p>
    </footer>
  )
}
