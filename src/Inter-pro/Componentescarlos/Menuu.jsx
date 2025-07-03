import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import hamburguesa from '../Imagenes/hamburguesa.png';
import pet from "../../assets/pet.png"



function Menuu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='grillas'>
           
      <Button className="fff" variant="link"  onClick={handleShow}><img className='Borguesa' src={hamburguesa} alt="error" /></Button>

<Offcanvas show={show} onHide={handleClose}>
  <Offcanvas.Header closeButton>
    <Offcanvas.Title>Menu</Offcanvas.Title>
  </Offcanvas.Header>
  <Offcanvas.Body>
    
        <NavDropdown.Item href="/Inter-Usu">Citas</NavDropdown.Item>
        <NavDropdown.Item href="/Inter-Usu2"> Historia clinica</NavDropdown.Item>
        <NavDropdown.Item href="/Inter-Usu3">Pacientes recientes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">recordatorios</NavDropdown.Item>

  

  </Offcanvas.Body>

</Offcanvas>
    
    <img className='logo' src={pet} alt="errorrr" />
  
      <div className='grid3'>
        
      <Button href='/' className='b16'>Perfil</Button>
      <Button href='/' className='b16'>Salir</Button>
      </div>

      </div>


      


    </>

    
  );
}

export default Menuu