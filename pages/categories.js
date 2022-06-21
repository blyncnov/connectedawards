import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import Techiesdata from "../data/Techies";

const Categories = () => {
  return (
    <>
      <div className="General__Container">
        <div className="max__width">
          <div className="About__Header__Text">
            <h1>Voting Categories</h1>

            <div className="HeroSection__Input__Section">
              <form className="Hero__Form">
                <input
                  type="text"
                  className="HeroSection__Input"
                  placeholder="Nominees Name, Nominees category"
                />
                <button className="button HeroSection__btn-1">Search</button>
              </form>
            </div>
          </div>
          <br />
          <br />
          <div className="Future__Grid Nominee__Grid">
            {Techiesdata.map((techie) => {
              return (
                <div key={techie.id} className="Future__Box ">
                  <BiCategoryAlt style={{ backgroundColor: "#EEE8F2" }} />
                  <h5 className="Nominee__role">{techie.role}</h5>
                  <div className="Nominee__arrow">
                    <BsArrowRight />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
