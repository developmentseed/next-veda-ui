'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ReactQueryProvider } from '../../lib';

interface DataStore {
  datasets?: any[];
  setDatasets?: React.Dispatch<React.SetStateAction<any[] | undefined>>;
}

export const DataContext = createContext<DataStore>({});

export function useDataStore() {
  return useContext<DataStore>(DataContext);
}

function DataProvider({
  initialDatasets = undefined,
  children,
}: {
  children: JSX.Element | ReactNode;
  initialDatasets: any[] | undefined;
}) {
  const [datasets, setDatasets] = useState<any[] | undefined>(initialDatasets);
  const value = {
    datasets,
    setDatasets,
  };

  return (
    <DataContext.Provider value={value}>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </DataContext.Provider>
  );
}

export default DataProvider;
