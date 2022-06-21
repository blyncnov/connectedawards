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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
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
