const HeaderNav = ({oldVersionBannerDisplay, openOVBanner, closeOVBanner}) => {

  return ( 
    <nav className="header-nav">
      <ul className="navigation">
        <li>
          <a href="https://github.com/auth0/identicons" target="_blank">
            <img className="github" src="../static/site/github-icon.svg" width="16" /> Usage & Contributions
          </a>
        </li>

        <li>
          <a className="btn btn-transparent btn-sm btn-old-version" 
              href="../static/icons/identicons-set-v1.zip" 
              onMouseOver={openOVBanner} 
              onMouseOut={closeOVBanner} 
              download>
            Old Version
          </a>
        </li>
      </ul>
      {oldVersionBannerDisplay ? 
        <div className="old-version-banner">
          <div className="banner-image">
            <img className="Old Identicons" src="../static/site/old-version-banner.png"/>
          </div>
          <p>Click here to get the package with the previous version of the Identicons.</p>
        </div> 
      : null}
      <style jsx>{`
          .header-nav {
            float: right;
            display: block;
            position: relative;
          }

          .navigation {
            margin: 0;
            padding:0;
          }

          .navigation li {
            margin: 0;
            padding:0;
            list-style: none;
            display: inline-block;
            margin-left: 25px;
            vertical-align: middle;
          }

          .navigation li a{
            color: black;
          }
          
          .github {
            margin-right: .4rem;
            margin-bottom: 2px;
            vertical-align: center;
          }

          .btn-sm {
            font-family: fakt-web, Helvetica Neue,Hevetica,sans-serif;
            text-transform: capitalize;
            font-weight: 400;
          }

          .btn-old-version {

          }

          a.btn-old-version:hover {
            background: #2A2E35;
            color: #EAECEE !important;
          }

          .old-version-banner {
            position: absolute;
            top: 46px;
            right: -24px;
            background: white;
            border-radius: 24px;
            padding: 16px;
            box-shadow: 0px 44.8625px 52.7794px rgba(0, 0, 0, 0.08), 0px 18.7425px 22.05px rgba(0, 0, 0, 0.0575083), 0px 10.0206px 11.789px rgba(0, 0, 0, 0.0476886), 0px 5.61748px 6.6088px rgba(0, 0, 0, 0.04), 0px 2.9834px 3.50988px rgba(0, 0, 0, 0.0323114), 0px -2px 12px rgba(0, 0, 0, 0.04);
          }

          .old-version-banner p {
            font-size: 16px;
            line-height: 24px;
          }

          .banner-image {
            width: 330px;
            overflow: hidden;
            border-radius: 16px;
            margin-bottom: 16px;
          }

          .banner-image img {
            width: 100%;
          }
          
          @media(max-width: 600px) {
            .header-nav {
              display: none;
            }
          }

        `}
      </style>
    </nav>
  );
}

export default HeaderNav;