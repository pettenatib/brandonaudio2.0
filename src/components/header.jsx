import PillNav from './PillNav';
//import logo from '/path/to/logo.svg';
import "../index.css"


export default function Header() {
  return <>
    
   

    <PillNav
      //logo={logo}
      //logoAlt="Company Logo"
      items={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Contact', href: '/contact' }
      ]}
      activeHref="/"
      className="custom-nav"
      ease="power2.easeOut"
      baseColor="#7079b6ff"
      pillColor="#b2b2b2ff"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#000000"
      theme="color"
      initialLoadAnimation

      
    />
    <br></br><br></br><br></br>
  </>;
}
