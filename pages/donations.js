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
              {/* <h4> The Connected Awards</h4> */}
              <ul className="Peers">
                <li> The Connected Hack-ton in Major Cities across Africa</li>
                <li>
                  The Peer to Gear Competition for Secondary School Students in
                  Africa
                </li>
                <li>Marathon Events across various Cities in Africa</li>
                <li>
                  Tech-awareness across various schools, towns and villages in
                  Africa
                </li>
                <li>
                  Empowering more ladies in tech to bring a balance to the
                  African ecosystem
                </li>
              </ul>
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
