import React from "react";
import Lottie from "react-lottie";
import "./style.css";
import animationData from "./construction.json";

const ConstructionScreen = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="loading__screen">
      <div className="under__contruction__container">
      <Lottie options={defaultOptions} height={400} width={400} />
      <p className="loading__text">WORK IN PROGRESS</p>
      </div>
    </div>
  );
};

export default ConstructionScreen;
