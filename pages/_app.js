import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'

import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <>
        <Navbar />
        <div>{children}</div>
        <Footer />
        <style jsx>{`
          div {
            min-height: 100vh;
          }
        `}</style>
      </>
    )
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}
