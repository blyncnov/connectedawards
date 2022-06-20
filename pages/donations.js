import React from "react";
import Image from "next/image";

const Donations = () => {
  return (
    <>
      <div className="General__Container">
        <div className="max__width">
          <div className="About__Header__Text">
            <h1>Make A Donation</h1>
            <h3>
              Complete your nomination by contributing to the growth of
              technology in Africa
            </h3>
          </div>
          <br />
          <br />

          <div className="Showcase__Column">
            <div className="Showcase__Row order-2">
              <form>
                <label htmlFor="amount">
                  Enter Donation Amount <span>*</span>{" "}
                </label>
                <div className="DonateFlex">
                  <div className="dollar__btn">
                    <h1>$</h1>
                  </div>
                  <div>
                    <input type="text" className="donate__space" />
                  </div>
                </div>
              </form>
              <div>
                <button className="button Showcase__btn-1 full">
                  Make Donations
                </button>
              </div>
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
            </div>

            <div className="Showcase__Row">
              <div className="Showcase__images">
                <Image
                  src="https://theconnectedawards.com/Resource/7.png"
                  alt="show"
                  width="1000"
                  height="800"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donations;
