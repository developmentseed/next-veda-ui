import React from 'react';

import { PageFooter } from '@lib';
import { navItems, subNavItems } from './nav';
import NasaLogoColor from './nasa-logo-color.js';

const defaultFooterSettings = {
  secondarySection: {
    division: 'NASA EarthData 2024',
    version: 'BETA VERSION',
    title: 'NASA Official',
    name: 'Manil Maskey',
    to: 'test@example.com',
    type: 'email',
  },
  returnToTop: true,
};

export function Footer() {
  return (
    <PageFooter
      settings={defaultFooterSettings}
      mainNavItems={navItems}
      subNavItems={subNavItems}
      hideFooter={false}
      logoSvg={<NasaLogoColor />}
    />
  );
}
