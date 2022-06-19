import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layouts = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layouts;
