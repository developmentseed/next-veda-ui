import React, {ReactNode} from 'react'
import DataProvider from './data';
import { getDatasets } from '../../blog/utils/mdx';
import DevseedUIThemeProvider from './theme';

export function CoreVedaProvidersWrapper({
  children
}: {
  children: JSX.Element | ReactNode
}) {
  const datasets = getDatasets();
  return (
    <DataProvider initialDatasets={datasets}>
      <DevseedUIThemeProvider>
        {children}
      </DevseedUIThemeProvider>
    </DataProvider>
  )
}