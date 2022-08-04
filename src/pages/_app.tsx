import '@styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    document.querySelector('#jss-server-side')?.remove();
  }, []);

  return (
    <>
      <Head>
        <title>e-diaristas</title>        
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
