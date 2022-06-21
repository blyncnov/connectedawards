import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="General__Container">
        <div className="max__width">
          <div className="About__Header__Text">
            <h1>The Connected Awards</h1>
            <h3>Learn about us</h3>
          </div>
          <br />
          <br />
          <div className="About__Show__image">
            <img src="/img/6.png" alt="show" />
          </div>
          <div className="Showcase__Column">
            <div className="Showcase__Row order-2">
              <h4> The Connected Awards</h4>
              <p>
                We are a small team that believes in creating new norms for the
                technological work culture. Techies should be celebrated because
                of the effort, skills, strength they put to make the world a
                better place. Every business will strive X 10 times when they
                utilize digital solutions to simplify their work done. As an
                independent body, we are not influenced by any brand, individual
                or government agency. We let the voters decide!!
              </p>
              <button className="button Showcase__btn-1">Learn More</button>
            </div>

            <div className="Showcase__Row">
              <div className="Showcase__images">
                <img src="/img/1.png" alt="show" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
