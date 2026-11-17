import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { navLinks, site } from '../data/site.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="bg-navy-deep text-ivory/80">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="!text-gold text-2xl font-bold">{t(site.name)}</h3>
          <p className="mt-3 text-sm">{t('Astrology and spiritual guidance rooted in Indian tradition. (Placeholder footer text.)')}</p>
        </div>
        <div>
          <h4 className="mb-4 !text-ivory text-lg font-bold">{t('Quick Links')}</h4>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.label}>
                {l.external ? (
                  <a href={l.href} target="_blank" rel="noreferrer" className="hover:text-gold">{t(l.label)}</a>
                ) : (
                  <Link to={l.to} className="hover:text-gold">{t(l.label)}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 !text-ivory text-lg font-bold">{t('Contact')}</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>
                {site.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="block hover:text-gold">{p}</a>
                ))}
                <a href={`tel:${site.landline.replace(/-/g, '')}`} className="block hover:text-gold">{site.landline}</a>
              </span>
            </li>
            <li className="flex gap-3"><Mail size={16} className="mt-0.5 shrink-0 text-gold" /><a href={`mailto:${site.email}`} className="break-all hover:text-gold">{site.email}</a></li>
            <li className="flex gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-gold" />{t(site.address)}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-ivory/60">
        © {new Date().getFullYear()} {t(site.name)}. {t('Prototype with demonstration content.')}
      </div>
    </footer>
  )
}