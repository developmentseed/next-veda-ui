'use client';
import React from 'react';
import { CatalogView, useFiltersWithQS } from '@lib';
import { useRouter } from 'next/navigation';
import Providers from '../providers';

export default function Catalog({ datasets }: { datasets: any }) {
  const controlVars = useFiltersWithQS();
  const router = useRouter();

  const handleCardNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Providers>
      <CatalogView
        datasets={datasets}
        onFilterChanges={() => controlVars}
        onCardNavigate={handleCardNavigation}
      />
    </Providers>
  );
}
