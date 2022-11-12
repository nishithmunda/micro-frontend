import React from "react";
import Lottie from "react-lottie";
import animationData from "../../asset/movie.json";

const Logo = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Lottie
      width={60}
      height={60}
      options={defaultOptions}
    />
  );
};

export default Logo;
