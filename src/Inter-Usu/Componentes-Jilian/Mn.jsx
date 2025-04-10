import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../assets/Logo.jpg"

function Mn() {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
    <Button variant="link"  onClick={handleShow}><button>☰</button></Button>
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu de opciones</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <NavDropdown.Item href="#action/3.1">Perfil-Mascota</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Historia-Clinica</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Informacion-Cita</NavDropdown.Item>

        </Offcanvas.Body>
        </Offcanvas>

    </>
    );
}

export default Mn