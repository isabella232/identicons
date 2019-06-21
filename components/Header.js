import Link from "next/link";
import HeaderNav from "./HeaderNav";
import Container from "./Container";

const Header = () => {
  return (
    <header className="header-page">
      <Container>
        <Link href="/index" >
          <div className="logo">
            <img className="sc-footer__logo-image" src="../static/site/auth0-logo-black.svg" width="30"></img>
            <span className="logo-copy"><strong>IDENTICONS</strong></span>
          </div>
        </Link>
        <HeaderNav />
      </Container>

      <style jsx>{`
        .header-page {
          background: white;
          color: rgb(34, 34, 34);
          width: 100%;
          padding: 20px 0;
        }

        .logo {
          float: left;
          cursor: pointer;
        }

        .logo-copy {
          padding-left: 10px;
        }
      `}</style>
    </header>
  )
}

export default Header