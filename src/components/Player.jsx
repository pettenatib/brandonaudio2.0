import React, { useRef, useState } from "react";
import Draggable from "react-draggable";

function Player() {
  const nodeRef = useRef(null);
  const [position, setPosition] = useState({ x: 100, y: 100 });

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
          Floating content here
        </div>
      </div>
    </Draggable>
  );
}

const styles = {
  window: {
    position: "fixed",
    width: 300,
    background: "#ffffff",
    borderRadius: 12,
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    overflow: "hidden",
    zIndex: 1000,
  },
  header: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "8px 12px",
    cursor: "grab",
    background: "#f5f5f5",
    borderBottom: "1px solid #eee",
  },
  icon: {
    fontSize: 18,
    userSelect: "none",
  },
  content: {
    padding: 20,
  },
};

export default Player;
