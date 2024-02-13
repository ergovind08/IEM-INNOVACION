import React from "react";
import AboutTheEvent from "./AboutTheEvent";
import "./Home.css";
import CountDown from "./CountDown";
import Events from "./Events";
import Registeration from "./Registeration";

import Footer from "../footer/Footer";
import Partners from "./Partners";
import Media from "./Media";

import Hero from "../Hero/Hero";
import Navbar from "../navbarComponents/Navbar";

import TeamDetail from "../teamdetail/teamdetail";
import classes from "../Hero/Hero.module.css";
import { Link } from "react-router-dom";
import Button from "../common/Button/Button";

import Slideimage from "./MediaSlide/Slideimage";

const Home = () => {
  return (
    <div
      className="fixed top-20 bottom-0 left-0 right-0 w-screen h-full overflow-auto"
      style={{ fontFamily: "montserrat" }}
    >
      <Hero />

      <div className="container absolute top-[70%] sm:top-[78%] left-2/4 -translate-x-2/4 -translate-y-2/4 pb-0 pt-3 ">
        <Link
          className={`${classes.anchorBtn} justify-center`}
          rel="noopener noreferrer"
          to="/events"
        >
          <Button
            link="/events"
            label="Register Now"
            className={`${classes.btn}`}
            style={{ marginTop: "200px" }}
          ></Button>
        </Link>
      </div>

      <AboutTheEvent />
      <CountDown />
      <Events />
      <Registeration />

      <Media />
      {/* <Partners /> */}

      <TeamDetail />
      <Slideimage />
      <Footer />
    </div>
  );
};

export default Home;
