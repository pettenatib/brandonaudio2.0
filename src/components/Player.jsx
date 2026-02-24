import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../components/Player.css";

import ArtFate from "../assets/images/ArtFate.jpg"

export default function FloatingPlayer() {
  const [url] = useState("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

  return (
    <div className="menudialog">
      <div className="menuouter">

        <div className="menuheader">
          <span>Media Player</span>
        </div>

        <div className="menutoptext">
          Now Playing:
        </div>

        <div className="menuoptions">
  <div className="menutopborder"></div>
  <div className="menubottomborder"></div>

  <div className="media-row">
    <div className="artwork">
      <img src={ArtFate} alt="cover art" />
    </div>

    <div className="player">
      <ReactPlayer
        url={url}
        controls
        width="100%"
        height="60px"
      />
    </div>
  </div>
</div>

        <div className="menubuttons justify-center">
          <div className="menutopborder"></div>
          <a href="#"><span>Hide</span></a>
          <a href="#"><span>^</span></a>
        </div>

      </div>
    </div>
  );
}