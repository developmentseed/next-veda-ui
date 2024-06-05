import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { getBlogPosts, getDatasets } from 'app/blog/utils/mdx'
import { formatDate } from 'app/blog/utils/date'
import { baseUrl } from 'app/sitemap'

function generateStaticParams() {
  let posts = getDatasets()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getDatasets().find((post) => post.slug === params.slug)
  // console.log(post)
  
  if (!post) {
    return
  }

  let {
    name,
    pubDate: publishedTime,
    description,
    image,
  } = post.metadata
  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(name)}`

  return {
    name,
    description,
    openGraph: {
      name,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      name,
      description,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }) {
  let post = getDatasets().find((post) => post.slug === params.slug)
  console.log(post);
  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.name,
            datePublished: post.metadata.pubDate,
            dateModified: post.metadata.pubDate,
            description: post.metadata.description,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <h3> hihi</h3>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
