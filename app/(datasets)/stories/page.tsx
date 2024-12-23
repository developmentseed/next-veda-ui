import React from 'react';
import { getStoriesMetadata } from 'app/content/utils/mdx';
import Hub from './hub';

export default function Page() {
  const stories = getStoriesMetadata().map((d) => ({
    ...d.metadata,
    path: `stories/${d.slug}`,
  }));

  return (
    <section>
      <div className='grid-container'>
        <Hub stories={stories} />
      </div>
    </section>
  );
}
