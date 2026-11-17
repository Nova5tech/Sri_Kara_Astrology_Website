import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import GalleryGrid from '../components/GalleryGrid.jsx'
import Placeholder from '../components/Placeholder.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { gallery, galleryCategories } from '../data/gallery.js'

export default function Gallery() {
  const { t } = useLang()
  const [cat, setCat] = useState('All')
  const [index, setIndex] = useState(null)
  const items = gallery.filter((g) => cat === 'All' || g.category === cat)
  const close = useCallback(() => setIndex(null), [])
  const step = useCallback((d) => setIndex((i) => (i + d + items.length) % items.length), [items.length])

  useEffect(() => {
    if (index === null) return
    const onKey = (e) => { if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1) }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [index, close, step])

  const current = index !== null ? items[index] : null
  return (
    <>
      <Seo title="Gallery" description="Photo gallery (demonstration images)." />
      <PageBanner title="Gallery" subtitle="Demonstration images - real photographs will be added after approval." />
      <section className="section">
        <div className="container-x">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {galleryCategories.map((c) => (
              <button key={c} onClick={() => { setCat(c); setIndex(null) }}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${cat === c ? 'border-navy bg-navy text-ivory' : 'border-navy/20 hover:border-gold'}`}>{t(c)}</button>
            ))}
          </div>
          <GalleryGrid items={items} onOpen={setIndex} />
        </div>
      </section>
      {current && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-deep/95 p-4" onClick={close} role="dialog" aria-modal="true">
          <button className="absolute right-4 top-4 rounded-full p-3 text-ivory hover:bg-white/10" onClick={close} aria-label="Close"><X /></button>
          <button className="absolute left-2 rounded-full p-3 text-ivory hover:bg-white/10 sm:left-6" onClick={(e) => { e.stopPropagation(); step(-1) }} aria-label="Previous"><ChevronLeft size={32} /></button>
          <div className="w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <Placeholder key={current.id} tone={current.tone} label={`${t('Demo photo')} ${current.id}`} className="aspect-[4/3] rounded-xl" />
            <p className="mt-3 text-center text-sm text-ivory/80">{t('Demo photo')} {current.id} · {t(current.category)} · {index + 1}/{items.length}</p>
          </div>
          <button className="absolute right-2 rounded-full p-3 text-ivory hover:bg-white/10 sm:right-6" onClick={(e) => { e.stopPropagation(); step(1) }} aria-label="Next"><ChevronRight size={32} /></button>
        </div>
      )}
    </>
  )
}