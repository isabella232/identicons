import Banner from './Banner';

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
        <Banner img="../static/site/old-version-banner.png" copy="Click here to get the package with the previous version of the Identicons."/>
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

          a.btn-old-version:hover {
            background: rgb(99,93,255);
            color: #EAECEE !important;
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