import React, { ReactNode } from 'react';
import DataProvider from 'app/store/providers/data';
import VedaUIConfigProvider from 'app/store/providers/veda-ui';
import DevseedUIThemeProvider from 'app/store/providers/theme';

export default function Providers ({
  datasets,
  children
}: {
  datasets?: any,
  children: ReactNode
}) {
  return (
    <DevseedUIThemeProvider>
      <VedaUIConfigProvider>
        {
          datasets ? (
            <DataProvider initialDatasets={datasets}>
              {children}
            </DataProvider>
          ) : (
            children
          )
        }
      </VedaUIConfigProvider>
    </DevseedUIThemeProvider>
  )
}