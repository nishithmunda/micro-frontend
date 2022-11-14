import React from "react";
import "./style.css";
import VideoPlayer from "../VideoPlayer";

const VideoScreen = () => {
  return (
    <div className="videoscreen">
      <div className="videoscreen__detail__section">
        <div className="video__player__container">
          <VideoPlayer url="" />
        </div>
        <div className="video__info__container">
          <div className="video__info">
            <img />
            <div className="video__info__right"></div>
          </div>
          <div className="video__sypnosis"></div>
        </div>
      </div>
      <div className="videoscreen__recommand__section"></div>
    </div>
  );
};

export default VideoScreen;
