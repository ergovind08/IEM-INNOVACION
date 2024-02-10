import React, { useState } from "react";
import Footer from "../footer/Footer";
import AboutSlider from "./AboutSlider";
import Name from "./Name";
import Card from "./Card";
import MediaCover from "./MediaCover";
import VerticalTabs from "./VerticalTabs";

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <AboutSlider />

      <div
        className="container w-[1200px] flex-col"
        style={{ fontFamily: "montserrat" }}
      >
        <Name className=" text-white " style={{ fontFamily: "montserrat" }} />
        <div>
          <div
            style={{
              fontFamily: "montserrat",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: "auto",
            }}
          >
            <VerticalTabs
              className=" "
              value={activeTab}
              onChange={handleTabChange}
            />
            {activeTab === 0 && <Card className="ml-10  rounded-xl" />}{" "}
            {activeTab === 1 && (
              <div>
                <Card />
              </div>
            )}
            {activeTab === 2 && (
              <div>
                <Card />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
