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
            <span className="image">
              <img src="images/person3.jpg" alt="" />
            </span>
            <div className="content">
              <h2 className="major">Hello! 👋</h2>
              <p>
                My name is Lola! I've always been addicted to traveling and
                today I use my passion to help you make your dream come true.
                Don't worry! I will plan every step for you, months in advance
                of your trip. You won't have to think about places to visit,
                location of your hotel or where to eat. It's time to relax and
                enjoy!
              </p>
            </div>
          </div>
        </section>

        <section id="two" className="wrapper alt spotlight style2">
          <div className="inner">
            <Link onClick={scrollToTop} to="/services" className="image">
              <img src="images/planner.jpg" alt="" />
            </Link>
            <div className="content">
              <h2 className="major">All kind of services</h2>
              <p>
                I do custom travel itineraries and travel financial planning.
                Plus, I show you the best way to get travel insurance.
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
