import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactNode, ReactElement } from 'react';
import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: ( page: ReactElement ) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default  function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page );

  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
  // )
  return getLayout(<Component {...pageProps} />)
}