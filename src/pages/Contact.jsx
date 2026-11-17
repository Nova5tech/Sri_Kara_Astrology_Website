import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2 } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { services } from '../data/services.js'
import { site } from '../data/site.js'

const empty = { name: '', phone: '', email: '', service: '', date: '', message: '' }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your full name.'
  if (!/^[+\d][\d\s-]{7,14}$/.test(v.phone.trim())) e.phone = 'Enter a valid phone number.'
  if (!/^\S+@\S+\.\S+$/.test(v.email.trim())) e.email = 'Enter a valid email address.'
  if (!v.service) e.service = 'Please select a service.'
  if (!v.date) e.date = 'Choose a preferred date.'
  if (v.message.trim().length < 10) e.message = 'Message should be at least 10 characters.'
  return e
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-semibold">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-maroon">{error}</span>}
    </label>
  )
}

export default function Contact() {
  const { t } = useLang()
  const [v, setV] = useState(empty)
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)
  const [status, setStatus] = useState('idle') // idle | sending | error
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    const err = validate(v)
    setErrors(err)
    if (Object.keys(err).length > 0) return
    setStatus('sending')
    setDone(false)
    try {
      const res = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: v.name,
          phone: v.phone,
          email: v.email,
          service: v.service,
          preferred_date: v.date,
          message: v.message,
        }),
      })
      if (res.ok) {
        setDone(true)
        setV(empty)
        setStatus('idle')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const err = (k) => (errors[k] ? t(errors[k]) : null)
  const info = [
    { icon: Phone, label: 'Phone', lines: [...site.phones, site.landline], tel: true },
    { icon: Mail, label: 'Email', lines: [site.email], mail: true },
    { icon: MapPin, label: 'Address', lines: [t(site.address)] },
  ]
  return (
    <>
      <Seo title="Contact Us" description="Contact and appointment enquiry." />
      <PageBanner title="Contact Us" subtitle="Reach us by phone or send an appointment enquiry." />
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            {info.map(({ icon: Icon, label, lines, tel, mail }) => (
              <div key={label} className="card flex gap-4 p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-gold"><Icon size={20} /></span>
                <div className="min-w-0">
                  <p className="font-serif text-lg font-bold">{t(label)}</p>
                  {lines.map((l) => (
                    tel
                      ? <a key={l} href={`tel:${l.replace(/[\s-]/g, '')}`} className="block text-sm text-charcoal/75 hover:text-maroon">{l}</a>
                      : mail
                        ? <a key={l} href={`mailto:${l}`} className="block break-all text-sm text-charcoal/75 hover:text-maroon">{l}</a>
                        : <p key={l} className="text-sm text-charcoal/75">{l}</p>
                  ))}
                </div>
              </div>
            ))}
            <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t(site.whatsappMessage))}`} target="_blank" rel="noreferrer" className="btn w-full bg-[#25D366] text-white hover:opacity-90"><MessageCircle size={18} /> {t('Chat on WhatsApp')}</a>
            {site.mapEmbed ? (
              <iframe
                title="Location map"
                src={site.mapEmbed}
                className="h-56 w-full rounded-2xl border border-gold/30"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div className="flex h-56 items-center justify-center rounded-2xl border border-dashed border-gold bg-white text-center text-sm text-charcoal/60">
                <div><MapPin className="mx-auto mb-2 text-gold" />{t('Google Maps placeholder')}<br />{t('(embed added after approval)')}</div>
              </div>
            )}
          </div>

          <div className="card p-6 sm:p-8 lg:col-span-3">
            <h2 className="text-3xl font-bold">{t('Appointment Enquiry')}</h2>
            {done && (
              <div className="mt-5 flex items-start gap-3 rounded-xl bg-green-50 p-4 text-sm text-green-800" role="status">
                <CheckCircle2 className="shrink-0" size={20} />
                <p><strong>{t('Thank you!')}</strong> {t('Your enquiry has been sent. We will contact you soon.')}</p>
              </div>
            )}
            {status === 'error' && (
              <div className="mt-5 rounded-xl bg-red-50 p-4 text-sm text-maroon" role="alert">
                {t('Something went wrong. Please call us or try again.')}
              </div>
            )}
            <form onSubmit={submit} noValidate className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field error={err('name')} label={t('Full Name')}><input className="input" value={v.name} onChange={set('name')} autoComplete="name" /></Field>
              <Field error={err('phone')} label={t('Phone Number')}><input className="input" value={v.phone} onChange={set('phone')} inputMode="tel" autoComplete="tel" /></Field>
              <Field error={err('email')} label={t('Email Address')}><input type="email" className="input" value={v.email} onChange={set('email')} autoComplete="email" /></Field>
              <Field error={err('service')} label={t('Select Service')}>
                <select className="input" value={v.service} onChange={set('service')}>
                  <option value="">{t('Choose a service')}</option>
                  {services.map((s) => <option key={s.id} value={s.title}>{t(s.title)}</option>)}
                </select>
              </Field>
              <div className="sm:col-span-2"><Field error={err('date')} label={t('Preferred Date')}><input type="date" className="input" value={v.date} onChange={set('date')} /></Field></div>
              <div className="sm:col-span-2"><Field error={err('message')} label={t('Message')}><textarea rows="4" className="input" value={v.message} onChange={set('message')} /></Field></div>
              <button type="submit" disabled={status === 'sending'} className="btn-gold sm:col-span-2 disabled:opacity-60">
                {status === 'sending' ? t('Sending...') : t('Submit Enquiry')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}