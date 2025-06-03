import { Metadata } from 'next'
import './globals.css'
import AnimatedLayout from './AnimatedLayout'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AnimatedLayout>
          {children}
        </AnimatedLayout>
      </body>
    </html>
  )
}
