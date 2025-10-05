import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Jillian-App/Estilos.css";
import logo from "../../../assets/imagenes/logo.png";
import { FaBars } from "react-icons/fa";
import PerfilUsuario from "../Main-Ji/PerfilUsuario";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="menu-container">
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars size={22} />
        </button>
        {menuOpen && (
          <div className="menu-dropdown">
            <a href="/usuario/perfil">Perfil Mascota</a>
            <a href="/usuario/informacion">Información Cita</a>
            <a href="/usuario/historia">Historia Clínica</a>
          </div>
        )}
      </div>

      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      <div className="nav-buttons">
        <button className="btn perfil" onClick={() => setShowProfile(true)}>
          Perfil
        </button>
        <button
          className="btn salir"
          onClick={() => {
            localStorage.clear();
            navigate("/LoginU");
          }}
        >
          Salir
        </button>
      </div>

      {showProfile && <PerfilUsuario toggleProfile={() => setShowProfile(false)} />}
    </header>
  );
};

export default Header;
