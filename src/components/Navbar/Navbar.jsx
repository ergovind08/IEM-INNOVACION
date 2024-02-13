import React from "react";
import { useState } from "react";
import classes from "./Navbar.module.css";
import { FiMenu } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../../assets/Logo.png";
import Iemlogo from "../../assets/images.png";
import Uemlogo from "../../assets/uem.png";
import clickSound from "./echo.mp3";
import hoverSound from "./hover1.wav";

const Navbar = () => {
  const [scrolled, isScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const audioRef = React.useRef(null);
  const hoverAudioRef = React.useRef(null);

  const handleChange = () => {
    audioRef.current.play();
  };

  const handleMouseEnter = () => {
    hoverAudioRef.current.play();
  };

  window.onscroll = () => {
    isScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleToggleMobileMenu = () => {
    setMobile(!mobile);
  };

  return (
    <header
      className={`${!scrolled ? classes.header : classes.scrolledHeader}`}
      style={{ fontFamily: "Montserrat" }}
    >
      <div className={classes.elements}>
        <div className={classes.logobox}>
          <Link to="/">
            <img
              src={Iemlogo}
              alt="/"
              className={`${classes.logo} -mb-[20px] mt-0`}
            />
          </Link>
        </div>

        <div className={classes.navbox}>
          <ul className={`${classes.nav} ${mobile ? classes.mobileNav : ""}`}>
            <li className={classes.navLink}>
              <Link
                className={classes.homeLink}
                to="/"
                onClick={handleChange}
                onMouseEnter={handleMouseEnter}
                style={{ fontFamily: "Montserrat" }}
              >
                Home
              </Link>
            </li>
            <li className={classes.navLink}>
              <Link
                className={classes.homeLink}
                to="/about"
                onClick={handleChange}
                onMouseEnter={handleMouseEnter}
                style={{ fontFamily: "Montserrat" }}
              >
                About
              </Link>
            </li>
            <li className={classes.navLink}>
              <Link
                className={classes.homeLink}
                to="/schedule"
                onClick={handleChange}
                onMouseEnter={handleMouseEnter}
                style={{ fontFamily: "Montserrat" }}
              >
                Schedule
              </Link>
            </li>
            <li className={classes.navLink}>
              <Link
                className={classes.homeLink}
                to="/events"
                onClick={handleChange}
                onMouseEnter={handleMouseEnter}
                style={{ fontFamily: "Montserrat" }}
              >
                Events
              </Link>
            </li>
            <li className={classes.navLink}>
              <Link
                className={classes.homeLink}
                to="/team"
                onClick={handleChange}
                onMouseEnter={handleMouseEnter}
                style={{ fontFamily: "Montserrat" }}
              >
                Team
              </Link>
            </li>
            <li className={classes.navLink}>
              <Link
                className={classes.homeLink}
                to="/contact"
                onClick={handleChange}
                onMouseEnter={handleMouseEnter}
                style={{ fontFamily: "Montserrat" }}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className={classes.hamburger} onClick={handleToggleMobileMenu}>
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

        <Link to="/">
          <img
            src={Uemlogo}
            alt="/"
            className={`${classes.logo} flex flex-end w-[89px] sm:w-[100px] sm:ml-14 mr-5 -mb-[20px] mt-0`}
          />
        </Link>

        <div className={`${!mobile ? classes.none : classes.mobileBox}`}>
          <ul className={classes.mobileNav}>
            <li>
              <Link
                className={classes.homeLink}
                to="/"
                onClick={handleToggleMobileMenu}
                style={{ fontFamily: "Montserrat" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={classes.homeLink}
                to="/about"
                onClick={handleToggleMobileMenu}
                style={{ fontFamily: "Montserrat" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={classes.homeLink}
                to="/schedule"
                onClick={handleToggleMobileMenu}
                style={{ fontFamily: "Montserrat" }}
              >
                Schedule
              </Link>
            </li>
            <li>
              <Link
                className={classes.homeLink}
                to="/events"
                onClick={handleToggleMobileMenu}
                style={{ fontFamily: "Montserrat" }}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                className={classes.homeLink}
                to="/team"
                onClick={handleToggleMobileMenu}
                style={{ fontFamily: "Montserrat" }}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                className={classes.homeLink}
                to="/contact"
                onClick={handleToggleMobileMenu}
                style={{ fontFamily: "Montserrat" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <audio ref={audioRef} src={clickSound} />
      <audio ref={hoverAudioRef} src={hoverSound} />
    </header>
  );
};

export default Navbar;
