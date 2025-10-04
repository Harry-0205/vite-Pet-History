import { useState } from "react";
import "../Estilos/Estilitos.css";
import logo from "../../assets/imagenes/logo.png"
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";


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
            <a href={"/Profesional/Pacientes"}>Pacientes</a>
            <a href={"/Profesional/Citas"}>Información Cita</a>
            <a href={"/Profesional/Historia"}>Historia Clínica</a>
          
          </div>
        )}
      </div>

      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      <div className="nav-buttons">
        <Link to="/Profesional/Miperfil" className="btn perfil">Mi Perfil</Link>
        <button  className="btn salir" >Salir</button>
        
      </div>
    </header>
  );
};

export default HeaderCali;