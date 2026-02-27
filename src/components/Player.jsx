import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ArtFate from "../assets/images/ArtFate.jpg";

export default function FloatingPlayer() {
  // 1. Use a direct high-quality MP3 link for guaranteed results
  const [url] = useState("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
  const [collapsed, setCollapsed] = useState(false);
  const [playing, setPlaying] = useState(false);

  const audioRef = useRef(null);
  const constraintsRef = useRef(null);

  // 2. Control the audio element whenever 'playing' state changes
  useEffect(() => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.play().catch(err => {
        console.error("Playback failed. This usually happens if the user hasn't clicked anything yet.", err);
      });
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  return (
    <div ref={constraintsRef} style={styles.screenBoundary}>
      {/* THE ACTUAL AUDIO ENGINE - Native is better than ReactPlayer for background audio */}
      <audio
        ref={audioRef}
        src={url}
        preload="auto"
        onPlay={() => console.log("AUDIO STARTED")}
        onPause={() => console.log("AUDIO PAUSED")}
      />

      <motion.div
        drag
        dragConstraints={constraintsRef}
        className={`menudialog ${collapsed ? "collapsed" : ""}`}
        style={styles.draggableCard}
      >
        <div className="menuouter">
          <div className="menuheader" style={{ cursor: 'grab' }}>
            <span>Media Player</span>
          </div>

          {!collapsed && (
            <>
              <div className="menutoptext">Now Playing:</div>
              <div className="menuoptions">
                <div className="menutopborder"></div>
                <div className="menubottomborder"></div>

                <div className="media-row">
                  <div className="artwork" style={styles.artContainer}>
                    <img src={ArtFate} alt="cover art" style={styles.artImage} />
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="menubuttons">
            <div className="menutopborder"></div>

            {/* Play/Pause Toggle */}
            <a href="#" onClick={(e) => { e.preventDefault(); setPlaying(!playing); }}>
              <span>{playing ? "[PAUSE]" : "[PLAY]"}</span>
            </a>

            <a href="#" onClick={(e) => { e.preventDefault(); setCollapsed(!collapsed); }}>
              <span>{collapsed ? "Show" : "Hide"}</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const styles = {
  screenBoundary: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw', height: '100vh',
    pointerEvents: 'none',
    zIndex: 9999
  },
  draggableCard: {
    pointerEvents: 'auto',
    position: 'absolute',
    bottom: '20px',
    right: '20px'
  },
  artContainer: {
    textAlign: 'center',
    padding: '10px'
  },
  artImage: {
    width: '80px',
    border: '1px solid #000'
  }
};