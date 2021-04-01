import React from "react";
import Navbar from "../components/Navbar";

function Lobby(props) {
  return (
    <div className="container_fluid">
      <header>
        <Navbar />
        <div className="principal-section">
          <form>
            <div className="form-group">
              <label>Usuario</label>
              <input
                className="form-control"
                type="text"
                name="user"
              />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input
                className="form-control"
                type="password"
                name="password"
              />
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Lobby;
