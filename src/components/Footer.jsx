import "../components/Footer.css";

function Footer() {
  return (
    <footer className="footer-bar">
      © {new Date().getFullYear()} Your Name
    </footer>
  );
}

export default Footer;