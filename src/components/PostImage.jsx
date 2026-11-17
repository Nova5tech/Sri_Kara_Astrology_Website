import Placeholder from './Placeholder.jsx'

// Shows the article photo when the post has one, otherwise the placeholder.
export default function PostImage({ post, tone = 0, label, className = '' }) {
  if (post.image) {
    return <img src={post.image} alt={post.title} loading="lazy" className={`object-cover ${className}`} />
  }
  return <Placeholder tone={tone} label={label} className={className} />
}
