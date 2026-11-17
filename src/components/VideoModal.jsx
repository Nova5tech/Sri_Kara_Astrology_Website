import { useEffect } from 'react'
import { X } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function VideoModal({ video, onClose }) {
  const { t } = useLang()
  useEffect(() => {
    if (!video) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [video, onClose])
  if (!video) return null
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-deep/90 p-4" onClick={onClose} role="dialog" aria-modal="true">
      <div className="w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-2 flex items-center justify-between text-ivory">
          <h3 className="!text-ivory text-lg font-bold">{t(video.title)}</h3>
          <button onClick={onClose} aria-label="Close video" className="rounded-full p-2 hover:bg-white/10"><X /></button>
        </div>
        <div className="aspect-video overflow-hidden rounded-xl bg-navy">
          {video.youtubeId ? (
            <iframe className="h-full w-full" src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`} title={video.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
          ) : (
            <div className="flex h-full flex-col items-center justify-center p-6 text-center text-ivory">
              <span className="demo-tag mb-3">{t('Demonstration video')}</span>
              <p className="max-w-md text-sm text-ivory/80">{t('No real video is attached yet. Add a YouTube video ID in src/data/videos.js to enable playback here.')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}