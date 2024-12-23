import React, { Suspense } from 'react';
import { getTransformedDatasetMetadata } from 'app/content/utils/mdx';
import ExplorationAnalysis from './exploration';
import { PageHero } from 'app/lib';

export default function Page() {
  const datasets: any[] = getTransformedDatasetMetadata();
  return (
    <section>
      <Suspense fallback={<>Loading...</>}>
        <PageHero title='Exploration' isHidden />
        <ExplorationAnalysis datasets={datasets} />
      </Suspense>
    </section>
  );
}
