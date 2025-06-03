import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import AnimatedLayout from './AnimatedLayout'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Roshe Academy',
  description: 'Created with Roshe Academy',
  generator: 'Roshe Academy',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <AnimatedLayout>
          {children}
        </AnimatedLayout>
      </body>
    </html>
  )
}
