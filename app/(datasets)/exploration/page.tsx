import React, { Suspense } from 'react';
import { getDatasets } from 'app/content/utils/mdx';
import ExplorationAnalysis from './exploration';
import { PageHero } from 'app/lib';

export default function Page() {
  const datasets: any[] = getDatasets();
  return (
    <section>
      <div
        id='ea-wrapper'
        // The below styles adjust the E&A page to match what we have on earthdata.nasa.gov
        // Ideally, we would replace some of the custom styles with the USWDS grid and util classes
        // but since we do not have USWDS yet in the template instance, this is a quick workaround
        // to make the page look closer to the current E&A page.
        style={{
          position: 'absolute',
          width: '100%',
        }}
      >
        <Suspense fallback={<>Loading...</>}>
          <PageHero title='Exploration' isHidden />
          <ExplorationAnalysis datasets={datasets} />
        </Suspense>
      </div>
    </section>
  );
}
