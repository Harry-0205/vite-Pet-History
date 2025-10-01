import { useState } from "react";
import "../Estilos/Estilitos.css";
import logo from "../../assets/imagenes/logo.png"
import { FaBars } from "react-icons/fa";

const HeaderCali = () => {
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
            <a href>Pacientes</a>
            <a href>Información Cita</a>
            <a href>Historia Clínica</a>
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

export default HeaderCali;