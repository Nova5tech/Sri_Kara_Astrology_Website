import { Link } from 'react-router-dom'
import Mandala from './Mandala.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function CtaBand({
  title = 'Book an Appointment Enquiry',
  text = 'Share your details and preferred date. (Demonstration form - no real enquiry is sent.)',
}) {
  const { t } = useLang()
  return (
    <section className="relative overflow-hidden bg-maroon py-16">
      <Mandala className="absolute -left-16 top-1/2 h-72 w-72 -translate-y-1/2" opacity={0.2} stroke="#D4B982" />
      <div className="container-x relative text-center">
        <h2 className="!text-ivory text-3xl font-bold sm:text-4xl">{t(title)}</h2>
        <p className="mx-auto mt-3 max-w-xl text-ivory/80">{t(text)}</p>
        <Link to="/contact" className="btn-gold mt-8">{t('Make an Enquiry')}</Link>
      </div>
    </section>
  )
}