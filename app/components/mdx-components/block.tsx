'use client';

import { useDataStore } from 'app/store/providers/data';
import { MapBlock } from '../../lib';
import React from 'react';

export default function EnhancedMapBlock(props) {
  const { datasets } = useDataStore();

  const transformed = datasets?.map((dataset) => ({
    content: dataset.content,
    slug: dataset.slug,
    data: dataset.metadata,
  }));

  return <MapBlock {...props} datasets={transformed} />;
}
