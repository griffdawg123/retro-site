import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { getAllPosts, type PostMeta } from '@/lib/posts'

export default function Blog() {
  const [posts, setPosts] = useState<PostMeta[]>([])

  useEffect(() => {
    getAllPosts().then(setPosts)
  }, [])

  return (
    <div
      style={{
        backgroundColor: '#1a1a1a',
        minHeight: '100vh',
        padding: '3rem 2rem',
      }}
    >
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <h1
          style={{
            fontFamily: 'Archivo Black, sans-serif',
            color: 'var(--foreground)',
            fontSize: '2.5rem',
            margin: '0 0 2rem 0',
          }}
        >
          BLOG
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {posts.map((post) => (
            <Link key={post.slug} to="/blog/$slug" params={{ slug: post.slug }} style={{ textDecoration: 'none' }}>
              <div
                style={{
                  backgroundColor: 'var(--card)',
                  border: '2px solid var(--border)',
                  borderRadius: '6px',
                  padding: '1.25rem 1.5rem',
                }}
                className="shadow-md hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-100"
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem' }}>
                  <h2
                    style={{
                      fontFamily: 'Archivo Black, sans-serif',
                      color: 'var(--foreground)',
                      fontSize: '1.1rem',
                      margin: 0,
                    }}
                  >
                    {post.title}
                  </h2>
                  <span
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      color: 'var(--muted-foreground)',
                      fontSize: '0.8rem',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {post.date}
                  </span>
                </div>
                {post.description && (
                  <p
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      color: 'var(--muted-foreground)',
                      fontSize: '0.9rem',
                      margin: '0.5rem 0 0 0',
                    }}
                  >
                    {post.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
