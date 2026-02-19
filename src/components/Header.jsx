import PillNav from './PillNav';
//import logo from '/path/to/logo.svg';
import "../index.css"
import { Link } from "react-router-dom";
import FuzzyText from '../components/FuzzyText';
import ASCIIText from '../components/ASCIIText';
import Logo from "../assets/images/balogo.png"
  



function Header() {
  return (
    <>
    <div>
      
    </div>
    
    <div class="flex flex-col items-center justify-center">
            <img class="invert h-25 w-100%" src={Logo}></img>
      
      
      <div class="grid grid-cols-3 gap-1">
        
        <Link to="/studio">
        <div>
          <FuzzyText
            fontSize={"4rem"} // 150px
            baseIntensity={0}
            hoverIntensity={0.1}
            enableHover
          >
            Studio
          </FuzzyText>
        </div>
        </Link>

        <Link to="/live">
        <div>
          <FuzzyText
            fontSize={"4rem"} // 150px
            baseIntensity={0}
            hoverIntensity={0.1}
            enableHover
          >
            Live
          </FuzzyText>
        </div>
        </Link>
        <Link to="/contact">
        <div>
          <FuzzyText
            fontSize={"4rem"} // 150px
            baseIntensity={0}
            hoverIntensity={0.1}
            enableHover
          >
            Contact
          </FuzzyText>
        </div>
        </Link>
      </div>
    </div>
    </>
  )
}
export default Header;