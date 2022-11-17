import { useState, useEffect } from "react";

const useVideoPlayer = (videoElement: any) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: false,
    isFullScreen: false,
  });

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };
  useEffect(() => {
    playerState.isPlaying
      ? videoElement.current.play()
      : videoElement.current.pause();
  }, [playerState.isPlaying, videoElement]);

  const handleOnTimeUpdate = () => {
    const progress =
      (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setPlayerState({
      ...playerState,
      progress,
    });
  };

  const handleVideoProgress = (_: any, value: any) => {
    const manualChange = Number(value);
    videoElement.current.currentTime =
      (videoElement.current.duration / 100) * manualChange;
    setPlayerState({
      ...playerState,
      progress: manualChange,
    });
  };

  const handleVideoSpeed = (event: any) => {
    const speed = Number(event.target.value);
    videoElement.current.playbackRate = speed;
    setPlayerState({
      ...playerState,
      speed,
    });
  };

  const toggleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  };

  useEffect(() => {
    playerState.isMuted
      ? (videoElement.current.muted = true)
      : (videoElement.current.muted = false);
  }, [playerState.isMuted, videoElement]);

  const toggleFullscreen = () => {
    if (videoElement.current) {
      setPlayerState({
        ...playerState,
        isFullScreen: !playerState.isFullScreen,
      });
      videoElement.current.requestFullscreen();
    } else {
      videoElement.current.exitFullscreen();
    }
  };

  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
    toggleFullscreen,
  };
};

export default useVideoPlayer;
