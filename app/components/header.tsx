import React from 'react';
import { PageHeader } from '@lib';
import { NavItem } from '@lib';
import NasaLogoColor from 'app/components/nasa-logo-color.js';
import VedaUIConfigProvider from 'app/store/providers/veda-ui';


export const navItems: NavItem[] = [
  {
    id: 'data-catalog',
    title: 'Data Catalog',
    to: '/data-catalog',
    type: 'internalLink'
  },
  {
    id: 'exploration',
    title: 'Exploration',
    to: '/exploration',
    type: 'internalLink'
  },
  {
    id: 'stories',
    title: 'Stories',
    to: '/stories',
    type: 'internalLink'
  }
];

export const subNavItems: NavItem[] = [
  {
    id: 'about',
    title: 'About',
    to: '/about',
    type: 'internalLink'
  },
  {
    id: 'contact-us',
    title: 'Contact us',
    actionId: 'open-google-form',
    type: 'action'
  }
]

export default function Header() {
  return (
    <VedaUIConfigProvider>
      <PageHeader
        mainNavItems={navItems}
        subNavItems={subNavItems}
        title='Earthdata VEDA Dashboard'
        logoSvg={
          <div id='logo-container-link'>
            {/*
              USWDS targets only <a> tags for styling links. However when the text is a <span>
              instead of a link, it does not inherit the color styling (it ends up being white).
              To fix this, we must add the color inline like this.
              TODO: Ideally we can address this on the veda-ui side so that the color applies to all elements within the logo.
            */}
            <NasaLogoColor />
          </div>
        }
      />
    </VedaUIConfigProvider>
  );
}
