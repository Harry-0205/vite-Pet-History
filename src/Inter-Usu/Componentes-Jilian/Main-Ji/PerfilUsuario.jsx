import React, { useState } from "react";
import iconoUser from "../../../assets/imagenes/veteri_logos/icono_user.png";
import "../../Jillian-App/Estilos.css";

const PerfilUsuario = ({ toggleProfile }) => {
    const [editableData, setEditableData] = useState({
    telefono: "",
    direccion: "",
    password: "",
});

    const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableData((prev) => ({ ...prev, [name]: value }));
};



    const handleSave = () => {
    alert("Datos guardados");
    toggleProfile();
};

    return (
    <div className="modal-overlay" onClick={toggleProfile}>
        <div className="modal-profile" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
            <h2>Perfil del Usuario</h2>
            <button className="btn-close" onClick={toggleProfile}>
            ×
            </button>
        </div>

        <div className="profile-body">
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
                <span className="label">Usuario ID:</span>
                <span className="value">0012345</span>
            </div>
            <div className="field non-editable">

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
            <button className="btn guardar" onClick={handleSave}>
            Guardar
            </button>
            <button className="btn cerrar" onClick={toggleProfile}>
            Cancelar
            </button>
        </div>
        </div>
    </div>
    );
};

export default PerfilUsuario;
