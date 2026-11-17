import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { translations } from './translations.js'

const LanguageContext = createContext({ lang: 'en', setLang: () => {}, t: (s) => s })

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('lang') || 'en' } catch { return 'en' }
  })

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem('lang', lang) } catch { /* ignore */ }
  }, [lang])

  // Returns the Telugu text when available, otherwise the English original
  const t = useCallback((text) => (lang === 'te' && translations.te[text]) || text, [lang])

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
}

export const useLang = () => useContext(LanguageContext)
