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
          <div className="About__Show__image">
            <Image src="/img/2.png" alt="show" width="1000" height="500" />
          </div>
          <div className="Showcase__Column">
            <div className="Showcase__Row">
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
                <Image src="/img/1.png" alt="show" width="1000" height="800" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
