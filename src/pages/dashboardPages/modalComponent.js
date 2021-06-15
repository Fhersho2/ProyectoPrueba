import React from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import '../styles/modalComponent.css'
function ModalComponent(props) {
    const fnclose = props.handleClose;

    const Alert = () =>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        fnclose();
    }
    return (
        <Modal show={props.show} onHide={props.handleClose} centered size="sm" backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Pagar Servicios</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="content-form">
                    <form>
                        <div className="form-title">
                            <h2>Formulario de Pago</h2>
                        </div>
                        <div className="form-info">
                            <div className = "form-select-pay">
                                <Form.Control as="select">
                                    <option>01- Reinscripcion</option>
                                    <option>02- Inscripcion</option>
                                    <option>03- Credencial</option>
                                    <option>04- Constancias</option>
                                    <option>05- Titulacion</option>
                                </Form.Control>
                            </div>
                            <div className = "form-info-name">
                                <div className = "first-name">
                                    <Form.Control placeholder="First name" />
                                </div>
                                <div className = "credit-card-number">
                                    <Form.Control placeholder="Numero de tarjeta" />
                                </div>                            
                            </div>
                            <div className="form-credit-card-info">
                                <div className="credit-card-expiration">
                                    <div className = "credit-card-month">
                                        <Form.Control placeholder="mm" />
                                    </div>
                                    <div className = "credit-card-year">
                                        <Form.Control placeholder="aa" />
                                    </div>
                                </div>
                                <div className="credit-card-cvc">
                                    <Form.Control placeholder="CVC" />
                                </div>
                            </div>
                        </div>
                        <div className="form-buttons"></div>
                    </form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Cancelar
        </Button>
                <Button variant="primary" onClick={Alert}>
                    Realizar Pago
        </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalComponent;
