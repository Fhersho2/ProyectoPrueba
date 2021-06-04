import React from "react";
//import Logo from './images/logo.png';
import './styles/Navbar.css'

function Navbar() {
  const logo = "/images/logo.png"
  return (
    <div className="Navbar">
      <div className="container_nav">
          <div className="nav_left">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">JCS Preparatoria</span>
          </div>
          </div>
      </div>
  );
}

export default Navbar;
