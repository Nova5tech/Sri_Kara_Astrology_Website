import { useEffect, useMemo, useState } from 'react'
import { Download, Eye, X, CalendarDays, ExternalLink } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import Placeholder from '../components/Placeholder.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { panchangam, panchangamYears, panchangamMonths } from '../data/panchangam.js'

export default function Panchangam() {
  const { t } = useLang()
  const [year, setYear] = useState('All')
  const [month, setMonth] = useState('All')
  const [active, setActive] = useState(null)

  const list = useMemo(
    () => panchangam.filter((p) => (year === 'All' || p.year === year) && (month === 'All' || p.month === month)),
    [year, month]
  )
  // When one month is chosen, show that Panchangam open on the page
  const focus = month !== 'All' && list.length === 1 ? list[0] : null
  const latest = panchangam[0]
  const title = (p) => (p.title ? t(p.title) : `${t('Nitya Panchangam')} - ${t(p.month)} ${p.year}`)
  const viewSrc = (p) => `${p.file}#view=FitH`
  const sel = 'rounded-lg border border-navy/15 bg-white px-4 py-3 text-sm outline-none focus:border-gold'

  useEffect(() => {
    if (!active) return
    const onKey = (e) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [active])

  const Actions = ({ p, small }) => (
    <div className="flex flex-wrap gap-3">
      <a href={p.file} target="_blank" rel="noreferrer" className={`btn-outline ${small ? '!min-h-[40px] !px-4' : ''}`}><ExternalLink size={16} /> {t('Open in new tab')}</a>
      <a href={p.file} download className={`btn-gold ${small ? '!min-h-[40px] !px-4' : ''}`}><Download size={16} /> {t('Download PDF')}</a>
    </div>
  )

  return (
    <>
      <Seo title="Nitya Panchangam" description="Panchangam publications for download." />
      <PageBanner title="Nitya Panchangam" subtitle="Panchangam publications for download." />
      <section className="section">
        <div className="container-x">
          {!focus && (
            <div className="card mb-12 grid overflow-hidden md:grid-cols-2">
              <Placeholder label="Latest - demo preview" className="h-56 md:h-full" />
              <div className="p-8">
                <span className="demo-tag mb-3">{`${t('Latest')} · ${t('Reference copy')}`}</span>
                <h2 className="text-3xl font-bold">{title(latest)}</h2>
                <p className="mt-3 text-sm text-charcoal/75">{t(latest.note)}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button onClick={() => setActive(latest)} className="btn-navy"><Eye size={16} /> {t('View Panchangam')}</button>
                  <a href={latest.file} download className="btn-outline !text-maroon !border-maroon hover:!bg-maroon hover:!text-ivory"><Download size={16} /> {t('Download PDF')}</a>
                </div>
              </div>
            </div>
          )}

          <div className="mb-8 flex flex-wrap items-center gap-3">
            <CalendarDays className="text-gold-dark" />
            <select aria-label="Year" value={year} onChange={(e) => setYear(e.target.value)} className={sel}>
              {panchangamYears.map((y) => <option key={y} value={y}>{t(y)}</option>)}
            </select>
            <select aria-label="Month" value={month} onChange={(e) => setMonth(e.target.value)} className={sel}>
              {panchangamMonths.map((m) => <option key={m} value={m}>{t(m)}</option>)}
            </select>
            <span className="text-sm text-charcoal/60">{list.length} {t('entries')}</span>
          </div>

          {focus ? (
            <div className="card overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 bg-navy p-4">
                <h2 className="font-serif text-2xl font-bold !text-ivory">{title(focus)}</h2>
                <Actions p={focus} small />
              </div>
              <iframe title={title(focus)} src={viewSrc(focus)} className="h-[75vh] w-full bg-white" />
            </div>
          ) : list.length === 0 ? (
            <p className="rounded-xl bg-white p-10 text-center text-charcoal/70">{t('No demonstration entries match this filter.')}</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((p, i) => (
                <div key={p.id} className="card overflow-hidden">
                  <Placeholder tone={i} label="Demo thumbnail" className="h-40" />
                  <div className="p-6">
                    <span className="demo-tag mb-2">{t('Reference copy')}</span>
                    <h3 className="text-xl font-bold">{title(p)}</h3>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <button onClick={() => setActive(p)} className="inline-flex items-center gap-1 text-sm font-bold text-maroon"><Eye size={16} /> {t('View Panchangam')}</button>
                      <a href={p.file} download className="inline-flex items-center gap-1 text-sm font-bold text-navy"><Download size={16} /> {t('Download PDF')}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {active && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-deep/90 p-3 sm:p-6" onClick={() => setActive(null)} role="dialog" aria-modal="true">
          <div className="flex h-[88vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-ivory" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-wrap items-center justify-between gap-3 bg-navy px-5 py-3">
              <h3 className="font-serif text-xl font-bold !text-ivory">{title(active)}</h3>
              <div className="flex items-center gap-3">
                <Actions p={active} small />
                <button className="rounded-full p-2 text-ivory hover:bg-white/10" onClick={() => setActive(null)} aria-label="Close"><X /></button>
              </div>
            </div>
            <iframe title={title(active)} src={viewSrc(active)} className="w-full flex-1 bg-white" />
          </div>
        </div>
      )}
    </>
  )
}