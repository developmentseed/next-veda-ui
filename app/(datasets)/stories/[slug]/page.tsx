import React from 'react';
import { notFound } from 'next/navigation';
import { CustomMDX } from 'app/components/mdx';
import { formatDate } from 'app/content/utils/date';
import { getStories } from 'app/content/utils/mdx';
import { baseUrl } from 'app/sitemap';

async function generateStaticParams() {
  const posts = getStories();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

function generateMetadata({ params }: { params: any }) {
  const post = getStories().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/content/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }: { params: any }) {
  const post = getStories().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type='application/ld+json'
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/content/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className='title font-semibold text-2xl tracking-tighter'>
        {post.metadata.title}
      </h1>
      <div className='flex justify-between items-center mt-2 mb-8 text-sm'>
        <p className='text-sm text-neutral-600 dark:text-neutral-400'>
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className='prose'>
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
