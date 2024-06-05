import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from 'app/blog/utils/date'
import { StoryData } from 'app/types/veda'

export function BlogPosts({ postType, datasets, stories}: {postType: string, datasets?: any[], stories?: any[]}) {
  let allBlogs;
  if (postType === 'dataset') {
    allBlogs = datasets || [];
  } else {
    allBlogs = stories || [];
  }
  
  const prefix = (postType === 'dataset')? 'datasets': 'stories'
  return (
    <div>
      {allBlogs
        // .sort((a, b) => {
        //   if (
        //     new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
        //   ) {
        //     return -1
        //   }
        //   return 1
        // })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`${prefix}/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {(post.metadata as StoryData).pubDate? formatDate((post.metadata as StoryData).pubDate, false): ''}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.name}
              </p>
            </div>
              <p>
                {post.metadata.description}
              </p>
              <div>
                {post.metadata.media && 
                <Image 
                  src={post.metadata.media.src} 
                  alt={post.metadata.media.alt} 
                  width={300} 
                  height={300} 
                /> }
              </div>
          </Link>
        ))}
    </div>
  )
}
