import React, { useState } from "react";
import Menu from "./Menu"; 
import "../Jillian-App/Estilos.css";
import { Button, Modal } from "react-bootstrap";
import SUBLOGO from '../../assets/imagenes/SUBLOGO.png';
import PER from '../Imagenes/Per.png';

const Encabezado = ({ setSeccion }) => {
  const [mostrarPerfil, setMostrarPerfil] = useState(false);

  return (
    <header className="encabezado">
      <img className="tamaño" src={SUBLOGO} alt="" />
      <div className="barra">
        <Menu setSeccion={setSeccion} /> 
        <input type="text" placeholder="PET-HISTORY" />
        <Button href='/'>SALIR</Button>
        <Button onClick={() => setMostrarPerfil(true)}>PERFIL</Button>
      </div>

      <Modal show={mostrarPerfil} onHide={() => setMostrarPerfil(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Perfil del Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          <img src={PER} alt="Usuario" style={{ width: "120px", height: "120px", borderRadius: "50%", marginBottom: "15px", border: "3px solid #ccc" }} />
          <p><strong>Nombre:</strong> Jiji Hernández</p>
          <p><strong>Correo:</strong> jiji@example.com</p>
          <p><strong>Teléfono:</strong> 300 123 4567</p>
          <p><strong>Dirección:</strong> Calle 123 #45-67, Bogotá</p>
          <p><strong>Rol:</strong> Usuario</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setMostrarPerfil(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default Encabezado;
