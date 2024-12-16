'use client';
import { PageFooter } from '@developmentseed/veda-ui';
import React from 'react';
import { navItems, subNavItems } from './nav';
import NasaLogoColor from './nasa-logo-color.js';

const defaultFooterSettings = {
  secondarySection: {
    title: 'email test',
    to: '/data-catalog',
    type: 'Email',
  },
  returnToTop: true,
};

export default function Footer() {
  return (
    <PageFooter
      settings={defaultFooterSettings}
      primarySection={{
        mainNavItems: navItems,
        subNavItems: subNavItems,
      }}
      hideFooter={false}
      logoSvg={<NasaLogoColor />}
    />
  );
}
