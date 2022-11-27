import { Fragment } from "react";

function Testimonials() {
  return (
    <Fragment>
      <section className="features">
        <article>
          <a href="/" className="image">
            <img src="images/person4.png" alt="" />
          </a>
          <h3 className="major">Claire Fox</h3>
          <p>
            Think of the best trip you could ever take. Hire Lola. It will
            happen!
          </p>
        </article>
        <article>
          <a href="/" className="image">
            <img src="images/person5.png" alt="" />
          </a>
          <h3 className="major">George Jones</h3>
          <p>
            Traveling with my son was one of my biggest dreams and Lola helped
            me to make it true. Today I have so many special memories with him
            and it's all because of Lola.
          </p>
        </article>
        <article>
          <a href="/" className="image">
            <img src="images/person1.png" alt="" />
          </a>
          <h3 className="major">Amanda Dias</h3>
          <p>
            Lola helped me plan my first solo trip. I was a little worried at
            first, but everything worked so well. Lola thinks of every detail. I
            will definitely plan more trips with her.
          </p>
        </article>
        <article>
          <a href="/" className="image">
            <img src="images/person2.png" alt="" />
          </a>
          <h3 className="major">Mike Wu</h3>
          <p>
            I needed to travel on a budget and Lola helped me achieve that goal.
            On a small budget, I visited 3 different cities in Spain and that
            was amazing!
          </p>
        </article>
      </section>
    </Fragment>
  );
}

export default Testimonials;
