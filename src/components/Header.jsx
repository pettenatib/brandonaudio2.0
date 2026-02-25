import { Link } from "react-router-dom";
import FuzzyText from "../components/FuzzyText";
import Logo from "../assets/images/balogo.png";
import "../components/Header.css";

function Header() {
  return (
    <div className="header-bar">

      {/* LEFT: Logo */}
      <div className="header-left">
        <img src={Logo} alt="logo" className="header-logo" />
      </div>

      {/* RIGHT: Navigation */}
      <div className="header-nav">

        <Link to="/studio" className="nav-link">
          <FuzzyText
            fontSize="1.5rem"
            baseIntensity={0}
            hoverIntensity={0.1}
            enableHover
          >
            Engineering Work
          </FuzzyText>
        </Link>

        <Link to="/live" className="nav-link">
          <FuzzyText
            fontSize="1.5rem"
            baseIntensity={0}
            hoverIntensity={0.1}
            enableHover
          >
            Event Production Work
          </FuzzyText>
        </Link>

        <Link to="/contact" className="nav-link">
          <FuzzyText
            fontSize="1.5rem"
            baseIntensity={0}
            hoverIntensity={0.1}
            enableHover
          >
            Contact
          </FuzzyText>
        </Link>

      </div>

    </div>
  );
}

export default Header;