import { getDatasets, getDatasetsMetadata } from 'app/blog/utils/mdx';
import { Suspense } from "react";
import Catalog from './catalog'

export default function Page() {
  const posts: any[] = getDatasetsMetadata().map(e => e.metadata)

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Datasets</h1>
      <Suspense fallback={<>Loading...</>}>
        <Catalog datasets={posts} />
      </Suspense>
    </section>
  )
}

