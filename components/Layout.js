import React from 'react';
import Header from "./Header"
import Footer from "./Footer"

class Layout extends React.Component {
  render () {
    const { children } = this.props
    
    return (
      <div className='layout'>
        <Header />
        { children }
        <Footer />
        <style global jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600&display=swap');
        
        body {
          -webkit-font-smoothing: auto;
          margin: 0;
          padding: 0;
          color: rgba(0, 0, 0, 0.7);
          
        }
      `}</style>
      </div>
    )
  }
}

export default Layout;