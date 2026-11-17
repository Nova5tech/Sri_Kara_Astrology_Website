import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Quote, Download, Image as ImageIcon } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import Mandala from '../components/Mandala.jsx'
import Placeholder from '../components/Placeholder.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import BlogCard from '../components/BlogCard.jsx'
import VideoCard from '../components/VideoCard.jsx'
import VideoModal from '../components/VideoModal.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { services } from '../data/services.js'
import { blogs } from '../data/blogs.js'
import { videos } from '../data/videos.js'
import { panchangam } from '../data/panchangam.js'
import { gallery } from '../data/gallery.js'
import { testimonials } from '../data/site.js'
import { astrologer } from '../data/astrologer.js'

export default function Home() {
  const [video, setVideo] = useState(null)
  const navigate = useNavigate()
  const { t } = useLang()
  const pTitle = (p) => (p.title ? t(p.title) : `${t('Nitya Panchangam')} - ${t(p.month)} ${p.year}`)
  const roles = astrologer.roles.map((r) => t(r)).join(' · ')
  return (
    <>
      <Seo title="Home" description="Discover the wisdom of astrology with Sri Kara Maha Shakti Pettam Astro." />

      <section className="relative overflow-hidden bg-navy">
        <Mandala className="absolute -right-24 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 sm:h-[44rem] sm:w-[44rem]" />
        <Mandala className="absolute -left-40 -top-40 h-96 w-96" opacity={0.15} />
        <div className="container-x relative py-24 sm:py-36">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">{t('Sri Kara Maha Shakti Pettam Astro')}</p>
            <h1 className="text-5xl font-bold leading-tight !text-ivory sm:text-6xl lg:text-7xl">{t('Discover the Wisdom of Astrology')}</h1>
            <p className="mt-6 max-w-xl text-lg text-ivory/80">{t('Thoughtful astrological guidance and spiritual insight, presented with tradition, clarity and care.')}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/services" className="btn-gold">{t('Explore Our Services')}</Link>
              <Link to="/contact" className="btn-outline">{t('Contact Us')}</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Placeholder label="Sample profile photo" className="h-80 rounded-2xl sm:h-[28rem]" />
          <div>
            <p className="mb-2 text-sm font-semibold text-gold-dark">{t(astrologer.mantra)}</p>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">{t('Meet the Astrologer')}</p>
            <h2 className="text-3xl font-bold sm:text-4xl">{t(astrologer.name)}</h2>
            <p className="mt-3 font-serif text-2xl font-bold text-maroon">{roles}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {astrologer.titles.map((title) => (
                <li key={title} className="rounded-full border border-gold/50 bg-white px-4 py-1.5 text-sm font-semibold text-navy">{t(title)}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-charcoal/80">{t(astrologer.position)}</p>
            <Link to="/about" className="btn-navy mt-8">{t('Learn More About Us')}</Link>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
        <SectionTitle eyebrow={t('Our Services')} title={t('Featured Astrology Services')} subtitle={t('Astrology, Vastu and spiritual guidance services.')} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((s) => <ServiceCard key={s.id} service={s} onOpen={() => navigate('/services')} />)}
          </div>
          <div className="mt-10 text-center"><Link to="/services" className="btn-navy">{t('View All Services')}</Link></div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionTitle eyebrow={t('Nitya Panchangam')} title={t('Latest Panchangam')} subtitle={t('Panchangam publications for download.')} />
          <div className="grid gap-6 sm:grid-cols-3">
            {panchangam.slice(0, 3).map((p) => (
              <div key={p.id} className="card p-6">
                <span className="demo-tag mb-3">{p.isDemo ? t('Demo') : t('Reference copy')}</span>
                <h3 className="text-xl font-bold">{pTitle(p)}</h3>
                <p className="mt-2 text-sm text-charcoal/70">{t(p.note)}</p>
                <a href={p.file} download className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-maroon"><Download size={16} /> {p.isDemo ? t('Sample download') : t('Download PDF')}</a>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center"><Link to="/panchangam" className="btn-navy">{t('Open Panchangam')}</Link></div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionTitle eyebrow={t('Blog')} title={t('Latest Articles')} subtitle={t('Sample articles for layout review.')} />
          <div className="grid gap-6 md:grid-cols-3">{blogs.slice(0, 3).map((b, i) => <BlogCard key={b.slug} post={b} index={i} />)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionTitle eyebrow={t('Videos')} title={t('Latest Videos')} subtitle={t('Demonstration videos - not actual client content.')} />
          <div className="grid gap-6 md:grid-cols-3">{videos.slice(0, 3).map((v, i) => <VideoCard key={v.id} video={v} index={i} onPlay={setVideo} />)}</div>
        </div>
      </section>

      <section className="section bg-navy">
        <div className="container-x">
          <SectionTitle eyebrow={t('Gallery')} title={t('Moments & Traditions')} light subtitle={t('Demo images.')} />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {gallery.slice(0, 4).map((g) => <Placeholder key={g.id} tone={g.tone} label={`${t('Demo photo')} ${g.id}`} className="aspect-square rounded-xl" />)}
          </div>
          <div className="mt-10 text-center"><Link to="/gallery" className="btn-outline"><ImageIcon size={16} /> {t('View Gallery')}</Link></div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionTitle eyebrow={t('Testimonials')} title={t('Words from Clients')} subtitle={t('Demo content - not genuine client feedback.')} />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((x) => (
              <div key={x.name} className="card p-7">
                <Quote className="text-gold" />
                <p className="mt-3 text-sm text-charcoal/80">{t(x.text)}</p>
                <p className="mt-4 font-serif text-lg font-bold">{t(x.name)}</p>
                <span className="demo-tag">{t('Demo testimonial')}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <VideoModal video={video} onClose={() => setVideo(null)} />
    </>
  )
}