import React from 'react';
import { getDatasets } from 'app/blog/utils/mdx';
import { Suspense } from 'react';
import Catalog from './catalog';

export default function Page() {
  const posts: any[] = getDatasets();

  const transformData = () => {
    const data = posts?.map((post) => ({
      ...post.metadata,
    }));

    const result = data?.map((d) => {
      const updatedTax = d.taxonomy.map((t) => {
        const updatedVals = t.values.map((v) => {
          return {
            id: v.replace(/ /g, '_').toLowerCase(),
            name: v,
          };
        });
        return { ...t, values: updatedVals };
      });
      return { ...d, taxonomy: updatedTax };
    });

    return result;
  };

  const transformed = transformData();

  return (
    <section>
      <h1 className='font-semibold text-2xl mb-8 tracking-tighter'>Datasets</h1>
      <Suspense fallback={<>Loading...</>}>
        <Catalog datasets={transformed} />
      </Suspense>
    </section>
  );
}
