import { Fragment } from "react";
import Typewriter from "typewriter-effect";

function Banner() {
  return (
    <Fragment>
      <section id="banner">
        <div className="inner">
          <div className="logo">
            <span className="icon fa-gem"></span>
          </div>
          <div className="logo"></div>
          <h2>Travel with me</h2>
          <p>
            <Typewriter
              options={{
                strings: [
                  "London ",
                  "Paris ",
                  "New York ",
                  "Bangkok ",
                  "Rio de Janeiro ",
                  "Dubai ",
                  "Tokyo ",
                  "Singapore ",
                  "Barcelona ",
                  "Milan ",
                  "Bali ",
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                cursor: "_",
                pauseFor: 1000,
                wrapperClassName: "typewriting",
                cursorClassName: "typewritingcursor",
              }}
            />{" "}
          </p>
        </div>
      </section>
    </Fragment>
  );
}

export default Banner;
