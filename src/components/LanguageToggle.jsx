import { useLang } from '../i18n/LanguageContext.jsx'

export default function LanguageToggle() {
  const { lang, setLang } = useLang()
  const base = 'min-w-[44px] rounded-full px-3 py-1.5 text-xs font-bold transition'
  return (
    <div className="inline-flex items-center rounded-full border border-gold/60 p-0.5" role="group" aria-label="Language">
      <button onClick={() => setLang('en')} aria-pressed={lang === 'en'}
        className={`${base} ${lang === 'en' ? 'bg-gold text-navy' : 'text-ivory/80 hover:text-gold'}`}>EN</button>
      <button onClick={() => setLang('te')} aria-pressed={lang === 'te'}
        className={`${base} ${lang === 'te' ? 'bg-gold text-navy' : 'text-ivory/80 hover:text-gold'}`}>తెలుగు</button>
    </div>
  )
}
