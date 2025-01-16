import React, { ReactNode } from 'react';
import DataProvider from 'app/store/providers/data';
import { getDatasetsMetadata, getStoriesMetadata } from 'app/content/utils/mdx';

export default function DatasetLayout({
  children,
}: {
  children: JSX.Element | ReactNode;
}) {
  const datasets = getDatasetsMetadata();
  const stories = getStoriesMetadata().map((d) => ({
    ...d.metadata,
    path: `stories/${d.slug}`,
  }));

  return <DataProvider initialDatasets={datasets} initialStories={stories}>{children}</DataProvider>;
}
