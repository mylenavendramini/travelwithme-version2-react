import { Fragment } from "react";
import { Link } from "react-router-dom";

function Header() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Fragment>
      <header id="header" className="alt">
        <nav>
          <Link onClick={scrollToTop} to={"/"}>
            Home
          </Link>
          <Link onClick={scrollToTop} to={"/services"}>
            Services
          </Link>
        </nav>
      </header>
    </Fragment>
  );
}

export default Header;
