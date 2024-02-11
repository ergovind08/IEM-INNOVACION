import React from "react";
import classes from "./Hero.module.css";
import { Link } from "react-router-dom";
import Button from "../common/Button/Button";
import text_img from "./text.svg";

import Innovacion from "../../components/homeComponents/Innovacion/Innovacion";
// import { logo } from "../../../../../logo";
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className={`${classes.hero} justify-center mt-0 w-full h-full -z-30`}
        style={{ fontFamily: "montserrat" }}
      >
        <Innovacion className=" absolute w-screen z-200  my-[300px] " />
        <div className={`${classes.herobox}`}>
          <div className={classes.headerbox} style={{ marginTop: "-350px" }}>
            <h1 className={`${classes.heading} text-extrabold`}>
              <span>I</span>
              <span>n</span>
              <span>n</span>
              <span>o</span>
              <span>v</span>
              <span>a</span>
              <span>c</span>
              <span>i</span>
              <span>ó</span>
              <span>n</span>
            </h1>

            <p
              className={`${classes.date} text-yellow-300`}
              style={{ fontFamily: "montserrat" }}
            >
              March 8-10, 2024
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
