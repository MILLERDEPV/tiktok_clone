import React, { useRef } from "react";
import OptionsPlayer from "../optionsPlayer/optionsPlayer";
import UserInteractions from "../optionsPlayer/userInteractions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const src = "http://www.w3schools.com/html/movie.mp4";

export default function VideoPlayer() {
  const video = useRef(null);
  const icon = useRef(null);

  const stateIcon = (state) => {
    state
      ? (icon.current.style.opacity = 0.3) 
      : (icon.current.style.opacity = 0)
  };

  const pauseVideo = () => {
    if (video.current.paused) {
      video.current.play();
      stateIcon(false);
    } else {
      video.current.pause();
      stateIcon(true);
    }
  };

  return (
    <div className="video-container">
      <div className="video-inner-container">
        <UserInteractions/>
        <FontAwesomeIcon
          ref={icon}
          onClick={pauseVideo}
          className="play-icon"
          icon={faPlay}
          style={{ color: "#fff" }}
        />
        <video
          onClick={pauseVideo}
          src={src}
          loop
          ref={video}
        ></video>
        <OptionsPlayer/>
      </div>
    </div>
  );
}
