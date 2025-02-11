import React from 'react';
import dynamic from 'next/dynamic';
import { getTransformedDatasetMetadata } from 'app/content/utils/mdx';
import { Suspense } from 'react';

const Catalog = dynamic(
  () => import('./catalog'),
  { 
    ssr: false,
    loading: () => <p>Loading...</p> // @NOTE @TODO: We need a loading state!!!
  },
);

export default function Page() {
  const transformed = getTransformedDatasetMetadata();

  return (
    <div className='grid-container'>
      <section>
        <h1 className='font-ui-lg'>Data Catalog</h1>
        <Suspense fallback={<>Loading...</>}>
          <Catalog datasets={transformed} />
        </Suspense>
      </section>
    </div>
  );
}
