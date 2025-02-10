import React from 'react';
import { notFound } from 'next/navigation';
import { CustomMDX } from 'app/components/mdx';
import { getDatasets } from 'app/content/utils/mdx';
import { baseUrl } from 'app/sitemap';
import { PageHero } from '@lib';
import Providers from 'app/(datasets)/providers';

function generateStaticParams() {
  const posts = getDatasets();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  const post = getDatasets().find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const { name, pubDate: publishedTime, description, image } = post.metadata;
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(name)}`;

  return {
    name,
    description,
    openGraph: {
      name,
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
      name,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }: { params: any }) {
  const post = getDatasets().find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <section>
      <article className='prose'>
        <Providers>
          <PageHero
            title={post.metadata.name}
            description={post.metadata.description}
            coverSrc={post.metadata.media?.src}
            coverAlt={post.metadata.media?.alt}
          />
        </Providers>
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
