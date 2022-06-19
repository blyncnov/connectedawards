import React from "react";

import { HiArrowNarrowRight } from "react-icons/hi";

const HeroSection = () => {
  return (
    <>
      <div className="HeroSection__Container">
        <div className="max__width">
          <main>
            <div className="HeroSection__Container__Text">
              <h1>First Ever Tech Personality Award For Africans in Europe</h1>
            </div>

            <div className="colum2">
              <div className="HeroSection__Input__Section">
                <form>
                  <input
                    type="text"
                    className="HeroSection__Input"
                    placeholder="Nominees Name, Nominees category"
                  />
                  <button className="button HeroSection__btn-1">Search</button>
                </form>
              </div>
              <h3>
                View All Categories <HiArrowNarrowRight />
              </h3>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
