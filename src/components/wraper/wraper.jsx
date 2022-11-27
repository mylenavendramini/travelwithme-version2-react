import { Fragment } from "react";
import { Link } from "react-router-dom";
import Testimonials from "../testimonials/testimonials";

function Wraper() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Fragment>
      <section id="wrapper">
        <section id="one" className="wrapper spotlight style1">
          <div className="inner">
            <a href="/" className="image">
              <img src="images/person3.jpg" alt="" />
            </a>
            <div className="content">
              <h2 className="major">Hello! 👋</h2>
              <p>
                My name is Lola! I've always been addicted to traveling and
                today I can use this passion to help you make your dream come
                true. Don't worry! I will plan every step for you, since months
                before your trip. You won't need to think about places to visit,
                hotel location and not even where to eat. It's time to relax and
                enjoy!
              </p>
              <Link onClick={scrollToTop} to={"/services"} className="special">
                Know more
              </Link>
            </div>
          </div>
        </section>

        <section id="two" className="wrapper alt spotlight style2">
          <div className="inner">
            <a href="/" className="image">
              <img src="images/planner.jpg" alt="" />
            </a>
            <div className="content">
              <h2 className="major">All kind of services</h2>
              <p>
                I make personalized travel intineraries and travel finalcial
                planning. Also, I show you the best way to get travel insurance.
              </p>
              <Link onClick={scrollToTop} to={"/services"} className="special">
                Know more
              </Link>
            </div>
          </div>
        </section>

        <section id="four" className="wrapper alt style1">
          <div className="inner">
            <h2 className="major">Testimonials</h2>
            <p>
              Are you still not confident? Check out what people are saying
              about Travel With Me:
            </p>
            <Testimonials />
          </div>
        </section>
      </section>
    </Fragment>
  );
}

export default Wraper;
