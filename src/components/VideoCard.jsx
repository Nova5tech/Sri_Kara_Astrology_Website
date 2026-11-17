import { Play } from 'lucide-react'
import Placeholder from './Placeholder.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function VideoCard({ video, onPlay, index = 0 }) {
  const { t } = useLang()
  return (
    <button onClick={() => onPlay(video)} className="card group block w-full overflow-hidden text-left">
      <div className="relative">
        <Placeholder tone={index} label="Demo thumbnail" className="h-44" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy transition group-hover:scale-110"><Play size={22} fill="currentColor" /></span>
        </span>
        <span className="absolute bottom-2 right-2 rounded bg-navy/80 px-2 py-0.5 text-xs text-ivory">{video.duration}</span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold leading-snug">{t(video.title)}</h3>
        <p className="mt-1 text-sm text-charcoal/70">{t(video.desc)}</p>
      </div>
    </button>
  )
}