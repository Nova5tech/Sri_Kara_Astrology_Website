import { useState } from 'react'
import { Play } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import Placeholder from '../components/Placeholder.jsx'
import VideoCard from '../components/VideoCard.jsx'
import VideoModal from '../components/VideoModal.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { videos } from '../data/videos.js'
import { site } from '../data/site.js'

export default function Videos() {
  const [video, setVideo] = useState(null)
  const { t } = useLang()
  const featured = videos[0]
  return (
    <>
      <Seo title="Videos" description="Astrology and spiritual videos (demonstration)." />
      <PageBanner title="Videos" subtitle="Demonstration videos - not actual client content." />
      <section className="section">
        <div className="container-x">
          <button onClick={() => setVideo(featured)} className="card group relative mb-12 block w-full overflow-hidden text-left">
            <Placeholder label="Featured demo video" className="h-64 sm:h-96" />
            <span className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold text-navy transition group-hover:scale-110"><Play size={30} fill="currentColor" /></span>
              <span className="px-4 text-center font-serif text-2xl font-bold text-ivory sm:text-3xl">{t(featured.title)}</span>
            </span>
          </button>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v, i) => <VideoCard key={v.id} video={v} index={i} onPlay={setVideo} />)}
          </div>
          <div className="mt-14 rounded-2xl bg-navy p-10 text-center">
            <h2 className="!text-ivory text-3xl font-bold">{t('Subscribe on YouTube')}</h2>
            <p className="mt-2 text-ivory/75">{t('Channel link to be added after client approval.')}</p>
            <a href={site.youtube} target="_blank" rel="noreferrer" className="btn-gold mt-6">{t('Subscribe')}</a>
          </div>
        </div>
      </section>
      <VideoModal video={video} onClose={() => setVideo(null)} />
    </>
  )
}