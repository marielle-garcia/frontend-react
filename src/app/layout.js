// esse arquivo monta a base de layout para o projeto

import Header from '@/components/layout/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'App React',
  description: 'React Project with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}</body>
    </html>
  )
}
