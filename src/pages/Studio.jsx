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
    <br></br> <br></br><br></br><br></br><br></br>
        <div className="flex">
          <div className="flex pl-6 shadow">
            <div className="w-[30vw]  bg-black border border-gray-800 p-6">
              <h1 className="text-3xl text-white underline">Engineering</h1>
              <h1 className="text-1xl  text-white">Ever since I downloaded GarageBand and recorded my guitar, I fell in love with the process of making music. Writing songs as well as playing music has become my favorite past time since discovering it. On this page you can find some of the work that I've engineered, produced, and/or written. You can hover over a work below to see more information as well as my contribution. Clicking on a work will play it on the audio player.</h1>
            </div>
          </div>
          
          <div className="flex pl-6 shadow translate-y-10 ">
            <div className="w-[30vw]  bg-black border border-gray-800 p-6">
              <h1 className="text-3xl text-white underline">Skills</h1>
              <h1 className="text-1xl  text-white">I have significant experience with Pro Tools, Logic Pro X and Reaper DAWs.I am well aquainted with the process of producing music from writing the first notes to mastering and distribution. </h1>
            </div>
          </div>
          
        </div>

        <br></br><br></br><br></br>

        <div className="flex scale-100 gap-4 translate-x-3">
          <div class="cursor-pointer transition duration-200 hover:scale-110 shadow"><img class="" src={Threelp}></img></div>
          <div><img class="cursor-pointer transition duration-200 hover:scale-110 shadow translate-y-8" src={ArtFate}></img></div>
          <div><img class="cursor-pointer transition duration-200 hover:scale-110 shadow" src={FoodAndMood}></img></div>
          <div><img class="cursor-pointer transition duration-200 hover:scale-110 shadow translate-y-8" src={InMyTime}></img></div>
          <div><img class="cursor-pointer transition duration-200 hover:scale-110 shadow" src={ParaB}></img></div>
          <div><img class="cursor-pointer transition duration-200 hover:scale-110 shadow translate-y-8" src={SheperdTakes}></img></div>
          <div><img class="cursor-pointer transition duration-200 hover:scale-110 shadow" src={TheoLive}></img></div>
          <div><img class="cursor-pointer transition duration-200 hover:scale-110 shadow translate-y-8" src={WPF}></img></div>
          <div><img class="cursor-pointer transition duration-200 hover:scale-110 shadow" src={""}></img></div>
          <div><img class="cursor-pointer transition duration-200 hover:scale-110 shadow translate-y-8" src={""}></img></div>
        </div>

        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      {/*
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
        */}
     
    
    </>
  );
}

export default Studio;