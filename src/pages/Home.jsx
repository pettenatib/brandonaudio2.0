import Header from "../components/Header";
import ASCIIText from '../components/ASCIIText';
import "../index.css";

function Home() {
    return (
        <>
            

  
    




            
            <div className="w-screen h-screen flex items-center justify-center">
  <div className="w-[90vw] h-[70vh] rounded-md bg-black border border-gray-800 p-6">
    <h1 className="text-2xl  text-white">Home Page</h1>
    <button
  onClick={() =>
    setUrl("https://open.spotify.com/track/7Bc9dBfzx2RyVh3TiATgz2?si=f6c013028f0641e7")
  }
>
  Play Spotify Track
</button>

<button
  onClick={() =>
    setUrl("https://www.youtube.com/watch?v=VIDEO_ID")
  }
>
  Play YouTube Mix
</button>
  </div>
</div>





            
        </>
    )
}
export default Home;