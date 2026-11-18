import { useEffect, useState } from 'react'
import {
  Download,
  Eye,
  X,
  CalendarDays,
  Calendar,
  Sparkles,
  Star,
  Clock,
  BookOpen,
} from 'lucide-react'

import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { panchangamSections } from '../data/panchangam.js'

const icons = {
  calendar: Calendar,
  'calendar-days': CalendarDays,
  sparkles: Sparkles,
  star: Star,
  clock: Clock,
}

export default function Panchangam() {
  const { t } = useLang()
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!active) return

    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
    }

    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  const openPdf = (file, title) => {
    setActive({ file, title })
  }

  return (
    <>
      <Seo
        title="Nitya Panchangam"
        description="Daily Panchangam, monthly calendars, festivals, Rashi Phalalu and Muhurtams for 2026-27."
      />

      <PageBanner
        title="Nitya Panchangam"
        subtitle="Explore daily Panchangam, monthly calendars, festivals and auspicious timings."
      />

      <section className="section">
        <div className="container-x">

                    {/* Introduction */}
                    <div className="mb-12 text-center">
            <span className="demo-tag mb-4 inline-block">
              {t('2026 - 2027')}
            </span>

            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              {t('Panchangam Publications')}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-charcoal/70">
              {t('Access the latest Panchangam publications. View or download daily calendars, monthly Panchangam, festivals, horoscope predictions and auspicious timings.')}
            </p>
          </div>

        


          {/* Separate Panchangam sections */}
          <div className="space-y-12">

            {panchangamSections.map((section) => {
              const Icon = icons[section.icon] || BookOpen

              return (
                <div key={section.id} className="card overflow-hidden">

                  {/* Section Header */}
                  <div className="flex flex-wrap items-center gap-4 border-b border-navy/10 bg-navy p-6 sm:p-8">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy">
                      <Icon size={28} />
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-ivory">
                        {t(section.title)}
                      </h2>

                      <p className="mt-1 text-sm text-ivory/70">
                        {t(section.description)}
                      </p>
                    </div>

                  </div>

                  {/* PDF Cards */}
                  <div className="grid gap-5 p-6 sm:grid-cols-2 lg:grid-cols-3 sm:p-8">

                    {section.files.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-xl border border-navy/10 bg-ivory p-5 transition hover:-translate-y-1 hover:border-gold hover:shadow-lg"
                      >

                        <div className="mb-4 flex items-center gap-3">

                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold">
                            <BookOpen size={24} />
                          </div>

                          <div>
                            <h3 className="font-bold text-navy">
                              {t(item.title)}
                            </h3>

                            <p className="text-xs text-charcoal/60">
                               {t('PDF Document')}
                            </p>
                          </div>

                        </div>

                        <div className="flex flex-wrap gap-3">

                          <button
                            onClick={() =>
                              openPdf(item.file, item.title)
                            }
                            className="btn-navy !min-h-[40px] !px-4 !text-sm"
                          >
                            <Eye size={16} />
                            {t('View PDF')}
                          </button>

                          <a
                            href={item.file}
                            download
                            className="btn-outline !min-h-[40px] !px-4 !text-sm"
                          >
                            <Download size={16} />
                            {t('Download')}
                          </a>

                        </div>

                      </div>
                    ))}

                  </div>

                </div>
              )
            })}

          </div>

        </div>
      </section>

      {/* PDF Viewer Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-deep/95 p-3 sm:p-6"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >

          <div
            className="flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-ivory"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Modal Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-navy px-5 py-4">

              <h3 className="font-serif text-xl font-bold text-ivory">
                {t(active.title)}
              </h3>

              <div className="flex items-center gap-3">

                <a
                  href={active.file}
                  download
                  className="btn-gold !min-h-[40px] !px-4 !text-sm"
                >
                  <Download size={16} />
                  {t('Download PDF')}
                </a>

                <button
                  onClick={() => setActive(null)}
                  className="rounded-full p-2 text-ivory hover:bg-white/10"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>

              </div>
            </div>

            {/* PDF Display */}
            <iframe
              title={active.title}
              src={`${active.file}#toolbar=1&view=FitH`}
              className="w-full flex-1 bg-white"
            />

          </div>

        </div>
      )}

    </>
  )
}
