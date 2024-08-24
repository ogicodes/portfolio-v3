import '@/styles/globals.css'
import clsx from 'clsx'

import { Providers } from './providers'

import { fontSans } from '@/config/fonts'
import Nav from '@/components/nav'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning={true} className='light' lang='en'>
      <head />
      <body className={clsx(fontSans.variable)}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark', children }}>
          <Nav />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
