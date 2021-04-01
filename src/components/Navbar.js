import React from "react";
import Logo from '../images/bochi.jpg';
import './styles/Navbar.css'

function Navbar(props) {
  return (
    <div className="Navbar">
      <div className="container_nav">
          <div className="nav_left">
            <img className="Navbar__brand-logo" src={Logo} alt="Logo" />
            <span className="font-weight-light">JCS Preparatoria</span>
          </div>
          <div className="nav_right">
            <ul className="nav-right-items">
                <li>Estudiante</li>
                <li>Contador</li>
                <li>Cajero</li>
            </ul>
          </div>
      </div>
    </div>
  );
}

export default Navbar;
