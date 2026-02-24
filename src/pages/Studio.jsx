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

import "../index.css"

import CircularGallery from '../components/CircularGallery'
function Studio() {
  return (
    <>
    <br></br> <br></br>
      
    
      
        <div class="flex grid grid-cols-8">
          <div class="cursor-pointer transition duration-200 hover:scale-110"><img class="" src={Threelp}></img></div>
          <div><img class="cursor-pointer transition duration-200 hover:scale-110" src={ArtFate}></img></div>
          <div><img class="cursor-pointer transition duration-200 hover:scale-110" src={FoodAndMood}></img></div>
          <div><img class="cursor-pointer transition duration-200 hover:scale-110" src={InMyTime}></img></div>
          <div><img class="cursor-pointer transition duration-200 hover:scale-110" src={ParaB}></img></div>
          <div><img class="cursor-pointer transition duration-200 hover:scale-110" src={SheperdTakes}></img></div>
          <div><img class="cursor-pointer transition duration-200 hover:scale-110" src={TheoLive}></img></div>
          <div><img class="cursor-pointer transition duration-200 hover:scale-110" src={WPF}></img></div>
          <div><img class="cursor-pointer transition duration-200 hover:scale-110" src={""}></img></div>
          <div><img class="cursor-pointer transition duration-200 hover:scale-110" src={""}></img></div>
        </div>
        <div class="text-blue-600 grid grid-cols-5 ">
          
        </div>
     
    
    </>
  );
}

export default Studio;