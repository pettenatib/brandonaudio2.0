import Header from "./components/Header";
import Background2 from "./components/Background2";
import Player from "./components/Player"

import Home from "./pages/Home";
import Studio from "./pages/Studio";
import Live from "./pages/Live";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
    return(
    
    <BrowserRouter>
        <Background2 />

        
        <Header />
        <Player />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/live" element={<Live />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      
    </BrowserRouter>)
}
export default App;