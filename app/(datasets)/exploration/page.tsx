import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { getTransformedDatasetMetadata } from 'app/content/utils/mdx';

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
        <ExplorationAnalysis datasets={datasets} />
      </Suspense>
    </section>
  );
}
