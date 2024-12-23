'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  ExplorationAndAnalysis,
  DatasetSelectorModal,
  useTimelineDatasetAtom,
  externalDatasetsAtom,
} from 'app/lib';

import { useSetAtom } from 'jotai';
import useElemengHeight from '@utils/hooks/use-element-height';

export default function ExplorationAnalysis({ datasets }: { datasets: any }) {
  const setExternalDatasets = useSetAtom(externalDatasetsAtom);

  setExternalDatasets(datasets);

  const [timelineDatasets, setTimelineDatasets] = useTimelineDatasetAtom();
  const [datasetModalRevealed, setDatasetModalRevealed] = useState(
    !timelineDatasets.length,
  );

  const openModal = () => {
    setDatasetModalRevealed(true);
  };
  const closeModal = () => {
    setDatasetModalRevealed(false);
  };
  // On landing, measure the height of Header and fill up the rest of the space with E&A
  const offsetHeight = useElemengHeight({ queryToSelect: 'header' });

  return (
    <div
      id='ea-wrapper'
      // The below styles adjust the E&A page to match what we have on earthdata.nasa.gov
      // Ideally, we would replace some of the custom styles with the USWDS grid and util classes
      // but since we do not have USWDS yet in the template instance, this is a quick workaround
      // to make the page look closer to the current E&A page.
      style={{
        position: 'absolute',
        width: '100%',
        height: `calc(100vh - ${offsetHeight}px)`,
      }}
    >
      <DatasetSelectorModal
        revealed={datasetModalRevealed}
        close={closeModal}
        linkProperties={{
          LinkElement: Link,
          pathAttributeKeyName: 'href',
        }}
        timelineDatasets={timelineDatasets}
        setTimelineDatasets={setTimelineDatasets}
        datasetPathName={'data-catalog'}
        datasets={datasets}
      />

      <ExplorationAndAnalysis
        datasets={timelineDatasets}
        setDatasets={setTimelineDatasets}
        openDatasetsSelectionModal={openModal}
      />
    </div>
  );
}
