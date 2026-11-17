import { useState, useEffect } from 'react'
import { X, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import ServiceCard, { serviceIcons } from '../components/ServiceCard.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { services } from '../data/services.js'

export default function Services() {
  const [active, setActive] = useState(null)
  const { t } = useLang()
  useEffect(() => {
    if (!active) return
    const onKey = (e) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])
  const Icon = active ? serviceIcons[active.icon] : null
  return (
    <>
      <Seo title="Our Services" description="Astrology, Vastu and spiritual guidance services." />
      <PageBanner title="Our Services" subtitle="Astrology, Vastu and spiritual guidance services." />
      <section className="section">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => <ServiceCard key={s.id} service={s} onOpen={setActive} />)}
        </div>
      </section>
      {active && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-deep/80 p-4" onClick={() => setActive(null)} role="dialog" aria-modal="true">
          <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-ivory p-8" onClick={(e) => e.stopPropagation()}>
            <button className="absolute right-4 top-4 rounded-full p-2 hover:bg-navy/10" onClick={() => setActive(null)} aria-label="Close"><X /></button>
            <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold"><Icon size={26} /></span>
            <h3 className="text-3xl font-bold">{t(active.title)}</h3>
            <p className="mt-4 text-charcoal/80">{t(active.long)}</p>
            <ul className="mt-4 space-y-2">
              {active.points.map((p) => <li key={p} className="flex items-center gap-2 text-sm"><Check size={16} className="shrink-0 text-gold-dark" />{t(p)}</li>)}
            </ul>
            <p className="mt-5 text-xs text-charcoal/60">{t('Astrology offers guidance for reflection and is not a substitute for professional medical, legal or financial advice.')}</p>
            <Link to="/contact" className="btn-gold mt-6">{t('Enquire Now')}</Link>
          </div>
        </div>
      )}
      <CtaBand />
    </>
  )
}