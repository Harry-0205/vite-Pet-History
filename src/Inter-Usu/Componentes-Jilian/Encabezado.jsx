import React from "react";
import Menu from "./Menu"; 
import "../Jillian-App/Estilos.css";

const Encabezado = ({ setSeccion }) => {
  return (
    <header className="encabezado">
      <h1>PET-HISTORY</h1>
      <div className="barra">
        <Menu setSeccion={setSeccion} /> 
        <input type="text" placeholder="PET-HISTORY" />
        <button>SALIR</button>
        <button>PERFIL</button>
      </div>
    </header>
  );
};

export default Encabezado;
