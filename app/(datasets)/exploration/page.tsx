import { Suspense } from "react";
import { getDatasets } from 'app/blog/utils/mdx';
import ExplorationAnalysis from './exploration';
import { PageHero } from 'app/lib';

export default function Page() {
  const datasets: any[] = getDatasets();
  // @TODO: Investigate why we need to set 100vh
  return (
    <section style={{height: "100vh"}}> 
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Datasets</h1>
      <Suspense fallback={<>Loading...</>}>
        <PageHero title='Exploration' isHidden />
        <ExplorationAnalysis datasets={datasets} />
      </Suspense>
    </section>
  )
};