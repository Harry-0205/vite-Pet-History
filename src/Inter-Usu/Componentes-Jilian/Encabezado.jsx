import React from "react";

const Encabezado = () => {
  return (
    <header className="encabezado">
      <h1>PET-HISTORY</h1>
      <div className="barra">
        <input type="text" placeholder="https://PET-HISTORY/Interfaz-Perfil/" />
        <button>SALIR</button>
        <button>PERFIL</button>
      </div>
    </header>
  );
};

export default Encabezado;
