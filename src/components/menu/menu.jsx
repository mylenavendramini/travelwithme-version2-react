import { Fragment } from "react";
import { Link } from "react-router-dom";
import { bool } from "prop-types";

function Menu() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Fragment>
      <nav id="menu">
        <div className="inner">
          <h2>Menu</h2>
          <ul className="links">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="generic.html">Generic</a>
            </li>
            <li>
              <a href="elements.html">Elements</a>
            </li>
          </ul>
          <a href="/" className="close">
            Close
          </a>
        </div>
      </nav>
    </Fragment>
  );
}

export default Menu;
