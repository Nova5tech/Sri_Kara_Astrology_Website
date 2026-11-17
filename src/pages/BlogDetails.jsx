import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import PostImage from '../components/PostImage.jsx'
import BlogCard from '../components/BlogCard.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { blogs } from '../data/blogs.js'

export default function BlogDetails() {
  const { slug } = useParams()
  const { t } = useLang()
  const post = blogs.find((b) => b.slug === slug)
  if (!post) {
    return (
      <section className="section container-x text-center">
        <Seo title="Article not found" />
        <h1 className="text-4xl font-bold">{t('Article not found')}</h1>
        <Link to="/blog" className="btn-navy mt-8">{t('Back to Blog')}</Link>
      </section>
    )
  }
  const related = blogs.filter((b) => b.slug !== slug).slice(0, 3)
  return (
    <>
      <Seo title={post.title} description={post.excerpt} />
      <PageBanner title={post.title} />
      <article className="section">
        <div className="container-x max-w-3xl">
          <PostImage post={post} label="Sample image" className="mb-8 h-64 w-full rounded-2xl sm:h-80" />
          <div className="mb-6 text-sm">
            <span className="font-bold uppercase tracking-wider text-gold-dark">{t(post.category)}</span>
          </div>
          {post.body.map((p, i) => <p key={i} className="mb-5 leading-8 text-charcoal/85">{t(p)}</p>)}
          <Link to="/blog" className="mt-4 inline-flex items-center gap-2 font-bold text-maroon"><ArrowLeft size={16} /> {t('Back to Blog')}</Link>
        </div>
      </article>
      <section className="section bg-white">
        <div className="container-x grid gap-6 md:grid-cols-3">{related.map((b, i) => <BlogCard key={b.slug} post={b} index={i} />)}</div>
      </section>
    </>
  )
}