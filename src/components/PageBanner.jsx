import { Link } from 'react-router-dom'
import Mandala from './Mandala.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function PageBanner({ title, subtitle }) {
  const { t } = useLang()
  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-24">
      <Mandala className="absolute -right-20 -top-20 h-80 w-80 sm:h-[28rem] sm:w-[28rem]" />
      <div className="container-x relative">
        <p className="mb-3 text-xs text-ivory/60">
          <Link to="/" className="hover:text-gold">{t('Home')}</Link> / <span className="text-gold">{t(title)}</span>
        </p>
        <h1 className="text-4xl font-bold !text-ivory sm:text-5xl">{t(title)}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-ivory/75">{t(subtitle)}</p>}
      </div>
    </section>
  )
}