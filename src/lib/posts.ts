export interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
}

export interface Post extends PostMeta {
  content: string
}

const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default' })

function slugFromPath(path: string): string {
  return path.replace('../posts/', '').replace('.md', '')
}

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }
  const data: Record<string, string> = {}
  for (const line of match[1].split('\n')) {
    const colon = line.indexOf(':')
    if (colon === -1) continue
    data[line.slice(0, colon).trim()] = line.slice(colon + 1).trim()
  }
  return { data, content: match[2] }
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const posts = await Promise.all(
    Object.entries(modules).map(async ([path, loader]) => {
      const raw = await loader() as string
      const { data } = parseFrontmatter(raw)
      return {
        slug: slugFromPath(path),
        title: data.title ?? 'Untitled',
        date: data.date ?? '',
        description: data.description ?? '',
      }
    })
  )
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPost(slug: string): Promise<Post | null> {
  const entry = Object.entries(modules).find(([path]) => slugFromPath(path) === slug)
  if (!entry) return null
  const raw = await entry[1]() as string
  const { data, content } = parseFrontmatter(raw)
  return {
    slug,
    title: data.title ?? 'Untitled',
    date: data.date ?? '',
    description: data.description ?? '',
    content,
  }
}
