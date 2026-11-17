import { motion } from 'framer-motion'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function GalleryGrid({ items, onOpen }) {
  const { t } = useLang()

  if (!items.length) {
    return (
      <p className="py-10 text-center text-charcoal/70">
        {t('No images in this category.')}
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((g, i) => (
        <motion.button
          key={g.id}
          layout
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => onOpen(i)}
          className="group relative overflow-hidden rounded-xl bg-navy shadow-md"
          aria-label={t(g.title)}
        >
          <img
            src={g.src}
            alt={g.title}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Image title overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-4 pt-12 text-left">
            <p className="text-sm font-semibold text-ivory">
              {t(g.title)}
            </p>
            <p className="mt-1 text-xs text-gold">
              {t(g.category)}
            </p>
          </div>

        </motion.button>
      ))}
    </div>
  )
}
