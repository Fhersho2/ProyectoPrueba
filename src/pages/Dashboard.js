// Dependencies
import React, {useEffect, useState} from 'react'

// Components
import {logOut} from '../components/logOut';
import { Redirect} from 'react-router-dom';
// Styles
import './styles/dashboard.css'

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
    <div className='principal-section-dashboard'>
        <div className="sidebar-section">

        </div>
        <div className="content-section container-fluid">

        </div>
    </div>
  )
}


export default Dashboard;
