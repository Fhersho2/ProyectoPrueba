import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
function ControlPanel(props) {
  const [studentsData, setStudentsData] = useState([]);

  let token = JSON.parse(localStorage.getItem("token"));
  let NoControl = token.datos;

  function getStudents() {
    axios
    .get(`http://localhost:3001/api/alumnos/${NoControl}`)
    .then((response) => {
      setStudentsData(response.data[0]);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() =>{
   getStudents();
  },[]);


 
  const imageBanner = "/images/students3.png";
  return (
    <div className="content-control">
      <div className="banner-section">
        <img src={imageBanner} alt="imageBanner"></img>
        <div className="banner-content">
          <div className="banner-info">
            <h1>Bienvenido al Dashboard</h1>
          </div>
        </div>
      </div>
      {/*-- banner end --*/}
      <div className="principal-section-control container-fluid">
        <div className="section-control-title">
          <h1>Datos del estudiante</h1>
        </div>
        <div className="content-forms-control">
          <form className="content-item form-control">
            <div className="form-item">
              <label className="form-label" htmlFor="name">
                Nombre:
              </label>
              <input
                type="text"
                id="name"
                value={studentsData.Nombre}
                className="form-item-input form-control"
                disabled
              ></input>
            </div>
            <div className="form-item">
              <label className="form-label" htmlFor="date">
                Fecha de nacimiento:
              </label>
              <input
                type="text"
                id="date"
                value={studentsData.FechaNac}
                className="form-item-input form-control"
                disabled
              ></input>
            </div>
            <div className="form-item">
              <label className="form-label" htmlFor="place">
                Lugar de nacimiento:
              </label>
              <input
                type="text"
                id="place"
                value={studentsData.LugarNac}
                className="form-item-input form-control"
                disabled
              ></input>
            </div>
            <div className="form-item">
              <label className="form-label" htmlFor="tutor">
                Padre o tutor:
              </label>
              <input
                type="text"
                id="tutor"
                value={studentsData.Tutor}
                className="form-item-input form-control"
                disabled
              ></input>
            </div>
            <div className="form-item">
              <label className="form-label" htmlFor="mother">
                Madre:
              </label>
              <input
                type="text"
                id="mother"
                value={studentsData.Madre}
                className="form-item-input form-control"
                disabled
              ></input>
            </div>
          </form>
          <form className="content-item form-control">
            <div className="form-item">
              <label className="form-label" htmlFor="address">
                Domicilio:
              </label>
              <input
                type="text"
                id="address"
                value={studentsData.Domicilio}
                className="form-item-input form-control"
                disabled
              ></input>
            </div>
            <div className="form-item">
              <label className="form-label" htmlFor="phone">
                Telefono:
              </label>
              <input
                type="text"
                id="phone"
                value={studentsData.Telefono}
                className="form-item-input form-control"
                disabled
              ></input>
            </div>
            <div className="form-item">
              <label className="form-label" htmlFor="email">
                Correo electronico:
              </label>
              <input
                type="text"
                id="email"
                value={studentsData.Correo}
                className="form-item-input form-control"
                disabled
              ></input>
            </div>
            <div className="form-item">
              <label className="form-label" htmlFor="emergency">
                Emergencias:
              </label>
              <input
                type="text"
                id="emergency"
                value={studentsData.Emergencias}
                className="form-item-input form-control"
                disabled
              ></input>
            </div>
          </form>
        </div>
        {/*-- content-forms-control end --*/}
        <div className="content-table-control">
          <div className="table-title">
            <h2>Historial de pagos</h2>
          </div>
          <div className="table-control">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Servicio</th>
                    <th scope="col">Concepto</th>
                    <th scope="col">Monto</th>
                    <th scope="col">Adeudo</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Reinscripcion</th>
                    <td>Pago de reinscripcion</td>
                    <td>$5,000</td>
                    <td>$0</td>
                    <td>19/marzo/2021</td>
                    <td>Pagado</td>
                  </tr>
                  <tr>
                    <th scope="row">Reinscripcion</th>
                    <td>Pago de reinscripcion</td>
                    <td>$5,000</td>
                    <td>$0</td>
                    <td>19/marzo/2021</td>
                    <td>Pagado</td>
                  </tr>
                  <tr>
                    <th scope="row">Reinscripcion</th>
                    <td>Pago de reinscripcion</td>
                    <td>$5,000</td>
                    <td>$0</td>
                    <td>19/marzo/2021</td>
                    <td>Pagado</td>
                  </tr>
                  <tr>
                    <th scope="row">Reinscripcion</th>
                    <td>Pago de reinscripcion</td>
                    <td>$5,000</td>
                    <td>$0</td>
                    <td>19/marzo/2021</td>
                    <td>Pagado</td>
                  </tr>
                  <tr>
                    <th scope="row">Reinscripcion</th>
                    <td>Pago de reinscripcion</td>
                    <td>$5,000</td>
                    <td>$0</td>
                    <td>19/marzo/2021</td>
                    <td>Pagado</td>
                  </tr>
                  <tr>
                    <th scope="row">Reinscripcion</th>
                    <td>Pago de reinscripcion</td>
                    <td>$5,000</td>
                    <td>$0</td>
                    <td>19/marzo/2021</td>
                    <td>Pagado</td>
                  </tr>
                  <tr>
                    <th scope="row">Reinscripcion</th>
                    <td>Pago de reinscripcion</td>
                    <td>$5,000</td>
                    <td>$0</td>
                    <td>19/marzo/2021</td>
                    <td>Pagado</td>
                  </tr>
                  <tr>
                    <th scope="row">Reinscripcion</th>
                    <td>Pago de reinscripcion</td>
                    <td>$5,000</td>
                    <td>$0</td>
                    <td>19/marzo/2021</td>
                    <td>Pagado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/*-- content-table-control end --*/}
      </div>
    </div>
  );
}

export default ControlPanel;
