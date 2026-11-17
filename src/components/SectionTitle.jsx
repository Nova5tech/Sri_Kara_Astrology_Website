import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, subtitle, light = false, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      className={`mb-12 ${align === 'center' ? 'mx-auto text-center' : ''} max-w-2xl`}
    >
      {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">{eyebrow}</p>}
      <h2 className={`text-3xl font-bold sm:text-4xl ${light ? '!text-ivory' : ''}`}>{title}</h2>
      <div className={`mt-4 h-px w-20 bg-gold ${align === 'center' ? 'mx-auto' : ''}`} />
      {subtitle && <p className={`mt-4 ${light ? 'text-ivory/80' : 'text-charcoal/75'}`}>{subtitle}</p>}
    </motion.div>
  )
}
