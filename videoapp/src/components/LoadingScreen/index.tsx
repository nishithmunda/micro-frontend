import React from "react";
import Lottie from "react-lottie";
import "./style.css";
import animationData from "./panda-eats-popcorn.json";

const LoadingScreen = () => {
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
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default LoadingScreen;
