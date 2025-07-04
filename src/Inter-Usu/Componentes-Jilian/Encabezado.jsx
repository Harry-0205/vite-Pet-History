import React from "react";
import { Button } from "react-bootstrap";
const Encabezado = () => {
  return (
    <header className="encabezado">
      <h1>PET-HISTORY</h1>
      <div className="barra">
        <input type="text" placeholder="https://PET-HISTORY/Interfaz-Perfil/" />
        <Button href='/' >SALIR</Button>
        <Button href='/' >PERFIL</Button>
      </div>
    </header>
  );
};

export default Encabezado;
