import React from "react";
import { useState } from "react";
import classes from "./Navbar.module.css";
import * as Scroll from "react-scroll";

import { FiMenu } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { HashLink as Link } from "react-router-hash-link";
// import Dropdown from "./Dropdown";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/Logo.png";
import GrabBitBtn from "../common/GrabBitBtn/GrabBitBtn";
import Iemlogo from "../../assets/images.png";
import Uemlogo from "../../assets/uem.png";
import clickSound from "./echo.mp3";
import hoverSound from "./hover1.wav";

// const Scroll = require("react-scroll");

const Navbar = () => {
  const Drop = Scroll.Link;
  const [scrolled, isScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  // const [drop, setDrop] = useState(false);
  const audioRef = React.useRef(null);
  const hoverAudioRef = React.useRef(null);

  const handleChange = () => {
    audioRef.current.play();
  };
  const handleMouseEnter = () => {
    hoverAudioRef.current.play(); // Play the hover sound when mouse enters
  };

  window.onscroll = () => {
    isScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <header
      className={`${!scrolled ? classes.header : classes.scrolledHeader}`}
      style={{ fontFamily: "montserrat" }}
    >
      <div className={classes.elements}>
        <div className={classes.logobox}>
          <Drop
            activeClass={classes.active}
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={600}
          >
            {/* IEM Logo */}
            <Link to="/" >
              <img
                src={Iemlogo}
                alt="/"
                className={`${classes.logo} -mb-[20px] mt-0`}
              />
            </Link>
          </Drop>
        </div>

        {/* Desktop Menu */}
        <div className={classes.navbox}>
          <ul className={classes.nav}>
            <li className={classes.navLink}>
              <Drop
                activeClass={classes.active}
                to="home"
                spy="true"
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link
                  className={classes.homeLink}
                  style={{ fontFamily: "montserrat" }}
                  to="/"
                  onClick={handleChange}
                  onMouseEnter={handleMouseEnter}
                >
                  Home
                </Link>
              </Drop>
            </li>
            <li className={classes.navLink}>
              <Drop
                activeClass={classes.active}
                to="about"
                spy="true"
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link
                  className={classes.homeLink}
                  style={{ fontFamily: "montserrat" }}
                  to="/about"
                  onClick={handleChange}
                  onMouseEnter={handleMouseEnter}
                >
                  About
                </Link>
              </Drop>
            </li>
            <li className={classes.navLink}>
              <Drop
                activeClass={classes.active}
                to="about"
                spy="true"
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link
                  className={classes.homeLink}
                  style={{ fontFamily: "montserrat" }}
                  to="/schedule"
                  onClick={handleChange}
                  onMouseEnter={handleMouseEnter}
                >
                  Schedule
                </Link>
              </Drop>
            </li>

            <Link
              to="/events"
              onClick={handleChange}
              onMouseEnter={handleMouseEnter}
            >
              <li
                className={`${classes.dropLink} mr-0 mb-0`}
                // onClick={() => setDrop(!drop)}
              >
                {/* {drop ? <Dropdown click={() => setDrop(!drop)} /> : ""} */}
                Events
                {/* <FontAwesomeIcon
                  size="sm"
                  style={{
                    display: "inline-block",
                    marginLeft: "0.4rem",
                    color: "white",
                  }}
                  icon={faArrowDown}
                  fade
                /> */}
              </li>
            </Link>
            <li className={classes.navLink}>
              <Drop
                activeClass={classes.active}
                to="ambassador"
                spy="true"
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link
                  className={classes.homeLink}
                  style={{ fontFamily: "montserrat" }}
                  to="/team"
                  onClick={handleChange}
                  onMouseEnter={handleMouseEnter}
                >
                  Team
                </Link>
              </Drop>
            </li>
            <li className={classes.navLink}>
              <Drop
                activeClass={classes.active}
                to="contact"
                spy="true"
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link
                  className={classes.homeLink}
                  style={{ fontFamily: "montserrat" }}
                  to="/contact"
                  onClick={handleChange}
                  onMouseEnter={handleMouseEnter}
                >
                  Contact
                </Link>
              </Drop>
            </li>
          </ul>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://grabbits.vercel.app/"
          >
            {/* <button className={classes.btn}>GrabBit</button> */}
            {/* <div className={classes.btn}>
              <GrabBitBtn label="GrabBit" />
            </div> */}
          </a>

          <div className={classes.hamburger} onClick={() => setMobile(!mobile)}>
            {mobile ? (
              <FontAwesomeIcon
                icon={faXmark}
                style={{ color: "white" }}
                size="3x"
              />
            ) : (
              <FiMenu size={30} />
            )}
          </div>
        </div>

        {/* UEM Logo */}
        <Link to="/">
          <img
            src={Uemlogo}
            alt="/"
            className={`${classes.logo} flex flex-end w-[89px] sm:w-[100px] sm:ml-14 mr-5 -mb-[20px] mt-0`}
          />
        </Link>

        {/* Mobile Menu */}
        <div className={`${!mobile ? classes.none : classes.mobileBox}`}>
          {/* <a target="_blank" rel="noopener noreferrer" href="">
            <button className={classes.btn1}>GrabBit</button>
            <div className={classes.btn1}>
              <GrabBitBtn label="GrabBit" />
            </div>
          </a> */}

          {/* Mobile Page */}

          <ul className={classes.mobileNav}>
            <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                activeClass={classes.active}
                to="home"
                spy="true"
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <HashLink className={classes.homeLink} to="/">
                  Home
                </HashLink>
              </Drop>
            </li>
            <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                activeClass={classes.active}
                to="about"
                spy="true"
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link className={classes.homeLink} to="/about">
                  About
                </Link>
              </Drop>
            </li>
            <Link to="/events">
              <li
                className={`${classes.mobLink}`}
                // onClick={() => setDrop(!drop)}
              >
                {/* {drop ? (
                <Dropdown
                  click={() => {
                    setDrop(!drop);
                    setMobile(!mobile);
                  }}
                />
              ) : (
                ""
              )} */}
                Events
                <FontAwesomeIcon
                  size="sm"
                  style={{
                    display: "inline-block",
                    marginLeft: ".3rem",
                    color: "white",
                  }}
                  icon={faArrowDown}
                  fade
                />
              </li>
            </Link>
            <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                activeClass={classes.active}
                to="ambassador"
                spy="true"
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link className={classes.homeLink} to="/leaderboard">
                  Team
                </Link>
              </Drop>
            </li>
            <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                activeClass={classes.active}
                to="contact"
                spy="true"
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link className={classes.homeLink} to="/contact">
                  Contact
                </Link>
              </Drop>
            </li>
          </ul>
        </div>
      </div>
      {/* Audio element for the sound effect */}
      <audio ref={audioRef} src={clickSound} />
      <audio ref={hoverAudioRef} src={hoverSound} />
    </header>
  );
};

export default Navbar;
