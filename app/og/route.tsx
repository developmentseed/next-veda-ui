import React from 'react';
import { ImageResponse } from 'next/og';

export function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get('title') || 'Next.js Portfolio Starter';

  return new ImageResponse(
    (
      <div>
        <div>
          <h2>{title}</h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
