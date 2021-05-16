// Dependencies
import React, {useEffect, useState} from 'react'

// Components
import {logOut} from '../components/logOut';

// Styles
import './styles/dashboard.css'

// views
import ControlPanel from './dashboardPages/controlPanel';


function Dashboard(props){
  const [asLoged, setHasLoged] = useState(true);
  const image = '/images/wallhaven-mp9v38.jpg';
  function hangleLogout(){
    logOut()
    setHasLoged(false);
    window.location.href = '/';
  }
  //useEffect(() =>{
  //}, [])

  


  return (
    <div className='principal-section-dashboard'>
        <div className="sidebar-section">
            <div className="sidebar-content container-fluid">
                <div className="sidebar-user-info">
                    <div className="user-type">
                        <h2>Estudiante</h2>
                    </div>
                </div>
                <div className="sidebar-image">
                      <div className="content-image">
                          <img src={image} alt="image-user"></img>
                      </div>
                </div>
                <div className="sidebar-navigation">
                      <h3>Navegacion</h3>
                      <ul>
                          <li className="navigation-link">Panel de control</li>
                          <li className="navigation-link">Realizar pagos</li>
                      </ul>
                </div>
            </div>
        </div>
        {/*--- fin de la seccion del sidebar ---*/}
        <div className="content-section">
            <ControlPanel />
        </div>
        {/*--- fin de la seccion del contenido ---*/}
    </div>
  )
}


export default Dashboard;
