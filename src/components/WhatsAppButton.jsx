import { MessageCircle } from 'lucide-react'
import { site } from '../data/site.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function WhatsAppButton() {
  const { t } = useLang()
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t(site.whatsappMessage))}`
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 left-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110">
      <MessageCircle />
    </a>
  )
}