import React from 'react';
import { getDatasets } from 'app/content/utils/mdx';
import { Suspense } from 'react';
import Catalog from './catalog';
import { transformData } from '@helpers/data';

export default function Page() {
  const posts: any[] = getDatasets(); // @TODO: Revist type here, should use data types from veda-ui
  const transformed = transformData(posts);

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
