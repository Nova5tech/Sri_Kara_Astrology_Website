import Mandala from './Mandala.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'

const tones = ['from-navy to-navy-light', 'from-maroon to-navy', 'from-navy-deep to-maroon']

export default function Placeholder({ tone = 0, label = 'Demo image', className = '' }) {
  const { t } = useLang()
  return (
    <div className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${tones[tone % 3]} ${className}`}>
      <Mandala className="absolute h-[140%] w-auto" opacity={0.25} />
      <span className="relative z-10 rounded-full bg-navy/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-light">{t(label)}</span>
    </div>
  )
}