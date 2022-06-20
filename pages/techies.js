import React from "react";

import Techiesdata from "../data/Techies";

const Techies = () => {
  return (
    <>
      <div className="General__Container">
        <div className="max__width">
          <div className="About__Header__Text">
            <h1>Celebrated Techies</h1>
            <h3>A look into some of our past winners</h3>
          </div>
          <br />
          <br />
          <div className="Future__Grid">
            {Techiesdata.map((techie) => {
              return (
                <div key={techie.id} className="Future__Box">
                  <div className="dummy__image"></div>
                  <h4>{techie.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Techies;
