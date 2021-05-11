import React from 'react';

function ControlPanel(props) {
    const imageBanner = '/images/students3.png';
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
                            <label className="form-label" for="name">Nombre:</label>
                            <input type="text" id="name" className="form-item-input form-control" disabled></input>
                        </div>
                        <div className="form-item">
                            <label className="form-label" for="date">Fecha de nacimiento:</label>
                            <input type="text" id="date" className="form-item-input form-control" disabled></input>
                        </div>
                        <div className="form-item">
                            <label className="form-label" for="place">Lugar de nacimiento:</label>
                            <input type="text" id="place" className="form-item-input form-control" disabled></input>
                        </div>
                        <div className="form-item">
                            <label className="form-label" for="tutor">Padre o tutor:</label>
                            <input type="text" id="tutor" className="form-item-input form-control" disabled></input>
                        </div>
                        <div className="form-item">
                            <label className="form-label" for="mother">Madre:</label>
                            <input type="text" id="mother" className="form-item-input form-control" disabled></input>
                        </div>
                    </form>
                    <form className="content-item form-control">
                        <div className="form-item">
                            <label className="form-label" for="address">Domicilio:</label>
                            <input type="text" id="address" className="form-item-input form-control" disabled></input>
                        </div>
                        <div className="form-item">
                            <label className="form-label" for="phone">Telefono:</label>
                            <input type="text" id="phone" className="form-item-input form-control" disabled></input>
                        </div>
                        <div className="form-item">
                            <label className="form-label" for="email">Correo electronico:</label>
                            <input type="text" id="email" className="form-item-input form-control" disabled></input>
                        </div>
                        <div className="form-item">
                            <label className="form-label" for="emergency">Emergencias:</label>
                            <input type="text" id="emergency" className="form-item-input form-control" disabled></input>
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
                            <table class="table">
                                
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