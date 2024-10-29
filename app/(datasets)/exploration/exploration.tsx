'use client';
import React, { useState } from 'react';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { ExplorationAndAnalysis, timelineDatasetsAtom, DatasetSelectorModal } from 'app/lib';

export default function ExplorationAnalysis({
  datasets
}: {
  datasets: any;
}) {
  const [explorationDatasets, setExplorationDatasets] = useAtom(timelineDatasetsAtom);
  const [datasetModalRevealed, setDatasetModalRevealed] = useState(
    !!datasets.length
  );

  
  const openModal = () => {setDatasetModalRevealed(true);}
  const closeModal = () => {setDatasetModalRevealed(false);}
  const transformData = () => {
    const data = datasets?.map((post) => ({
      ...post.metadata
    }));

    const result = data?.map((d) => {
      const updatedTax = d.taxonomy.map((t) => {
        const updatedVals = t.values.map((v) => {
          return {
            id: v.replace(/ /g, '_').toLowerCase(),
            name: v
          }
        })
        return {...t, values: updatedVals}
      })
      return {...d, taxonomy: updatedTax}
    })

    return result
  };

  const transformed = transformData();

  return (
    <>
    {
      datasetModalRevealed && (
        <DatasetSelectorModal
          revealed={datasetModalRevealed}
          close={closeModal}
          linkProperties={{
            LinkElement: Link,
            pathAttributeKeyName: 'href'
          }}
          datasetPathName={'data-catalog'}
          datasets={transformed}
        />
      )
    }
    <ExplorationAndAnalysis datasets={explorationDatasets} setDatasets={setExplorationDatasets} openDatasetsSelectionModal={openModal} />
    </>
  )
};