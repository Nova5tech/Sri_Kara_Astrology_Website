import { motion } from 'framer-motion'
import Placeholder from './Placeholder.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function GalleryGrid({ items, onOpen }) {
  const { t } = useLang()
  if (!items.length) return <p className="py-10 text-center text-charcoal/70">{t('No images in this category.')}</p>
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {items.map((g, i) => (
        <motion.button key={g.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
          onClick={() => onOpen(i)} className="group overflow-hidden rounded-xl" aria-label={`${t('Demo photo')} ${g.id}`}>
          <Placeholder tone={g.tone} label={`${t('Demo photo')} ${g.id}`} className="aspect-square transition duration-500 group-hover:scale-105" />
        </motion.button>
      ))}
    </div>
  )
}