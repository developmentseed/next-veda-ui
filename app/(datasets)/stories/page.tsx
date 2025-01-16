'use client';
import React from 'react';
import Hub from './hub';
import { useDataStore } from 'app/store/providers/data';

export default function Page() {
  const { stories } = useDataStore();

  return (
    <section>
      <div className='grid-container'>
        <Hub stories={stories} />
      </div>
    </section>
  );
}
