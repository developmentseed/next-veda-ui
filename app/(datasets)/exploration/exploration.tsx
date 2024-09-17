'use client';
import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { ExplorationAndAnalysis, timelineDatasetsAtom } from 'app/lib';

export default function ExplorationAnalysis({
  datasets
}: {
  datasets: any;
}) {
  const [explorationDatasets, setExplorationDatasets] = useAtom(timelineDatasetsAtom);
  const [datasetModalRevealed, setDatasetModalRevealed] = useState(
    !datasets.length
  );
  const openModal = () => setDatasetModalRevealed(true);

  return (
    <ExplorationAndAnalysis datasets={explorationDatasets} setDatasets={setExplorationDatasets} openDatasetsSelectionModal={openModal} />
  )
};