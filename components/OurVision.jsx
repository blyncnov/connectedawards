import React from "react";
import Image from "next/image";

import OurVisionData from "../data/Vision";

const OurVision = () => {
  return (
    <>
      <div className="Vision__Container">
        <div className="max__width">
          <div className="Vision__Grid">
            {OurVisionData.map((vision) => {
              return (
                <div key={vision.id} className="Vision__Row">
                  <div>
                    <Image
                      src={vision.icon}
                      alt={vision.name}
                      width="100px"
                      height="80px"
                    />
                  </div>
                  <h4>{vision.name}</h4>
                  <p>{vision.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurVision;
