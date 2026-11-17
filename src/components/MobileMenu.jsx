import { NavLink, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { navLinks, site } from '../data/site.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function MobileMenu({ open, onClose }) {
  const { t } = useLang()
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div className="fixed inset-0 z-[60] bg-navy-deep/70" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
          <motion.aside className="fixed right-0 top-0 z-[61] flex h-full w-[82%] max-w-sm flex-col bg-navy p-6"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.3 }} aria-label="Mobile menu">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-serif text-lg font-bold text-gold">{site.short}</span>
              <button onClick={onClose} aria-label="Close menu" className="rounded-lg p-3 text-ivory"><X /></button>
            </div>
            <nav className="flex flex-1 flex-col overflow-y-auto">
              {navLinks.map((l) =>
                l.external ? (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer" onClick={onClose}
                    className="border-b border-white/10 py-4 text-base font-semibold text-ivory">
                    {t(l.label)}
                  </a>
                ) : (
                  <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={onClose}
                    className={({ isActive }) => `border-b border-white/10 py-4 text-base font-semibold ${isActive ? 'text-gold' : 'text-ivory'}`}>
                    {t(l.label)}
                  </NavLink>
                )
              )}
            </nav>
            <Link to="/contact" onClick={onClose} className="btn-gold mt-6">{t('Book Appointment')}</Link>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}