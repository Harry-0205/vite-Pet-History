import React from "react";
import Menu from "./Menu"; 
import "../Jillian-App/Estilos.css";
import { Button } from "react-bootstrap";
import SUBLOGO from '../../assets/imagenes/SUBLOGO.png'
const Encabezado = ({ setSeccion }) => {
  return (
    <header className="encabezado">
      <img className="tamaño" src={SUBLOGO} alt="" />
      <div className="barra">
        <Menu setSeccion={setSeccion} /> 
        <input type="text" placeholder="PET-HISTORY" />
        <Button href='/' >SALIR</Button>
        <Button href='/' >PERFIL</Button>
      </div>
    </header>
  );
};

export default Encabezado;
