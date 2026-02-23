import Header from "../components/Header";
import Banner from "../components/Banner"

import Threelp from "../assets/images/3lp.jpg"
import ArtFate from "../assets/images/ArtFate.jpg"
import FoodAndMood from "../assets/images/F&M700.png"
import InMyTime from "../assets/images/In My Time.jpg"
import ParaB from "../assets/images/Paranoid.jpg"
import SheperdTakes from "../assets/images/The Sheperd Takes.jpg"
import TheoLive from "../assets/images/Theo- Live.jpg"
import WPF from "../assets/images/WPF700.png"

import CircularGallery from '../components/CircularGallery'
function Studio() {
  return (
    <>
    <br></br> <br></br>
      

<div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}
  items={[
    { image: Threelp, text: "One" },
    { image: ArtFate, text: "Two" },
    { image: FoodAndMood, text: "Three" },
    { image: InMyTime, text: "Three" },
    { image: ParaB, text: "Three" },
    { image: SheperdTakes, text: "Three" },
    { image: TheoLive, text: "Three" },
    { image: WPF, text: "Three" },
  ]}
  bend={1}
  borderRadius={0.00}
  scrollSpeed={2}
  scrollEase={0.15}
/>
</div>
      <div>
        <div class="flex grid grid-cols-5 ">
          <div><img class="" src={Threelp}></img></div>
          <div><img class="" src={ArtFate}></img></div>
          <div><img class="" src={FoodAndMood}></img></div>
          <div><img class="" src={InMyTime}></img></div>
          <div><img class="" src={ParaB}></img></div>
        </div>
        <div class="text-blue-600 grid grid-cols-5 ">
          <div><img class="" src={SheperdTakes}></img></div>
          <div><img class="" src={TheoLive}></img></div>
          <div><img class="" src={WPF}></img></div>
          <div><img class="" src={""}></img></div>
          <div><img class="" src={""}></img></div>
        </div>
      </div>
    
    </>
  );
}

export default Studio;