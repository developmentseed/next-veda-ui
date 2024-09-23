'use client';
import { CatalogView, useFiltersWithQS } from '@developmentseed/veda-ui';
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Catalog({
  datasets
}: {
  datasets: any;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const controlVars = useFiltersWithQS({navigate: ({ search }) => router.replace(`?${search}`)});

  return (
    <CatalogView
      datasets={datasets}
      onFilterChanges={() => controlVars}
      pathname={pathname}
      linkProperties={{
        LinkElement: Link,
        pathAttributeKeyName: 'href'
      }}
    />
  );
}