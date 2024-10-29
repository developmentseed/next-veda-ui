import React from 'react';
import Link from 'next/link';
import { PageHeader, LogoContainer } from '@lib';
import NasaLogo from '../../public/images/nasa-logo';
import { NavItem, NavItemType } from '@lib';

const navItems: NavItem[]  = [
  {
    title: 'Home',
    to: '/',
    type: 'internalLink',
  },
  {
    title: 'datasets',
    to: '/datasets',
    type: 'internalLink',
  },
  {
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

  const Logo: JSX.Element = (
    <LogoContainer
      linkProperties={linkProps}
      logo={<NasaLogo />}
      title='Earthdata'
      subTitle='veda dashboard'
      version='1.0.0'
    />
  );

  return (
    <aside className='-ml-[8px] mb-16 tracking-tight'>
      <div className='lg:sticky lg:top-20'>
        <nav
          className='flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative'
          id='nav'
        >
          <div className='flex flex-row space-x-0 pr-10'>
            <PageHeader
              mainNavItems={navItems}
              subNavItems={[]}
              logo={Logo}
              linkProperties={linkProps}
            />
          </div>
        </nav>
      </div>
    </aside>
  );
}
