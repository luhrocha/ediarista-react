import '@styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import { ThemeProvider } from "@mui/material/styles"
import theme from 'ui/themes/theme'
import Header from 'ui/components/surface/Header/Header'
import Footer from 'ui/components/surface/Footer/Footer'
import { AppContainer } from 'ui/styles/pages/_app.styled';

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    document.querySelector('#jss-server-side')?.remove();
  }, []);

  return (
    <>
      <Head>
        <title>e-diaristas {pageProps.title && `- ${pageProps.title}`}</title>        
      </Head>
      <ThemeProvider theme={theme}>
        <main>
          <AppContainer>          
              <Header />
                <Component {...pageProps} />
              <Footer/>          
          </AppContainer>
        </main>
      </ThemeProvider>
    </>
  )
}

export default MyApp
