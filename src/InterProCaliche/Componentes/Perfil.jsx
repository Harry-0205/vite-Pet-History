import React, { useState, useEffect } from "react"; // Asegúrate de importar useEffectimport "../Estilos/Estilitos.css";  
import "../Estilos/Estilitos.css";


const Perfil = () => {
  const [userData, setUserData] = useState({
    tipoDocumento: "Cédula",
    numeroDocumento: "123456789",
    rol: "Usuario",
    nombre: "Carlos",
    apellido: "Caro",
    telefono: "3001234567",
    direccion: "Calle Falsa 123",
    correo: "carlos@example.com",
    contraseña: "123456",
  });

  const [formState, setFormState] = useState({
    nombre: userData.nombre,
    apellido: userData.apellido,
    telefono: userData.telefono,
    direccion: userData.direccion,
    correo: userData.correo,
    contraseña: userData.contraseña,
  });

  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    const changed =
      formState.nombre !== userData.nombre ||
      formState.apellido !== userData.apellido ||
      formState.telefono !== userData.telefono ||
      formState.direccion !== userData.direccion ||
      formState.correo !== userData.correo ||
      formState.contraseña !== userData.contraseña;

    setHasChanges(changed);
  }, [formState, userData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!hasChanges) return;

    setUserData((prev) => ({
      ...prev,
      ...formState,
    }));
    alert("Perfil actualizado correctamente!");
  };

  return (
    <div className="up-container">
      <h2 className="up-title">Perfil de Usuario</h2>

      {/* Mensaje si no hay cambios */}
      {!hasChanges && <p className="up-no-changes">No hay cambios para guardar</p>}

      <form onSubmit={handleFormSubmit} className="up-form">
        {/* Campos no editables */}
        <div className="up-field">
          <label>Tipo de Documento:</label>
          <span>{userData.tipoDocumento}</span>
        </div>
        <div className="up-field">
          <label>Número de Documento:</label>
          <span>{userData.numeroDocumento}</span>
        </div>
        <div className="up-field">
          <label>Rol:</label>
          <span>{userData.rol}</span>
        </div>

        {/* Campos editables */}
        <div className="up-field">
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formState.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div className="up-field">
          <label>Apellido:</label>
          <input
            type="text"
            name="apellido"
            value={formState.apellido}
            onChange={handleInputChange}
          />
        </div>
        <div className="up-field">
          <label>Teléfono:</label>
          <input
            type="text"
            name="telefono"
            value={formState.telefono}
            onChange={handleInputChange}
          />
        </div>
        <div className="up-field">
          <label>Dirección:</label>
          <input
            type="text"
            name="direccion"
            value={formState.direccion}
            onChange={handleInputChange}
          />
        </div>
        <div className="up-field">
          <label>Correo:</label>
          <input
            type="email"
            name="correo"
            value={formState.correo}
            onChange={handleInputChange}
          />
        </div>
        <div className="up-field">
          <label>Contraseña:</label>
          <input
            type="password"
            name="contraseña"
            value={formState.contraseña}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="up-button" disabled={!hasChanges}>
          Actualizar Perfil
        </button>
      </form>
    </div>
  );
};

export default Perfil;
