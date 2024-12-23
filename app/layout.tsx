import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from './components/nav';
import Footer from './components/footer';
import { baseUrl } from './sitemap';
import dynamic from 'next/dynamic';
import { EnvConfigProvider } from '@lib';

import './styles/index.scss';

import '@developmentseed/veda-ui/lib/main.css';

const DevSeedUIThemeProvider = dynamic(
  () => import('app/store/providers/theme'),
  { ssr: false },
);

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Next.js VEDA Template Instance',
    template: '%s | Next.js VEDA Template Instance',
  },
  description: 'Next.js VEDA Template Instance.',
  openGraph: {
    title: 'Next.js VEDA Template Instance',
    description: 'Next.js VEDA Template Instance.',
    url: baseUrl,
    siteName: 'Next.js VEDA Template Instance',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <main>
          <DevSeedUIThemeProvider>
            <EnvConfigProvider
              config={{
                envMapboxToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? '',
                envApiStacEndpoint:
                  process.env.NEXT_PUBLIC_API_STAC_ENDPOINT ?? '',
                envApiRasterEndpoint:
                  process.env.NEXT_PUBLIC_API_RASTER_ENDPOINT ?? '',
              }}
            >
              <Navbar />
              {children}
            </EnvConfigProvider>
          </DevSeedUIThemeProvider>
        </main>
      </body>
    </html>
  );
}
