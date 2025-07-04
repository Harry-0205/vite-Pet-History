import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import hamburguesa from '../../assets/imagenes/menusito.webp';
import Pet from "../../assets/imagenes/pet.png"
import '../../home/Estilos-Miguel/MiguelEs.css'

function Menuu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
    <div>
      <Button className='tamaño' variant="link"  onClick={handleShow}>
        <img className='Borguesa'  src={hamburguesa} alt="error" />
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img src={Pet} className='tamaño'></img></Offcanvas.Title>
        </Offcanvas.Header>
      <Offcanvas.Body>
        <NavDropdown.Item href="/Inter-Usu">Citas</NavDropdown.Item>
        <NavDropdown.Item href="/Inter-Usu2"> Historia clinica</NavDropdown.Item>
        <NavDropdown.Item href="/Inter-Usu3">Pacientes recientes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">recordatorios</NavDropdown.Item>
      </Offcanvas.Body>
      </Offcanvas>
    </div>

    
    
  );
}

export default Menuu