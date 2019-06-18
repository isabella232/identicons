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
      </div>
    )
  }
}

export default Layout;