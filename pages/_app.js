import React from 'react'
import App, { Container } from 'next/app'
import Layout from "../components/Layout"

class Identicons extends App {

  render () {
    const { Component, pageProps } = this.props;
     
    return (
      <Layout>
        <Component {...pageProps} />
        <style global jsx>{`
        html {
          font-size: 10px;
        }
        
        body {
          -webkit-font-smoothing: auto;
        }

        .identicons-page { 
          margin: 0;
          padding: 0;
          color: rgba(0, 0, 0, 0.7);
        }
      `}</style>
      </Layout>
    )
  }
}
export default Identicons;