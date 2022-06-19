import React from "react";

import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div className="Footer__Container">
        <div className="max__width">
          <div className="Footer__Grid">
            <div className="Footer__Row">
              <h3>About </h3>
              <li>The Connected Magazine</li>
              <li>Future Editions</li>
              <li>Celebrated Techies</li>
              <li>Past Editions</li>
              <li>Make A Donation</li>
            </div>
            <div className="Footer__Row">
              <h3>Legal</h3>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </div>
            <div className="Footer__Row">
              <h3>Follow</h3>
              <li>
                <FaLinkedin /> Linkedin
              </li>
            </div>
            <div className="Footer__Row">
              <h3>Contact</h3>
              <li>
                {" "}
                <RiMessage3Fill /> hello@theconnectedawards.com
              </li>
            </div>
          </div>
          <div className="Footer__Talk">
            <div>
              <Image
                src="/icons/logo2.svg"
                alt="logo"
                height="70px"
                width="70px"
              />
              <h4>Celebrating Techies GloballyCelebrating Techies Globally</h4>
            </div>
            <h4>© 2022 The Connected Awards - All rights reserved</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
