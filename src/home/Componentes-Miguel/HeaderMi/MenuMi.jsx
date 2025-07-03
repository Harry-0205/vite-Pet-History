import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import Pet from '../../../assets/pet.png'
import '../../Estilos-Miguel/MiguelEs.css'
import BotonInMi from './BotonInMi';
import BotonReMi from './BotonReMi';

const MenuMi = () => {
  return (
    <Navbar bg="dark" variant="dark" expand={false} className="px-3">
      <Container fluid className="d-flex justify-content-between align-items-center">
        <Navbar.Toggle aria-controls="offcanvasNavbar" className="order-0" />
        <Navbar.Brand href="#" className="mx-auto" ><img src={Pet} alt="" id='tamaño' /></Navbar.Brand>
        <div style={{ width: '40px' }}></div>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menú</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-grow-1">
              <Nav.Link href="#inicio">Inicio</Nav.Link>
              <Nav.Link href="#servicios">Servicios</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <div className='but'>
        <BotonInMi></BotonInMi>
        <BotonReMi></BotonReMi>
        </div>
      
      </Container>
    </Navbar>
  );
};

export default MenuMi;
