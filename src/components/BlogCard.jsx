import { Link } from 'react-router-dom'
import PostImage from './PostImage.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'

export const formatDate = (d, lang = 'en') =>
  new Date(d).toLocaleDateString(lang === 'te' ? 'te-IN' : 'en-IN', { day: 'numeric', month: 'short', year: 'numeric' })

export default function BlogCard({ post, index = 0 }) {
  const { t } = useLang()
  return (
    <Link to={`/blog/${post.slug}`} className="card group block overflow-hidden">
      <PostImage post={post} tone={index} label="Sample thumbnail" className="h-44 w-full" />
      <div className="p-6">
        <div className="mb-3 text-xs">
          <span className="font-bold uppercase tracking-wider text-gold-dark">{t(post.category)}</span>
        </div>
        <h3 className="text-xl font-bold group-hover:text-maroon">{t(post.title)}</h3>
        <p className="mt-2 text-sm text-charcoal/75">{t(post.excerpt)}</p>
        <span className="mt-4 inline-block text-sm font-bold text-maroon">{t('Read More')} →</span>
      </div>
    </Link>
  )
}