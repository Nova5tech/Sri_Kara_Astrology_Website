import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function NotFound() {
  const { t } = useLang()
  return (
    <section className="section container-x text-center">
      <Seo title="Page not found" />
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-3">{t('This page could not be found.')}</p>
      <Link to="/" className="btn-navy mt-8">{t('Back to Home')}</Link>
    </section>
  )
}
