import { getStoriesMetadata } from 'app/blog/utils/mdx'
import Hub from './hub'

export default function Page() {
  const posts = getStoriesMetadata().map(d => ({...d.metadata,  path: `stories/${d.slug}`}))
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Stories</h1>
      <Hub stories={posts} />
    </section>
  )
}
