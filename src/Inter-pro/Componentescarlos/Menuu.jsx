import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import NavDropdown from 'react-bootstrap/NavDropdown';
import hamburguesa from '../Imagenes/hamburguesa.png';
import logo from "../Imagenes/logo.jpg"


<img src="../assets/Imagenes/hamburguesa" alt="" />
function Menuu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
      <Button variant="link"  onClick={handleShow}><img className='Borguesa' src={hamburguesa} alt="error" /></Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu de opciones</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          
              <NavDropdown.Item href="#action/3.1">Citas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Historia clinica</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pacientes recientes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">recordatorios</NavDropdown.Item>

        

        </Offcanvas.Body>

      </Offcanvas>
      <img className='logo' src={logo} alt="errorrr" />
      
      


    </>

    
  );
}

export default Menuu