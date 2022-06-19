import Image from "next/image";
import React from "react";

import { TargetData } from "../data/Target";

const OurTarget = () => {
  return (
    <div>
      <div className="OurTarget__Container">
        <div className="max__width">
          <div className="Target__Text">
            <h1>Our Target</h1>
          </div>

          <div className="Target__Container">
            {TargetData.map((target) => {
              return (
                <div key={target.id} className="Target__Box">
                  <Image
                    src={target.icon}
                    alt={target.name}
                    width="100px"
                    height="80px"
                  />
                  <h3>{target.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTarget;
