import React from "react";
import classes from "./GrabBitBtn.module.css";
import grabby from "../../../assets/grabby.png";

const GrabBitBtn = ({
  margin,
  children,
  onClick,
  label,
  disabled,
  filled,
  padding = "5px 30px",
  fontSize = "20px",
  bgColor,
  link,
}) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.btn_container}
      >
        <button
          style={{
            margin: margin,
            padding: padding,
            fontSize: fontSize,
            backgroundColor: bgColor,
          }}
          className={filled ? classes.fill : classes.btn}
          onClick={onClick}
          disabled={disabled}
        >
          {label || children}
        </button>
        <img className={classes.img} src={grabby} alt="grabby" />
      </a>
    </>
  );
};

export default GrabBitBtn;
