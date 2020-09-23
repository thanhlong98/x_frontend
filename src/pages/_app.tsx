import { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import Layout from '@layout'
import '@styles/global.scss'

// handle show progress bar
NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
