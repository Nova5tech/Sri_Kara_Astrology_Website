import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Sparkles } from 'lucide-react'
import { navLinks, site } from '../data/site.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import MobileMenu from './MobileMenu.jsx'
import LanguageToggle from './LanguageToggle.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { t } = useLang()
  return (
    <header className="sticky top-0 z-50 border-b border-gold/30 bg-navy/95 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex shrink-0 items-center gap-3" aria-label={site.name}>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold text-gold"><Sparkles size={20} /></span>
          <span className="whitespace-nowrap leading-tight">
           <span className="block font-serif text-lg font-bold text-ivory">{t('Sri Kara Maha Shakti')}</span>
           <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-gold">{t('Pettam Astro')}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 whitespace-nowrap xl:flex" aria-label="Main">
          {navLinks.map((l) =>
            l.external ? (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                className="text-sm font-semibold text-ivory/85 transition hover:text-gold">
                {t(l.label)}
              </a>
            ) : (
              <NavLink key={l.to} to={l.to} end={l.to === '/'}
                className={({ isActive }) => `text-sm font-semibold transition hover:text-gold ${isActive ? 'text-gold' : 'text-ivory/85'}`}>
                {t(l.label)}
              </NavLink>
            )
          )}
          <LanguageToggle />
          <Link to="/contact" className="btn-gold !min-h-[42px] !px-5 whitespace-nowrap">{t('Book Appointment')}</Link>
        </nav>

        <div className="flex items-center gap-2 xl:hidden">
          <LanguageToggle />
          <button className="rounded-lg p-3 text-ivory" onClick={() => setOpen(true)} aria-label="Open menu"><Menu /></button>
        </div>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}