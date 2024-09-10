'use client';
import React from 'react';
import { useAtom } from 'jotai';
import { ExplorationAndAnalysis, timelineDatasetsAtom } from 'app/lib';

export default function ExplorationAnalysis({
  datasets
}: {
  datasets: any;
}) {
  const [explorationDatasets, setExplorationDatasets] = useAtom(timelineDatasetsAtom);

  return (
    <ExplorationAndAnalysis datasets={explorationDatasets} setDatasets={setExplorationDatasets} />
  )
};