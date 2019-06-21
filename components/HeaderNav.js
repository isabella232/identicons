import Link from "next/link";

const HeaderNav = () => {
  return ( 
    <nav className="header-nav">
      <ul className="navigation">
        <li>
          <Link href="/usage" >
            <a>Usage</a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/auth0/identicons" >
            <a target="_blank">Github</a>
          </Link>
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
          }

          .navigation li a{
            color: black;
          }
        `}
      </style>
    </nav>
  );
}

export default HeaderNav;