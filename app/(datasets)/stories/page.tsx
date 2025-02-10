import React, { Suspense } from 'react';
import { getStoriesMetadata } from 'app/content/utils/mdx';
import Hub from './hub';

export default function Page() {
  const stories = getStoriesMetadata().map((d) => ({
    ...d.metadata,
    path: `stories/${d.slug}`,
  }));

  return (
    <div className='grid-container'>
      <section>
        <h1 className='font-ui-lg'>Stories</h1>
        <Suspense fallback={<>Loading...</>}>
          <Hub stories={stories} />
        </Suspense>
      </section>
    </div>
  );
}
