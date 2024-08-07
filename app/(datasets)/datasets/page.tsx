'use client';

import { BlogPosts } from 'app/components/posts';
// import { getDatasets } from 'app/blog/utils/mdx';
import { useDataStore } from "app/store/providers/data";
import { CatalogView } from '../../lib';

export default function Page() {
  // const posts = getDatasets();
  const { datasets: posts } = useDataStore();

  const transformed = posts?.map((post) => ({
    ...post.metadata
  }));
  
  console.log(`transformed: `, transformed)
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Datasets</h1>
      <CatalogView datasets={transformed} onFilterChanges={() => { return {search: '', taxonomies: {}, onAction: () => true}}}/>
      <BlogPosts postType="dataset" posts={posts} />
    </section>
  )
}

