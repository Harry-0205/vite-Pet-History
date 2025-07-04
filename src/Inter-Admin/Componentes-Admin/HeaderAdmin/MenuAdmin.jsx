import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';
import hamburguesa from '../../../assets/imagenes/menusito.webp';
import '../../../home/Estilos-Miguel/MiguelEs.css'
import Pet from '../../../assets/imagenes/pet.png'

function MenuAdmin() {
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
        <NavDropdown.Item href="/CreaPer"><h6>Creacion Perfil</h6></NavDropdown.Item>
        <NavDropdown.Item href="/PerVet"><h6>Personal Veterinaria</h6></NavDropdown.Item>
      </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default MenuAdmin    