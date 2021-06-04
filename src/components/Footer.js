import React from "react";
import './styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="container__footer">
        <div className="footer-copyrigth">
          <p>Copyright ©ArkosApp 2021 Arkos Vallarta Todos los derechos reservados</p>
        </div>
        <div className="footer-info">
            <span>Telefono: no me lo c</span>
            <span>Email: arkos@arkos.com</span>
            <span>Direccion: C. Francisco I. Madero 529, Zona Romántica, Loma Bonita, 48330 Puerto Vallarta, Jal.</span>
        </div>
        <div className="footer-social">
            <span><i class="fab fa-facebook-square"></i></span>
            <span><i class="fab fa-twitter-square"></i></span>
            <span><i class="fab fa-instagram-square"></i></span>
            <span><i class="fab fa-whatsapp-square"></i></span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
