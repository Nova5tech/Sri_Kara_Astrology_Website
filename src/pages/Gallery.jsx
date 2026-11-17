import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import GalleryGrid from '../components/GalleryGrid.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { gallery, galleryCategories } from '../data/gallery.js'

export default function Gallery() {
  const { t } = useLang()

  const [cat, setCat] = useState('All')
  const [index, setIndex] = useState(null)

  const items = gallery.filter(
    (g) => cat === 'All' || g.category === cat
  )

  const close = useCallback(() => {
    setIndex(null)
  }, [])

  const step = useCallback(
    (d) => {
      setIndex((i) => {
        if (i === null || items.length === 0) return null
        return (i + d + items.length) % items.length
      })
    },
    [items.length]
  )

  useEffect(() => {
    if (index === null) return

    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }

    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, close, step])

  const current = index !== null ? items[index] : null

  return (
    <>
      <Seo
        title="Gallery"
        description="Explore photographs of spiritual events, astrology traditions and cultural celebrations."
      />

      <PageBanner
        title="Gallery"
        subtitle="A collection of spiritual events, astrology traditions and memorable moments."
      />

      <section className="section">
        <div className="container-x">

          {/* Gallery Category Filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {galleryCategories.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCat(c)
                  setIndex(null)
                }}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                  cat === c
                    ? 'border-navy bg-navy text-ivory'
                    : 'border-navy/20 hover:border-gold'
                }`}
              >
                {t(c)}
              </button>
            ))}
          </div>

          {/* Gallery Images */}
          <GalleryGrid
            items={items}
            onOpen={setIndex}
          />

        </div>
      </section>

      {/* Image Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-deep/95 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >

          {/* Close Button */}
          <button
            className="absolute right-4 top-4 rounded-full p-3 text-ivory hover:bg-white/10"
            onClick={close}
            aria-label="Close"
          >
            <X />
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-2 rounded-full p-3 text-ivory hover:bg-white/10 sm:left-6"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Selected Image */}
          <div
            className="w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={current.id}
              src={current.src}
              alt={current.title}
              className="max-h-[75vh] w-full rounded-xl object-contain"
            />

            <p className="mt-3 text-center text-sm text-ivory/80">
              {t(current.title)} · {t(current.category)} · {index + 1}/{items.length}
            </p>
          </div>

          {/* Next Button */}
          <button
            className="absolute right-2 rounded-full p-3 text-ivory hover:bg-white/10 sm:right-6"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

        </div>
      )}
    </>
  )
}
