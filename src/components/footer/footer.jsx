import { Fragment } from "react";

function Footer() {
  return (
    <Fragment>
      <section id="footer">
        <div className="inner">
          <h2 className="major">Keep in touch</h2>
          <p>
            I'm currently not accepting new clients, but I will be back soon and
            you can travel with me!
          </p>
          <form method="post" action="#">
            <div className="fields">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Sorry, the contact form is currently unavailable."
                ></textarea>
              </div>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" disabled />
              </li>
            </ul>
          </form>

          <ul className="copyright">
            <li>&copy; Untitled Inc. All rights reserved.</li>
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
}

export default Footer;
