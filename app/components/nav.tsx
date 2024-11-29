import React from 'react';
import Link from 'next/link';
import { PageHeader } from '@lib';
import NasaLogo from '../../public/images/nasa-logo';
import { NavItem } from '@lib';

const navItems: NavItem[] = [
  // @TODO: This should use the NavLinkType from veda-ui...
  {
    id: 'home',
    title: 'Home',
    to: '/',
    type: 'internalLink',
  },
  {
    id: 'data-catalog',
    title: 'Data Catalog',
    to: '/data-catalog',
    type: 'internalLink',
  },
  {
    id: 'exploration',
    title: 'Exploration',
    to: '/exploration',
    type: 'internalLink',
  },
  {
    id: 'stories',
    title: 'Stories',
    to: '/stories',
    type: 'internalLink',
  },
];

export function Navbar() {
  const linkProps = {
    LinkElement: Link,
    pathAttributeKeyName: 'href',
  };

  return (
    <aside className='-ml-[8px] tracking-tight'>
      <nav id='nav'>
        <PageHeader
          mainNavItems={navItems}
          subNavItems={[]}
          logo={<NasaLogo />}
          linkProperties={linkProps}
        />
      </nav>
    </aside>
  );
}
