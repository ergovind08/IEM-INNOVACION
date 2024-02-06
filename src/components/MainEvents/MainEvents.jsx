import React, { useEffect } from "react";
import EventCard from "../common/EventCard/EventCard";
import classes from "./MainEvents.module.css";
// import SwupOverlayTheme from "@swup/overlay-theme";
// import Swup from "swup";
import { eventsData } from "../../assets/eventsData";
import ReactGA from "react-ga";

const MainEvents = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });

  return (
    <>
      <div className={classes.events_section}>
        <h1 className={classes.heading}>Events</h1>
        <img src="x" alt="" />
        <div className={classes.events_container}>
          {eventsData.map((eventData, i) => {
            return <EventCard eventData={eventData} key={i} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MainEvents;
