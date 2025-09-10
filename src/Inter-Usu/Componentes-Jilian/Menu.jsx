import React from "react";
import "../Jillian-App/Estilos.css";

const Menu = ({ setSeccion }) => {
  return (
    <nav className="menu">
      <select onChange={(e) => setSeccion(e.target.value)}>
        <option value="perfil">Perfil-Mascota</option>
        <option value="cita">Información-Cita</option>
        <option value="veterinarias">Veterinarias</option>
      </select>
    </nav>
  );
};

export default Menu;
