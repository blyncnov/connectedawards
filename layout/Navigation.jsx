import Image from "next/image";
import React from "react";

import { FaBars } from "react-icons/fa";

const Navigation = () => {
  return (
    <>
      <div className="Navigation__Container">
        <div className="max__width">
          <div className="Navigation__Container--Navbar">
            <div className="Navigation__Column">
              <div className="Navigation__Row">
                <div className="Navigation__Logo">
                  <Image
                    src="/logo.svg"
                    alt="logo"
                    height="70px"
                    width="70px"
                  />
                </div>
                <div className="Navigation__Items">
                  <ul className="Navigation__Lists">
                    <li>Categories</li>
                    <li>Past editions</li>
                    <li>Future editions</li>
                    <li>About us</li>
                    <li>Make a donation</li>
                  </ul>
                  <div className="Navigation__Actions">
                    <button className="button Navigation__btn-1">Log in</button>
                    <button className="button Navigation__btn-2">
                      Create Account
                    </button>
                  </div>
                  <div className="Navigation__Mobile">
                    <FaBars style={{ fontSize: "1.5em" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
