import Squares from "../components/Squares";
import Dither from "../components/Dither"

function Background2() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,   
        backgroundColor: "#000000ff"
      }}
    
    >
      
      

    
    <Dither
        waveColor={[0.32,0.15,1]}
        disableAnimation={false}
        enableMouseInteraction
        mouseRadius={1}
        colorNum={4}
        pixelSize={2}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.05}
    />
    </div>
    
  );
}

export default Background2;
