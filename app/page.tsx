import React from 'react';
import { PageHero } from '@lib';

export default function HomePage() {
  return (
    <PageHero
      title='VEDA UI Template Instance'
      description='This is this template instance using the veda-ui refactored npm library and in integration with USWDS'
      coverSrc='/images/root-welcome--cover.jpg'
      coverAlt='welcome-image'
    />
  );
}
