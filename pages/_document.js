import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="https://cdn.auth0.com/styleguide/core/2.0.5/core.min.css" />
          <link rel="stylesheet" href="https://cdn.auth0.com/styleguide/components/2.0.0/components.min.css" />
          <link rel="stylesheet" href="https://cdn.auth0.com/styleguide/react-components/1.0.2/react-components.css" />
        </Head>
        <body className="identicons-page">
          <Main />
          <NextScript />
        </body>

      <style jsx>{`
        html {
          font-size: 10px;
        }

        .identicons-page { 
          margin: 0;
          padding: 0;
          color: rgba(0, 0, 0, 0.7);
        }
      `}</style>
      </html>
    )
  }
}