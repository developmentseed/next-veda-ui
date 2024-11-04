import React from 'react';
import Link from 'next/link';
import { NavItem, NavItemType } from '@lib';

const navItems: NavItem[]  = [
  {
    title: 'Home',
    to: '/',
    type: NavItemType.INTERNAL_LINK
  },
  {
    title: 'Data Catalog',
    to: '/data-catalog',
    type: NavItemType.INTERNAL_LINK
  },
  {
    title: 'Stories',
    to: '/stories',
    type: NavItemType.INTERNAL_LINK
  },
];

export function Navbar() {
  return (
    <aside className='-ml-[8px] mb-16 tracking-tight'>
      <div className='lg:sticky lg:top-20'>
        <nav
          className='flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative'
          id='nav'
        >
          <div className='flex flex-row space-x-0 pr-10'>
            {navItems.map(({ to, title }) => {
              return (
                <Link
                  key={to}
                  href={to}
                  className='transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1'
                >
                  {title}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
