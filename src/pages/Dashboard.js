// Dependencies
import React, {useEffect, useState} from 'react'

// Components
import {logOut} from '../components/logOut';
import { Redirect} from 'react-router-dom';
// Styles
//import './style.css'

function Dashboard(props){
  const [asLoged, setHasLoged] = useState(true);
  
  function hangleLogout(){
    logOut()
    setHasLoged(false);
    window.location.href = '/';
  }
  useEffect(() =>{
    
    
  }, [])

  


  return (
    <div className=''>
        <h1>bienvenido al dashboard</h1>
        <button type='button' onClick={hangleLogout}>cerrar sesion</button>
    </div>
  )
}


export default Dashboard;
