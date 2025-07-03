import React, { useState } from "react";
import Encabezado from "../Componentes-Jilian/Encabezado";
import Menu from "../Componentes-Jilian/Menu";
import Jilian2 from "../Componentes-Jilian/Jilian-2";
import Jilian3 from "../Componentes-Jilian/Jilian-3";
import Jilian4 from "../Componentes-Jilian/Jilian-4";
import Jilian5 from "../Componentes-Jilian/Jilian-5";
import "./Estilos.css";

const Jilian = () => {
  const [seccion, setSeccion] = useState("perfil");

  const mostrarSeccion = () => {
    switch (seccion) {
      case "perfil":
        return <Jilian2 />;
      case "historia":
        return <Jilian3 />;
      case "cita":
        return <Jilian4 />;
      case "veterinarias":
        return <Jilian5 />;
      default:
        return <Jilian2 />;
    }
  };

  return (
    <div className="contenedor-principal">
      <Encabezado />
      <Menu setSeccion={setSeccion} />
      <main>{mostrarSeccion()}</main>
    </div>
  );
};

export default Jilian;
