import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { getTransformedDatasetMetadata } from 'app/content/utils/mdx';
import Providers from '../providers';

const ExplorationAnalysis = dynamic(
  () => import('./exploration'),
  { 
    ssr: false,
    loading: () => <p>Loading...</p> // @NOTE @TODO: We need a loading state!!!
  },
);

export default function Page() {
  const datasets: any[] = getTransformedDatasetMetadata();
  return (
    <section>
      <Suspense fallback={<>Loading...</>}>
        <Providers datasets={datasets}>
          <ExplorationAnalysis datasets={datasets} />
        </Providers>
      </Suspense>
    </section>
  );
}
