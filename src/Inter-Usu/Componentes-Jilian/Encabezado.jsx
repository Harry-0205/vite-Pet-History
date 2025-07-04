import React from "react";
import Menu from "./Menu"; 
import "../Jillian-App/Estilos.css";
const Encabezado = ({ setSeccion }) => {
import { Button } from "react-bootstrap";
const Encabezado = () => {

  return (
    <header className="encabezado">
      <h1>PET-HISTORY</h1>
      <div className="barra">
        <Menu setSeccion={setSeccion} /> 
        <input type="text" placeholder="PET-HISTORY" />
        <button>SALIR</button>
        <button>PERFIL</button>
        <input type="text" placeholder="https://PET-HISTORY/Interfaz-Perfil/" />
        <Button href='/' >SALIR</Button>
        <Button href='/' >PERFIL</Button>
      </div>
    </header>
  );
};

export default Encabezado;
