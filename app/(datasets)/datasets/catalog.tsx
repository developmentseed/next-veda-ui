'use client';
import { CatalogView, useFiltersWithQS } from '../../lib';
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Catalog({
  datasets
}: {
  datasets: any;
}) {
  const router = useRouter();
  const pathName = usePathname();
  const controlVars = useFiltersWithQS({navigate: router, push: true});

  return (
    <CatalogView
      datasets={datasets}
      onFilterChanges={() => controlVars}
      rootPath={pathName}
      location={pathName}
      linkProperties={{
        LinkElement: Link,
        pathAttributeKeyName: 'href'
      }}
    />
  );
}