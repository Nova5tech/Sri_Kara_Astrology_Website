import { useEffect } from 'react'
import { site } from '../data/site.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function Seo({ title, description }) {
  const { t } = useLang()
  useEffect(() => {
    document.title = title ? `${t(title)} | ${t(site.name)}` : t(site.name)
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta) }
    if (description) meta.content = description
  }, [title, description, t])
  return null
}