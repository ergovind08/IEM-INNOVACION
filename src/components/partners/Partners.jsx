import React from "react";
import Footer from "../footer/Footer";
import CurrCol from "./CurrCol";
import PrevCol from "./PrevCol";

const Partners = () => {
  return (
    <div className="fixed top-0 w-screen h-screen mt-20 overflow-auto">
      <CurrCol />
      <PrevCol />
      <Footer />
    </div>
  );
};

export default Partners;
