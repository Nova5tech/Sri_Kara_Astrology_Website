import { Star, Compass, Heart, CalendarDays, Briefcase, Hash, Home, Flower2, ArrowRight } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'

const icons = { Star, Compass, Heart, CalendarDays, Briefcase, Hash, Home, Flower2 }

export default function ServiceCard({ service, onOpen }) {
  const { t } = useLang()
  const Icon = icons[service.icon] || Star
  return (
    <div className="card flex h-full flex-col p-7">
      <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold"><Icon size={26} /></span>
      <h3 className="text-2xl font-bold">{t(service.title)}</h3>
      <p className="mt-2 flex-1 text-sm text-charcoal/75">{t(service.short)}</p>
      <button onClick={() => onOpen(service)} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-maroon hover:text-gold-dark">
        {t('Learn More')} <ArrowRight size={16} />
      </button>
    </div>
  )
}
export { icons as serviceIcons }