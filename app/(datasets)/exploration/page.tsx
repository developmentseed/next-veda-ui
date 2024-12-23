import React, { Suspense } from 'react';
import { getTransformedDatasets } from 'app/content/utils/mdx';
import ExplorationAnalysis from './exploration';
import { PageHero } from 'app/lib';

export default function Page() {
  const datasets: any[] = getTransformedDatasets();
  return (
    <section>
      <Suspense fallback={<>Loading...</>}>
        <PageHero title='Exploration' isHidden />
        <ExplorationAnalysis datasets={datasets} />
      </Suspense>
    </section>
  );
}
