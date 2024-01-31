import React from "react";
import AboutTheEvent from "./AboutTheEvent";
// import CircularStrip from './AboutTheEvent'
import "./Home.css";
import CountDown from "./CountDown";
// import ComingSoon from "./ComingSoon";
import Events from "./Events";
import Registeration from "./Registeration";
import Footer from "../footer/Footer";
import Partners from "./Partners";
import Media from "./Media";
import Innovacion from "./Innovacion/Innovacion";
import Hero from "../../Sambhav-Website/client/src/components/Hero/Hero";

const Home = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full mt-20 overflow-auto">
      <Hero />
      {/* <Innovacion /> */}
      <AboutTheEvent />
      <CountDown />
      <Events />
      <Registeration />
      <Media />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
