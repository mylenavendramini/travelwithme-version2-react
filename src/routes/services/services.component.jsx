import { Fragment } from "react";

function Services() {
  function tabContainer(e) {
    const tabs = document.querySelectorAll(".services--tab");
    const tabsContent = document.querySelectorAll(".services--content");
    const clicked = e.target.closest(".services--tab");
    if (!clicked) return;
    tabs.forEach((t) => t.classList.remove("services--tab--active"));
    tabsContent.forEach((c) => c.classList.remove("services--content--active"));
    clicked.classList.add("services--tab--active");
    document
      .querySelector(`.services--content--${clicked.dataset.tab}`)
      .classList.add("services--content--active");
  }

  return (
    <Fragment>
      <section style={{ background: "#8b418b" }} id="banner">
        <div className="inner services">
          <div className="logo services">
            <h2>
              Choose one or more services and let's make your trip finally
              happen:
            </h2>
          </div>
          <div className="services">
            <div onClick={tabContainer} className="services--tab-container">
              <button
                className="services--tab services--tab--1 services--tab--active"
                data-tab="1"
              >
                <h1>Personalized travel itinerary</h1>
              </button>
              <button className="services--tab services--tab--2" data-tab="2">
                <h1>Travel financial planning</h1>
              </button>
              <button className="services--tab services--tab--3" data-tab="3">
                <h1>Travel insurance</h1>
              </button>
            </div>
            <div className="services--content services--content--1 services--content--active">
              <p>For small groups ✔️</p>
              <p>For big groups ✔️</p>
              <p>For honeymoon ✔️</p>
              <p>For work trip ✔️</p>
              <p>For one person ✔️</p>
              <p>For family with kids ✔️</p>

              <p>
                It doesn't matter the type of trip you are looking for. We can
                always do it unforgettable.
              </p>
            </div>
            <div className="services--content services--content--2">
              <p>Low budget ✔️</p>
              <p>Fancy trip ✔️</p>
              <p>Choose what is more important ✔️</p>
              <p>
                I help you get financially organized months before your trip.
                You will learn how to save for your dream trip.
              </p>
            </div>
            <div className="services--content services--content--3">
              <p>
                Don't forget this part! It's always important to be safe in any
                trip you do. I help you to find the best travel insurance for
                you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Services;
