import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: 'Portfolio - Thiago Cainelli',
  description: 'Portfólio Thiago Cainelli - Desenvolvedor Front-end',
  openGraph: {
    authors: "Thiago Cainelli",
    description: "Portfólio Thiago Cainelli - Desenvolvedor Front-end", 
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">

      <body className={inter.className}>
        {children}
      </body>
      
    </html>
  )
}
