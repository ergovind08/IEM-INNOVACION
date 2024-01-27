import Footer from "../footer/Footer";
import AboutSlider from "./AboutSlider";
import ChiefGuest from "./ChiefGuest";
import "./About.css";
// import ChiefGuestCard from "./ChiefGuestCard";
import Winners from "./Winners";

const About = () => {
  return (
    <div className="fixed top-0 w-screen h-screen mt-20 overflow-auto">
      <AboutSlider />
      <ChiefGuest />
      <Winners />
      <Footer />
    </div>
  );
};

export default About;
