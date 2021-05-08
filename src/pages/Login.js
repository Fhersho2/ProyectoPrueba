import React from "react";
import Footer from "../components/Footer";
import "./styles/Lobby.css";
import Fondo from "../images/astronaut.jpg";
import { useState, useEffect } from "react";
import Axios from 'axios';
import { Redirect, useLocation} from 'react-router-dom';
import {dashboard} from '../components/routes';



function Lobby(props) {
  const name = "Alumnos";
  const [userName, setUserName] = useState();
  const [userPass, setUserpass] = useState();
  const [loginStatus, setLoginStatus] = useState();
 

  const login = () => {
    Axios.post("http://localhost:3001/api/auth", {
      username: userName,
      password: userPass,
    }).then((response) => {
      
        if(response.data.session === true){
          localStorage.setItem('token', JSON.stringify(response.data));
          const token = JSON.parse(localStorage.getItem('token'));
          console.log(token);
          setLoginStatus(true)
          if(loginStatus){
            return <Redirect to={dashboard()} />;
          }
        }else{
          console.log(response.data.message)
          setLoginStatus(false)
        }
      
    });
  };
  // comprobacion de la session
  if(window.localStorage.getItem('token')){
    return <Redirect to={dashboard()} />;
  }
 
  
  
  
  return (
    <div className="container_fluid">
      <header>
        <div className="principal-section">
          <img src={Fondo} className="principal-image" alt="Estudiantes"></img>
          <div className="principal-layer">
            <div className="layer-item">
              <h3>Bienvenido!!!!</h3>
              <p>La plataorma Arkosred</p>
            </div>
            <form className="sesion-form">
              <div className="form_title">
                <h5>Plataforma {name}</h5>
              </div>
              <div className="form-group">
                <label>Usuario</label>
                <input 
                  className="form-control" 
                  type="text" 
                  onChange={(e) =>{
                    setUserName(e.target.value);
                  }} />
              </div>
              <div className="form-group">
                <label>Contraseña</label>
                <input
                  className="form-control"
                  type="password"
                  onChange={ (e) =>{
                    setUserpass(e.target.value)
                  }}
                />
              </div>
              <div className="form-btn">
                <button className="btn btn-primary btn-sm"
                  type="button"
                  onClick={login}
                >Iniciar Sesion</button>
              </div>
            </form>
          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default Lobby;
