import React from "react";
import Logo from '../images/bochi.jpg';
import './styles/Navbar.css'

function Navbar() {
  return (
    <div className="Navbar">
      <div className="container_nav">
          <div className="nav_left">
            <img className="Navbar__brand-logo" src={Logo} alt="Logo" />
            <span className="font-weight-light">JCS Preparatoria</span>
          </div>
          </div>
      </div>
  );
}

export default Navbar;
