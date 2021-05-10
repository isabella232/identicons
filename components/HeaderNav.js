const HeaderNav = () => {
  return ( 
    <nav className="header-nav">
      <ul className="navigation">
        <li>
          <a href="https://github.com/auth0/identicons" target="_blank">Usage</a>
        </li>
        <li>
          <a href="https://github.com/auth0/identicons" target="_blank">
            <img className="github" src="../static/site/github-icon.svg" width="16" /> Contribute
          </a>
        </li>

        <li>
          <a className="btn btn-transparent btn-sm" href="../static/icons/identicons-set.zip" download>
            Old Version
          </a>
        </li>
      </ul>
      <style jsx>{`
          .header-nav {
            float: right;
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

          .btn-sm {
            font-family: fakt-web, Helvetica Neue,Hevetica,sans-serif;
            text-transform: capitalize;
            font-weight: 400;
          }
        `}
      </style>
    </nav>
  );
}

export default HeaderNav;