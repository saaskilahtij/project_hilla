import './globals.css'
import PropTypes from 'prop-types';
import { Inter } from 'next/font/google'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
 

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
    "kultamarja",
  ]
}


 function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='shortcut icon' href='/favicon_io/favicon.ico'/>
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

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;