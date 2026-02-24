import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import ReactPlayer from "react-player";

export default function FloatingPlayer() {
  const nodeRef = useRef(null);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [url, setUrl] = useState(
    "https://open.spotify.com/track/7Bc9dBfzx2RyVh3TiATgz2?si=f6c013028f0641e7"
  );

  const styles = {
    window: {
      width: "320px",
      background: "#111",
      borderRadius: "12px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
      overflow: "hidden",
      position: "fixed",
      zIndex: 1000,
    },
    header: {
      padding: "8px",
      cursor: "grab",
      background: "#1e1e1e",
      display: "flex",
      alignItems: "center",
    },
    icon: {
      color: "#888",
      fontSize: "18px",
    },
    content: {
      padding: "10px",
    },
  };

  

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".handle"
      position={position}
      onDrag={(e, data) => {
        setPosition({ x: data.x, y: data.y });
      }}
    >
      <div ref={nodeRef} style={styles.window}>
        <div className="handle" style={styles.header}>
          <span style={styles.icon}>⠿</span>
        </div>

        <div style={styles.content}>
          <ReactPlayer
            url={url}
            controls
            width="100%"
            height="60px"
          />
        </div>
      </div>
    </Draggable>
  );
}
