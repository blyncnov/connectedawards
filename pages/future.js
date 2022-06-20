import React from "react";
import Image from "next/image";

import { GiAfrica } from "react-icons/gi";

const Donations = () => {
  return (
    <>
      <div className="General__Container">
        <div className="max__width">
          <div className="About__Header__Text">
            <h1>Future Editions</h1>
            <h3>Nominate candidates for future editions</h3>
          </div>
          <br />
          <br />
          <div className="Future__Grid">
            <div className="Future__Box">
              <GiAfrica
                style={{
                  fontSize: "2em",
                  backgroundColor: "#EEE8F2",
                }}
              />
              <h3>East African Edition</h3>
              <button className="button  full Nominate__btn">Nominate</button>
            </div>
            <div className="Future__Box">
              <GiAfrica
                style={{
                  fontSize: "2em",
                  backgroundColor: "#EEE8F2",
                }}
              />
              <h3>East African Edition</h3>
              <button className="button Nominate__btn full">Nominate</button>
            </div>
            <div className="Future__Box ">
              <GiAfrica
                style={{
                  fontSize: "2em",
                  backgroundColor: "#EEE8F2",
                }}
              />
              <h3>East African Edition</h3>
              <button className="button  full Nominate__btn">Nominate</button>
            </div>
            <div className="Future__Box ">
              <GiAfrica
                style={{
                  fontSize: "2em",
                  backgroundColor: "#EEE8F2",
                }}
              />
              <h3>East African Edition</h3>
              <button className="button full Nominate__btn">Nominate</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donations;
