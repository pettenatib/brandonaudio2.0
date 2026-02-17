import Silk from "../components/Silk"

function Background(){
    
    return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,   // 👈 pushes it behind everything
      }}
    >
      <Silk
        speed={10.1}
        scale={1.3}
        color="#6765a6"
        noiseIntensity={1.6}
        rotation={5.2}
      />
    </div>
  );
}
export default Background;