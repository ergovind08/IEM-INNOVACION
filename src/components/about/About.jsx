import Footer from "../footer/Footer";
import AboutSlider from "./AboutSlider";
// import ChiefGuest from "./ChiefGuest";
import "./About.css";
// import ChiefGuestCard from "./ChiefGuestCard";
// import Winners from "./Winners";

import Name from "./Name";
import Card from "./Card";
import MediaCover from "./MediaCover";

const About = () => {
  // Create an array to store the components
  const cardComponents = [];

  // Populate the array with Card components
  for (let i = 0; i < 2; i++) {
    cardComponents.push(<Card key={i} />);
  }

  return (
    <div className="fixed top-0 mb-[100px] max-w-800 w-screen h-screen  overflow-auto">
      <AboutSlider />
      <Name className="mt-[100px]" />
      <div className=" container grid lg::grid-cols-2 gap-4 sm:flex-row md:grid-cols-1 lg:grid-cols-1">
        {cardComponents}
      </div>
      <MediaCover className="py-[70px] max-w-[900px] t-0" />
      <Footer />
    </div>
  );
};

export default About;
