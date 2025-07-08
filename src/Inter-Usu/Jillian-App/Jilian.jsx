import React, { useState } from "react";
import Encabezado from "../Componentes-Jilian/Encabezado";
import Jilian2 from "../Componentes-Jilian/Jilian-2";
import Jilian4 from "../Componentes-Jilian/Jilian-4";
import Jilian5 from "../Componentes-Jilian/Jilian-5";
import "./Estilos.css";
import 'primereact/resources/themes/lara-light-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import FooterMi from "../../home/Componentes-Miguel/FooterMi/FooterMi";

const Jilian = () => {
  const [seccion, setSeccion] = useState("perfil");

  const mostrarSeccion = () => {
    switch (seccion) {
      case "perfil":
        return <Jilian2 />;
      case "cita":
        return <Jilian4 />;
      case "veterinarias":
        return <Jilian5 />;
      default:
        return <Jilian2 />;
    }
  };

  return (
    <div className="pagina">
      <Encabezado setSeccion={setSeccion} />
      <main>{mostrarSeccion()}</main>
      <FooterMi />
    </div>
  );
};

export default Jilian;
