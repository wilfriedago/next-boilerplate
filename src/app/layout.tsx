import '@/styles/tailwind.css'

import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import { ScreenSizeDetector } from '@/components'
import { AppConfig } from '@/shared/configs'

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png'
    },
    {
      rel: 'icon',
      url: '/favicon.ico'
    }
  ]
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang={AppConfig.locale}>
      <body>
        {children}
        <ScreenSizeDetector position="top-left" />
      </body>
    </html>
  )
}
