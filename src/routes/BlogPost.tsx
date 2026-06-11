import { useEffect, useState } from 'react'
import { useParams, Link } from '@tanstack/react-router'
import ReactMarkdown from 'react-markdown'
import { getPost, type Post } from '@/lib/posts'

export default function BlogPost() {
  const { slug } = useParams({ from: '/blog/$slug' })
  const [post, setPost] = useState<Post | null>(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    getPost(slug).then((p) => {
      if (!p) setNotFound(true)
      else setPost(p)
    })
  }, [slug])

  if (notFound) {
    return (
      <div style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
        <h1 style={{ fontFamily: 'Archivo Black, sans-serif', color: 'var(--foreground)', fontSize: '2rem' }}>Post not found</h1>
        <Link to="/blog" style={{ color: 'var(--primary)', fontFamily: 'Space Grotesk, sans-serif' }}>← Back to blog</Link>
      </div>
    )
  }

  if (!post) return null

  return (
    <div style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', padding: '3rem 2rem' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <Link
          to="/blog"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            color: 'var(--muted-foreground)',
            fontSize: '0.85rem',
            textDecoration: 'none',
            display: 'inline-block',
            marginBottom: '2rem',
          }}
          className="hover:text-foreground"
        >
          ← Blog
        </Link>

        <h1
          style={{
            fontFamily: 'Archivo Black, sans-serif',
            color: 'var(--foreground)',
            fontSize: '2.5rem',
            margin: '0 0 0.5rem 0',
            lineHeight: 1.1,
          }}
        >
          {post.title}
        </h1>
        <p style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--muted-foreground)', fontSize: '0.85rem', margin: '0 0 2.5rem 0' }}>
          {post.date}
        </p>

        <div className="prose">
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 style={{ fontFamily: 'Archivo Black, sans-serif', color: 'var(--foreground)', fontSize: '1.4rem', margin: '2rem 0 0.75rem' }}>{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 style={{ fontFamily: 'Archivo Black, sans-serif', color: 'var(--foreground)', fontSize: '1.1rem', margin: '1.5rem 0 0.5rem' }}>{children}</h3>
              ),
              p: ({ children }) => (
                <p style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--foreground)', lineHeight: 1.75, margin: '0 0 1rem 0' }}>{children}</p>
              ),
              ul: ({ children }) => (
                <ul style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--foreground)', paddingLeft: '1.5rem', margin: '0 0 1rem 0', lineHeight: 1.75 }}>{children}</ul>
              ),
              li: ({ children }) => <li style={{ marginBottom: '0.25rem' }}>{children}</li>,
              a: ({ href, children }) => (
                <a href={href} style={{ color: 'var(--primary)', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">{children}</a>
              ),
              strong: ({ children }) => (
                <strong style={{ fontFamily: 'Archivo Black, sans-serif', color: 'var(--foreground)' }}>{children}</strong>
              ),
              code: ({ children }) => (
                <code style={{ fontFamily: 'monospace', backgroundColor: 'var(--secondary)', padding: '0.1em 0.4em', borderRadius: '3px', fontSize: '0.875em' }}>{children}</code>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
