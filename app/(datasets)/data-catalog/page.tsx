import React from 'react';
import { getTransformedDatasetMetadata } from 'app/content/utils/mdx';
import { Suspense } from 'react';
import Catalog from './catalog';

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
