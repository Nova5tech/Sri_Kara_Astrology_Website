import { Compass, Heart, Star, ShieldCheck, Award } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Placeholder from '../components/Placeholder.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { astrologer } from '../data/astrologer.js'

const values = [
  { icon: Compass, title: 'Guidance', text: 'Clear, thoughtful and respectful consultations.' },
  { icon: Heart, title: 'Compassion', text: 'Every person is heard with patience and care.' },
  { icon: Star, title: 'Tradition', text: 'Rooted in classical Indian astrology and culture.' },
  { icon: ShieldCheck, title: 'Integrity', text: 'Honest, responsible and confidential.' },
]

export default function About() {
  const { t } = useLang()
  const roles = astrologer.roles.map((r) => t(r)).join(' · ')
  return (
    <>
      <Seo title="About Us" description="About G.M.S. Pattabi Sastri and Sri Kara Maha Shakti Pettam Astro." />
      <PageBanner title="About Us" />

      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold text-gold-dark">{t(astrologer.mantra)}</p>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">{t('Who We Are')}</p>
            <h2 className="text-3xl font-bold sm:text-4xl">{t(astrologer.name)}</h2>
            <div className="mt-4 h-px w-20 bg-gold" />
            <p className="mt-4 font-serif text-2xl font-bold text-maroon">{roles}</p>
            <div className="mt-6 space-y-4 text-charcoal/80">
              <p>{t('Sri Kara Maha Shakti Pettam Astro is led by G.M.S. Pattabi Sastri, a Panchangakarta and Purohit from Amalapuram, Andhra Pradesh.')}</p>
              <p>{t('A Panchangakarta prepares the Panchangam, the traditional Hindu almanac that gives the tithi, nakshatra and auspicious timings used for festivals and ceremonies.')}</p>
              <p>{t('A Purohit is a priest who conducts poojas, rituals and ceremonies.')}</p>
            </div>
          </div>
          <div>
            <Placeholder label="Sample profile photo" className="h-80 rounded-2xl sm:h-[28rem]" />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionTitle eyebrow={t('Titles')} title={t('Titles & Honours')} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {astrologer.titles.map((title) => (
              <div key={title} className="card p-7 text-center">
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold"><Award /></span>
                <h3 className="text-xl font-bold">{t(title)}</h3>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-maroon p-6 text-center">
            <p className="font-serif text-xl font-bold text-ivory">{t(astrologer.position)}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionTitle eyebrow={t('Vision & Values')} title={t('What Guides Us')} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card p-7 text-center">
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold"><Icon /></span>
                <h3 className="text-xl font-bold">{t(title)}</h3>
                <p className="mt-2 text-sm text-charcoal/75">{t(text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}