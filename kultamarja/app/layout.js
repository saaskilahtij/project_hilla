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
    "Kultamarja.fi",
    "hillaa",
    "hillan myynti",
    "hillan keräys",
    "hillaa Oulu",
    "hillaa Lappi",
    "hillaa Rovaniemi",
    "osta hillaa",
    "hilla",
    "marjan myynti",
    "marjojen myynti",
    "kultamarja",
    "keräämme hillaa",
    "hillan osto",
    "hillan osto oulu",
    "hillan osto lappi",
    "hillan osto rovaniemi",
    "hillan osto pudasjärvi",
    "hillan osto pello",
    "hillan osto helsinki",
    "pääkaupunkiseutu",
    "osta hillaa helsinki",
    "hillan osto espoo",
    "hillan osto vantaa",
    "hillan osto kauniainen",
    "hillan osto kerava",
    "hillan osto tuusula",
    "hillan osto järvenpää",
    "hillan osto pääkaupunkiseutu",
  ]
}


function RootLayout({ children }) {
  return (
    <html lang="fi">
      <head>
        <link rel='shortcut icon' href='/favicon_io/favicon.ico'/>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-X53N8SKS49"/>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-X53N8SKS49');
            `,
          }}
        />
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