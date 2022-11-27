import { Fragment } from "react";
import { Link } from "react-router-dom";

function Testimonials() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  // const slides = document.querySelectorAll(".slide");

  // let curSlide = 0;
  // const maxSlide = slides.length;

  // const goToSlide = function (slide) {
  //   slides.forEach(
  //     (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  //   );
  // };

  // const nextSlide = function () {
  //   if (curSlide === maxSlide - 1) {
  //     curSlide = 0;
  //   } else {
  //     curSlide++;
  //   }

  //   goToSlide(curSlide);
  // };

  // const prevSlide = function () {
  //   if (curSlide === 0) {
  //     curSlide = maxSlide - 1;
  //   } else {
  //     curSlide--;
  //   }
  //   goToSlide(curSlide);
  // };
  // const init = function () {
  //   goToSlide(0);
  // };
  // init();

  // document.addEventListener("keydown", function (e) {
  //   if (e.key === "ArrowLeft") prevSlide();
  //   e.key === "ArrowRight" && nextSlide();
  // });

  // const prevAndNextSlide = (e) => {
  //   if (e.target.classList.contains("dots__dot")) {
  //     const { slide } = e.target.dataset;
  //     goToSlide(slide);
  //   }
  // };

  return (
    <Fragment>
      <section className="features">
        <article>
          <a href="/" className="image">
            <img src="images/person4.png" alt="" />
          </a>
          <h3 className="major">Claire Fox</h3>
          <p>
            Think about the best trip you could have. Hire Lola. It will happen!
          </p>
        </article>
        <article>
          <a href="/" className="image">
            <img src="images/person5.png" alt="" />
          </a>
          <h3 className="major">George Jones</h3>
          <p>
            Travelling with my son was one of my dreams and Lola helped me to
            make it true. I have so many special memories with him now and
            everything because of Lola.
          </p>
        </article>
        <article>
          <a href="/" className="image">
            <img src="images/person1.png" alt="" />
          </a>
          <h3 className="major">Amanda Dias</h3>
          <p>
            Lola helped me to plan my first trip alone. I was a little worry in
            the beggining, but everything worked so well. Lola things about all
            the details. I will definely plan more trips with her.
          </p>
        </article>
        <article>
          <a href="/" className="image">
            <img src="images/person2.png" alt="" />
          </a>
          <h3 className="major">Mike Wu</h3>
          <p>
            I needed to travel with a little money and Lola helped me to make it
            real. With a small budget I visited 3 different cities in Spain and
            that was awesome!
          </p>
        </article>
      </section>

      {/* <div className="slider">
        <div className="slide">
          <div className="testimonial">
            <h2 className="testimonial--header">Trip of my dreams!</h2>
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              temporibus enim nesciunt!
            </h1>
            <address className="testimonial--author">
              <img
                src="/img/person1.png"
                alt=""
                className="testimonial--photo"
              />
              <h1 className="testimonial--name">Laura Dias</h1>
              <div className="space"></div>
              <p className="testimonial--location">São Paulo, Brazil</p>
            </address>
          </div>
        </div>
        <div className="slide">
          <div className="testimonial">
            <h2 className="testimonial--header">Great choice</h2>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              temporibus culpa beatae laboriosam perspiciatis quo incidunt
              voluptatem magni, aliquid quaerat.
            </h1>
            <address className="testimonial--author">
              <img
                src="/img/person2.png"
                alt=""
                className="testimonial--photo"
              />
              <h1 className="testimonial--name">Kevin Taylor</h1>
              <div className="space"></div>
              <p className="testimonial--location">San Francisco, USA</p>
            </address>
          </div>
        </div>
        <div className="slide">
          <div className="testimonial">
            <h2 className="testimonial--header">Awsome service!</h2>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              repudiandae velit qui culpa quam, corrupti porro cumque eos
              officiis nisi.
            </h1>
            <address className="testimonial--author">
              <img
                src="/img/person3.png"
                alt=""
                className="testimonial--photo"
              />
              <h1 className="testimonial--name">Martina Garcia</h1>
              <div className="space"></div>
              <p className="testimonial--location">Madrid, Spain</p>
            </address>
          </div>
        </div>

        <span
          onClick={nextSlide}
          className="testimonials-arrows"
          id="arrowLeft"
        >
          {" "}
          &larr;
        </span>

        <span
          onClick={prevSlide}
          className="testimonials-arrows"
          id="arrowRight"
        >
          {" "}
          &rarr;
        </span>

        <div onClick={prevAndNextSlide} className="dots"></div>
  </div>*/}
    </Fragment>
  );
}

export default Testimonials;
