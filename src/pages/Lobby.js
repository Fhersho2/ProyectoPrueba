import React from "react";
import Navbar from "../components/Navbar";
import "./styles/Lobby.css";
import Fondo from "../images/astronaut.jpg";

function Lobby(props) {
  const name = "Alumnos";
  return (
    <div className="container_fluid">
      <header>
        <Navbar />
        <div className="principal-section">
          <img src={Fondo} className="principal-image" alt="Estudiantes"></img>
          <div className="principal-layer">
            <div className="layer-item">
              <h3>Bienvenido!!!!</h3>
              <p>
                La plataorma Arkosred
              </p>
            </div>
            <form className="sesion-form">
              <div className="form_title">
                <h5>Plataforma {name}</h5>
              </div>
              <div className="form-group">
                <label>Usuario</label>
                <input className="form-control" type="text" name="user" />
              </div>
              <div className="form-group">
                <label>Contraseña</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                />
              </div>
              <div className="form-btn">
                <button  className="btn btn-primary btn-sm">
                  Iniciar Sesion
                </button>
              </div>
             
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Lobby;
