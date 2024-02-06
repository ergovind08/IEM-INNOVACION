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
        className={`${classes.hero} justify-center w-full h-full -z-30`}
      >
        <div className={`${classes.herobox}`}>
          <Innovacion className="w-screen z-200  my-[200px] " />
          <div className={classes.headerbox}>
            <h1 className={`${classes.heading} `}>Innovacion</h1>
            <p className={classes.date}>March 8-10, 2024</p>
            <Link
              className={classes.anchorBtn}
              rel="noopener noreferrer"
              to="/events"
            >
              <Button
                link="/events"
                label="Explore Our Events"
                className={classes.btn}
              ></Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
