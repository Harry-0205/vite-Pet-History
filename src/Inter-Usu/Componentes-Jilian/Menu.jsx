import React from "react";

const Menu = ({ setSeccion }) => {
  return (
    <nav className="menu">
      <select onChange={(e) => setSeccion(e.target.value)}>
        <option value="perfil">Perfil-Mascota</option>
        <option value="historia">Historial-clínico</option>
        <option value="cita">Información-Cita</option>
        <option value="veterinarias">Veterinarias</option>
      </select>
    </nav>
  );
};

export default Menu;
