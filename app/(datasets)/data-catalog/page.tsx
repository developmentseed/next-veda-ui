import React from 'react';
import { getTransformedDatasets } from 'app/content/utils/mdx';
import { Suspense } from 'react';
import Catalog from './catalog';

export default function Page() {
  const transformed = getTransformedDatasets();

  return (
    <div className='grid-container'>
      <section>
        <Suspense fallback={<>Loading...</>}>
          <Catalog datasets={transformed} />
        </Suspense>
      </section>
    </div>
  );
}
