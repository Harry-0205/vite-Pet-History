import React from "react";
import '../../Jillian-App/Estilos.css';
import logo from "../../../assets/imagenes/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      <nav className="nav-links">
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <div className="nav-buttons">
        <button className="btn register">Registrarse</button>
        <button className="btn login">Iniciar Sesión</button>
      </div>
    </header>
  );
};

export default Header;
