import React, { useState, useRef } from "react";

const Card = ({ dataImage, children }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const cardRect = card.getBoundingClientRect();

    setMouseX(e.pageX - cardRect.left - cardRect.width / 2);
    setMouseY(e.pageY - cardRect.top - cardRect.height / 2);
  };

  const handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay);
  };

  const handleMouseLeave = () => {
    setMouseLeaveDelay(
      setTimeout(() => {
        setMouseX(0);
        setMouseY(0);
      }, 10000)
    );
  };

  const cardStyle = {
    transform: `rotateY(${(mouseX / width) * -40}deg) rotateX(${
      (mouseY / height) * -30
    }deg) translateX(${(mouseX / width) * -20}px) translateY(${
      (mouseY / height) * -20
    }px )`,
    transitionDuration: "8s",
  };

  // const cardBgTransform = {
  //   transform: `translateX(${(mouseX / width) * -20}px) translateY(${
  //     (mouseY / height) * -40
  //   }px )`,
  //   transitionDuration: "8s",
  // };

  const cardBgImage = {
    backgroundImage: `url(${dataImage})`,
  };

  return (
    <div
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div className="card bg-bleck" style={cardStyle}>
        <div
          className="card-bg rounded-xl bg-black bg-transparent "
          style={cardBgImage}
        ></div>
        <div className="card-info">{children}</div>
      </div>
    </div>
  );
};

export default Card;
