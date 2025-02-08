import React, { ReactNode } from 'react';
import DataProvider from 'app/store/providers/data';
import { getDatasetsMetadata } from 'app/content/utils/mdx';
import VedaUIConfigProvider from 'app/store/providers/veda-ui';
import DevseedUIThemeProvider from 'app/store/providers/theme';

export default function DatasetLayout({
  children,
}: {
  children: JSX.Element | ReactNode;
}) {
  const datasets = getDatasetsMetadata();

  return (
    <DevseedUIThemeProvider>
      <VedaUIConfigProvider>
        <DataProvider initialDatasets={datasets}>
          {children}
        </DataProvider>
      </VedaUIConfigProvider>
    </DevseedUIThemeProvider>
  );
}
