import React from 'react';
import { BlogPosts } from 'app/components/posts';
import { getStories } from 'app/blog/utils/mdx';

export default function Page() {
  const posts = getStories();
  return (
    <section>
      <h1 className='font-semibold text-2xl mb-8 tracking-tighter'>Stories</h1>
      <BlogPosts postType='story' posts={posts} />
    </section>
  );
}
