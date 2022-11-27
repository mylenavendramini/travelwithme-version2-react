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
          <a href="/">Home</a>
          <a href="/services">Services</a>
        </nav>
      </header>
    </Fragment>
  );
}

export default Header;
