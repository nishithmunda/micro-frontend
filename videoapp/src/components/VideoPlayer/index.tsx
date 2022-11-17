import React, { useEffect, useLayoutEffect, useRef } from "react";
import useVideoPlayer from "./hook";
import video from "../../video/big_buck_bunny.mp4";
import { Grid, Slider } from "@material-ui/core";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import PauseTwoToneIcon from "@material-ui/icons/PauseTwoTone";
import VolumeUpRoundedIcon from "@material-ui/icons/VolumeUpRounded";
import VolumeOffRoundedIcon from "@material-ui/icons/VolumeOffRounded";
import FullscreenTwoToneIcon from "@material-ui/icons/FullscreenTwoTone";
import FullscreenExitTwoToneIcon from "@material-ui/icons/FullscreenExitTwoTone";

import { styled, useTheme } from "@material-ui/styles";

import "./style.css";

const CustomSlider = styled(Slider)({
  color: "#FCFCFC",
});

const VideoPlayer = ({ url, placeholderImage }: VideoPlayerProp) => {
  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
    toggleFullscreen,
  } = useVideoPlayer(videoElement);

  return (
    <>
      <div className="container">
        <div
          className={`video-wrapper ${playerState.isFullScreen && "fullsreen"}`}
        >
          <video
            poster={placeholderImage}
            className="main-video"
            width="100%"
            height="100%"
            ref={videoElement}
            onTimeUpdate={handleOnTimeUpdate}
            // controls
          >
            <source src={video} type="video/mp4" />
          </video>
          {/* <div className="mask"> */}
          <div className="control">
            <Grid container spacing={2}>
              <Grid item xs={1}>
                <div className="play center">
                  {playerState?.isPlaying ? (
                    <PauseTwoToneIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => togglePlay()}
                    />
                  ) : (
                    <PlayArrowRoundedIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => togglePlay()}
                    />
                  )}
                </div>
              </Grid>
              <Grid item xs={10}>
                <div className="range center">
                  <CustomSlider
                    defaultValue={0}
                    aria-label="Small"
                    color="primary"
                    value={playerState.progress}
                    onChange={(_, e) => handleVideoProgress(_, e)}
                  />
                </div>
              </Grid>
              <Grid item xs={1}>
                <div className="volumne center spaceEvenly">
                  {playerState.isMuted ? (
                    <VolumeOffRoundedIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => toggleMute()}
                    />
                  ) : (
                    <VolumeUpRoundedIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => toggleMute()}
                    />
                  )}
                  {playerState.isFullScreen ? (
                    <FullscreenExitTwoToneIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => toggleFullscreen()}
                    />
                  ) : (
                    <FullscreenTwoToneIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => toggleFullscreen()}
                    />
                  )}
                </div>
              </Grid>
            </Grid>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;

interface VideoPlayerProp {
  url: string;
  placeholderImage?: string;
}
