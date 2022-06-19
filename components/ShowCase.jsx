import Image from "next/image";
import React from "react";

const ShowCase = () => {
  return (
    <>
      <div className="Showcase__container">
        <div className="max__width">
          <div className="Showcase__Column">
            <div className="Showcase__Row">
              <div className="Showcase__image">
                <Image src="/img/1.png" alt="show" width="1000" height="800" />
              </div>
            </div>
            <div className="Showcase__Row">
              <h4> The Connected Awards</h4>
           
              <p>
                The Connected Awards is an independent global awarding body for
                technology experts encouraging and appreciating their efforts in
                making the world better. We are committed to delivering a fair
                process that will allow the general public to decide the best in
                each category. Our ultimate goal is to increase the appreciative
                spirit in the tech space and recognize behind the screen solving
                problems with their acquired skills. Techies are SUPERSTARS!
              </p>
        
              <button className="button Showcase__btn-1">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowCase;
