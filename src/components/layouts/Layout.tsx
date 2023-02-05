import Head from 'next/head'
import React, { FC, ReactElement } from 'react'
import { Navbar } from '../ui/Navbar';

interface Props {
  title?: string,
  children: ReactElement,
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title> {title || 'Pokemon App'}</title>
        <meta name='author' content='Nataly Rojas' />
        <meta name='description' content={`Información sobre el pokemón ${title} `} />
        <meta name='keywords' content={`pokemon, pokedex, ${title}`} />

        <meta property="og:title" content={`Información sobre ${title} `} />
        <meta property="og:description" content={`Esta es la página sobre ${title} `} />
        <meta property="og:image" content={`${origin}/imgs/banner.png`} />
      </Head>
      <Navbar />
      <main style={{
        padding: '0px 20px',
      }}>
        {children}
      </main>
    </>
  )
}