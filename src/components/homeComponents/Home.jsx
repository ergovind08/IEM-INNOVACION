import React from "react";
import AboutTheEvent from "./AboutTheEvent";
import "./Home.css";
import CountDown from "./CountDown";
import Events from "./Events";
import Registeration from "./Registeration";
import Footer from "../footer/Footer";
import Partners from "./Partners";
import Media from "./Media";
import News from "./news";
// import Innovacion from "./Innovacion/Innovacion";
import Hero from "../Hero/Hero";
import Navbar from "../navbarComponents/Navbar";
// import Collaborator from "./collaborators/Collaborator";
import TeamDetail from "../teamdetail/teamdetail";

const Home = () => {
  return (
    <div className="fixed top-20 bottom-0 left-0 right-0 w-screen h-full overflow-auto">
      {/* <Navbar /> */}
      <Hero />
      <AboutTheEvent />
      <CountDown />
      <Events />

      <Media />
      <Partners />
      <News />
      {/* <Collaborator /> */}
      {/* <TeamDetail /> */}
      <Footer />
    </div>
  );
};

export default Home;
