import React from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
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
        <Modal show={props.show} onHide={props.handleClose} centered size="lg" backdrop="static" keyboard={false}>
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
                            <Form.Control as="select">
                                <option>01- Reinscripcion</option>
                                <option>02- Inscripcion</option>
                                <option>03- Credencial</option>
                                <option>04- Constancias</option>
                                <option>05- Titulacion</option>
                            </Form.Control>
                            <Form.Control placeholder="First name" />
                            <Form.Control placeholder="Numero de tarjeta" />
                            <div className="form-credit-card-info">
                                <div className="credit-card-expiration">
                                    <Form.Control placeholder="Numero de tarjeta" />
                                    <Form.Control placeholder="Numero de tarjeta" />
                                </div>
                                <div className="credit-card-cvc">
                                    <Form.Control placeholder="Numero de tarjeta" />
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
