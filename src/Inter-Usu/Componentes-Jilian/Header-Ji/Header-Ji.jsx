import React, { useState } from "react";
import '../../Jillian-App/Estilos.css';
import logo from "../../../assets/imagenes/logo.png";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="menu-container">
        <button className="menu-btn" onClick={toggleMenu}>
          <FaBars size={22} />
        </button>
        {menuOpen && (
          <div className="menu-dropdown">
            <a href="#perfil-mascota">Perfil Mascota</a>
            <a href="#informacion-cita">Información Cita</a>
            <a href="#historia-clinica">Historia Clínica</a>
          </div>
        )}
      </div>

      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      <div className="nav-buttons">
        <button className="btn perfil">Perfil</button>
        <button className="btn salir">Salir</button>
      </div>
    </header>
  );
};

export default Header;

