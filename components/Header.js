import Link from "next/link";
import HeaderNav from "./HeaderNav";
import Container from "./Container";

const Header = () => {
  return (
    <header className="header-page">
      <Container>
        <Link href="/index" >
          <div className="logo">
            <img alt="Auth0 Identicons" src="../static/site/identicons-logo.svg" width="192" />
          </div>
        </Link>
        <HeaderNav />
      </Container>

      <style jsx>{`
        .header-page {
          background: #EAECEE;
          color: rgb(34, 34, 34);
          width: 100%;
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