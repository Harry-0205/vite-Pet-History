import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import hamburguesa from '../../assets/imagenes/menusito.webp';
import Pet from "../../assets/imagenes/pet.png"
import '../../home/Estilos-Miguel/MiguelEs.css'
import { Link } from 'react-router-dom';

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
        <Link to={"/Pro/"}><h6>Citas</h6></Link>
        <Link to={"/Pro/pro2"}><h6>Historia clinica</h6></Link>
        <Link to={"/Pro/pro3"}><h6>Pacientes recientes</h6></Link>
      </Offcanvas.Body>
      </Offcanvas>
    </div>

    
    
  );
}

export default Menuu