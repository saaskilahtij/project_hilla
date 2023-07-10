import './globals.css'
import { Inter } from 'next/font/google'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kultamarja ⭐️',
  description: 'Kultamarjan kotisivu, jossa kerrotaan hillanmyynnistä.',
  keywords: [
    "hillaa",
    "hillan myynti",
    "hillan keräys",
    "hillaa oulu",
    "hillaa lappi",
    "hilla",
    "marjan myynti",
    "marjojen myynti",
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <Navbar/>
        <main className='px-5 mt-20' id='main'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
