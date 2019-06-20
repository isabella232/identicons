import Link from "next/link";
import Container from './Container'


const Footer = () => {
  return (
    <footer className="footer-page">
      <Container>
        <div className="footer-logo">
          <img className="identicons-logo" src="../static/identicons-logo.svg" width="100"></img>
          <span className="footer-copy"><strong>open source</strong></span>
          <Link href="http://auth0.com">
            <img className="auth0-logo" src="../static/auth0-white-logo.svg" width="60"></img>
          </Link>
        </div>
      </Container>
      
      <style jsx>{`
        .footer-page {
          background: black;
          color: #fff;
          width: 100%;
          height: 80px;
          padding: 14px 0;
        }

        .identicons-logo {
          opacity: .6;
          margin-right: 10px;
        }

        .auth0-logo {
          float: right;
          margin-top: 5px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;