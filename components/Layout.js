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
        html {
          font-size: 10px;
        }
        
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