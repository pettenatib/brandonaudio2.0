import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../components/Player.css";
import ArtFate from "../assets/images/ArtFate.jpg";

export default function FloatingPlayer() {
  const [url] = useState("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`menudialog ${collapsed ? "collapsed" : ""}`}>
      <div className="menuouter">

        <div className="menuheader">
          <span>Media Player</span>
        </div>

        {!collapsed && (
          <>
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
          </>
        )}

        <div className="menubuttons">
          <div className="menutopborder"></div>

          {/* Hide / Show */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCollapsed(!collapsed);
            }}
          >
            <span>{collapsed ? "Show" : "Hide"}</span>
          </a>

          {/* Secondary button */}
          <a href="#">
            <span>^</span>
          </a>

        </div>

      </div>
    </div>
  );
}