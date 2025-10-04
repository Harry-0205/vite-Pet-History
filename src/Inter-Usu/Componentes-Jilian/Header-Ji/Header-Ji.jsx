import React, { useState } from "react";
import "../../Jillian-App/Estilos.css";
import logo from "../../../assets/imagenes/logo.png";
import iconoUser from "../../../assets/imagenes/veteri_logos/icono_user.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [fotoPerfil, setFotoPerfil] = useState(null);

  const [editableData, setEditableData] = useState({
    telefono: "3201234567",
    direccion: "Calle 123 #45-67",
    password: "",
  });

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleProfile = () => setShowProfile(!showProfile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableData({ ...editableData, [name]: value });
  };

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFotoPerfil(file);
    }
  };

  const handleSave = () => {
    alert("✅ Perfil actualizado correctamente");
    setShowProfile(false);
  };

  return (
    <header className="header">
      <div className="menu-container">
        <button className="menu-btn" onClick={toggleMenu}>
          <FaBars size={22} />
        </button>
        {menuOpen && (
          <div className="menu-dropdown">
            <Link to="/perfil" onClick={() => setMenuOpen(false)}>Perfil Mascota</Link>
            <Link to="/informacion" onClick={() => setMenuOpen(false)}>Información Cita</Link>
            <Link to="/historia" onClick={() => setMenuOpen(false)}>Historia Clínica</Link>
          </div>
        )}
      </div>

      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      <div className="nav-buttons">
        <button className="btn perfil" onClick={toggleProfile}>Perfil</button>
        <button className="btn salir">Salir</button>
      </div>

      {showProfile && (
        <div className="modal-overlay" onClick={toggleProfile}>
          <div className="modal-profile" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Perfil del Usuario</h2>
              <button className="btn-close" onClick={toggleProfile}>×</button>
            </div>

            <div className="profile-body">
              <div className="avatar-section">
                <img
                  src={fotoPerfil ? URL.createObjectURL(fotoPerfil) : iconoUser}
                  alt="Avatar del usuario"
                  className="avatar-img"
                />
                <label className="upload-label">
                  Cambiar foto
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFotoChange}
                  />
                </label>
              </div>

              <div className="info-section">
                <div className="field non-editable">
                  <span className="label">Nombre:</span>
                  <span className="value">Juan Pérez</span>
                </div>
                <div className="field non-editable">
                  <span className="label">Email:</span>
                  <span className="value">juanperez@email.com</span>
                </div>
                <div className="field non-editable">
                  <span class name="label">Usuario ID:</span>
                  <span className="value">0012345</span>
                </div>
                <div className="field non-editable">
                  <span className="label">Fecha registro:</span>
                  <span className="value">05/04/2023</span>
                </div>

                <label className="field editable">
                  <span className="label">Teléfono:</span>
                  <input
                    type="text"
                    name="telefono"
                    value={editableData.telefono}
                    onChange={handleChange}
                  />
                </label>

                <label className="field editable">
                  <span className="label">Dirección:</span>
                  <input
                    type="text"
                    name="direccion"
                    value={editableData.direccion}
                    onChange={handleChange}
                  />
                </label>

                <label className="field editable">
                  <span className="label">Nueva contraseña:</span>
                  <input
                    type="password"
                    name="password"
                    value={editableData.password}
                    placeholder="••••••••"
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn guardar" onClick={handleSave}>Guardar</button>
              <button className="btn cerrar" onClick={toggleProfile}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
