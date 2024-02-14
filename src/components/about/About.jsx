import React, { useState } from "react";
import Footer from "../footer/Footer";
import AboutSlider from "./AboutSlider";
import Name from "./Name";
import Card from "./Card";
import MediaCover from "./MediaCover";
import VerticalTabs from "./VerticalTabs";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import './About.css';
const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className="conatainer">
      {/* <AboutSlider /> */}

      <div
        className="container w-screen sm:w-[1200px] flex-col"
        style={{ fontFamily: "montserrat" }}
      >
        <Name className=" text-white " style={{ fontFamily: "montserrat" }} />
        <div>

          <div className="flex sm:flex-row flex-col justify-between items-center "
            style={{
              fontFamily: "montserrat",
              maxWidth: "auto",
            }}
          >
            <VerticalTabs
              className="z-[100]"
              value={activeTab}
              onChange={handleTabChange}
            />
            {activeTab === 0 && <Card className="ml-10 rounded-xl" />}{" "}
            {activeTab === 1 && (
              <div>
                <Card2 />
              </div>
            )}
            {activeTab === 2 && (
              <div>
                <Card3 />
              </div>
            )}
            {activeTab === 3 && (
              <div>
                <Card4 />
              </div>
            )}
          </div>
        </div>
      </div>
      <MediaCover />
      <Footer />
    </div>
  );
};

export default About;
