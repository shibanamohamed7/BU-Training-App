import React from "react";
import "../assets/styles/About.css";

const About = () => {
  return (
    <>
      <div style={{ paddingTop: "9rem" }}>
        <div className="flubber">
          <div className="flubberAnim">
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        </div>
        <div className="aboutContent">
          <h1>About Us</h1>
          <p>
            Welcome to the unified world of <strong>Beamer</strong> and{" "}
            <strong>Userflow</strong>! We are a leading provider of no-code
            product adoption and user engagement solutions, dedicated to
            empowering SaaS teams with the tools they need to drive product-led
            growth, boost user engagement, and increase product adoption.
          </p>

          <section>
            <h2>About Beamer</h2>
            <p>
              Beamer is a platform designed to help companies build better
              products and improve user engagement. Our tools, including{" "}
              <em>Changelog, NPS, and Feedback</em>, facilitate communication
              between businesses and their end-users, helping to drive product
              adoption and reduce churn. Since our inception, we have grown by
              leveraging Product-Led Growth as a core strategy, serving hundreds
              of companies looking to communicate product changes effectively
              and collect user feedback.
            </p>
            <p>
              <strong>
                "We are thrilled to welcome Userflow to the Beamer team."
              </strong>{" "}
              – <em>Satya Ganni, CEO of Beamer</em>
            </p>
          </section>

          <section>
            <h2>About Userflow</h2>
            <p>
              Founded in 2019, Userflow is a no-code user onboarding software
              that enables SaaS companies to manage user onboarding, retention,
              and ongoing communication. We provide a suite of tools, including
              in-app onboarding flows, checklists, resource centers, AI
              assistants, surveys, and more, allowing businesses to increase
              conversion rates and retain users. With over 700 forward-thinking
              customers, Userflow has grown by bootstrapping its way to success
              and constantly evolving based on customer feedback.
            </p>
            <p>
              <strong>
                "With the merger with Beamer, we know we can build an even
                stronger product toolkit that can supercharge product-led
                growth."
              </strong>{" "}
              – <em>Sebastian and Esben, founders of Userflow</em>
            </p>
          </section>

          <section>
            <h2>Our Mission</h2>
            <p>
              With a shared mission to empower product-led companies, Beamer and
              Userflow are now combined to provide a comprehensive toolkit for
              driving product engagement, adoption, and growth. Our suite of
              tools seamlessly integrates user communication with effective
              product guidance, helping SaaS teams build products that users
              love and fostering long-term customer relationships.
            </p>
          </section>
        </div>
        <div />
      </div>
    </>
  );
};

export default About;
