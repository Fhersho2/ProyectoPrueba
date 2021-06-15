// Dependencies
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
// Components
import { logOut } from '../components/logOut';

// Styles
import './styles/dashboard.css'

// views
import ControlPanel from './dashboardPages/controlPanel';
import ModalComponent from './dashboardPages/modalComponent';
import Swal from 'sweetalert2';
function Dashboard(props) {
    const [asLoged, setHasLoged] = useState(true);
    const image = '/images/wallhaven-mp9v38.jpg';
    const [show, setShow] = useState(false);

    const handleClose = () =>setShow(false);
    
    const handleShow = () => setShow(true);
  
    function hangleLogout() {
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
                            <Button variant="primary" onClick={handleShow}>
                                Realizar pagos
                            </Button>
                            
                        </ul>
                    </div>
                </div>
            </div>
            
            {/*--- fin de la seccion del sidebar ---*/}
            <div className="content-section">
                <ControlPanel />
                <ModalComponent show={show} handleClose = {handleClose} handleShow = {handleShow} />
            </div>
            {/*--- fin de la seccion del contenido ---*/}
          
        </div>
    )
}


export default Dashboard;
