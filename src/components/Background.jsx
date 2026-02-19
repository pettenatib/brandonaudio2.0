import Squares from "../components/Squares";

function Background() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,   // 👈 pushes it behind everything
        backgroundColor: "#000000ff"
      }}
    >
      <Squares
        speed={0.21}
        squareSize={40}
        direction="diagonal"
        borderColor="#4d5a60"
        hoverFillColor="#030822"
      />
    </div>
  );
}

export default Background;
