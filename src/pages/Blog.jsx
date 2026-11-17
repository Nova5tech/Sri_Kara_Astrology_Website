import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import PostImage from '../components/PostImage.jsx'
import BlogCard from '../components/BlogCard.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { blogs, blogCategories } from '../data/blogs.js'

export default function Blog() {
  const { t } = useLang()
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')
  const featured = blogs[0]
  const list = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return blogs.filter((b) => {
      const text = `${b.title} ${b.excerpt} ${t(b.title)} ${t(b.excerpt)}`.toLowerCase()
      return (cat === 'All' || b.category === cat) && text.includes(needle)
    })
  }, [q, cat, t])
  return (
    <>
      <Seo title="Blog & Articles" description="Astrology and spirituality articles (sample content)." />
      <PageBanner title="Blog & Articles" subtitle="Sample articles for layout review." />
      <section className="section">
        <div className="container-x">
          <Link to={`/blog/${featured.slug}`} className="card mb-12 grid overflow-hidden md:grid-cols-2">
            <PostImage post={featured} label="Featured - sample" className="h-56 w-full md:h-full" />
            <div className="p-8">
              <h2 className="text-3xl font-bold">{t(featured.title)}</h2>
              <p className="mt-3 text-charcoal/75">{t(featured.excerpt)}</p>
              <span className="mt-5 inline-block font-bold text-maroon">{t('Read More')} →</span>
            </div>
          </Link>

          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative md:w-80">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40" />
              <input className="input !pl-10" placeholder={t('Search articles')} value={q} onChange={(e) => setQ(e.target.value)} aria-label={t('Search articles')} />
            </div>
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((c) => (
                <button key={c} onClick={() => setCat(c)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${cat === c ? 'border-navy bg-navy text-ivory' : 'border-navy/20 hover:border-gold'}`}>{t(c)}</button>
              ))}
            </div>
          </div>

          {list.length === 0 ? (
            <p className="rounded-xl bg-white p-10 text-center text-charcoal/70">{t('No articles found. Try another search or category.')}</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map((b, i) => <BlogCard key={b.slug} post={b} index={i} />)}</div>
          )}
        </div>
      </section>
    </>
  )
}