import React from "react";
import "./admin.css";

const VeterinariaCard = ({ nombre, direccion, nit, correo, veterinarios, onEdit, onDelete, onAddVet, onEditVet, onDeleteVet }) => {
    return (
      <div className="admin-card-container">
        <div className="admin-card">
          <div className="admin-card-header">
            <h2 className="admin-card-title-gradient">{nombre} <span className="icon-edit" onClick={onEdit} title="Editar" role="button">✎</span> <span className="icon-delete" onClick={onDelete} title="Eliminar" role="button">X</span></h2>
          </div>
          <div className="admin-card-body">
            <p><b>Dirección:</b> {direccion}</p>
            <p><b>NIT:</b> {nit}</p>
            <p><b>Correo:</b> {correo}</p>
            <h3>Veterinarios</h3>
            <button className="admin-add-btn" onClick={onAddVet}>+ Agregar</button>
            <div className="admin-vets-list admin-vets-list-scroll">
              {veterinarios.map((vet, idx) => (
                <div className="admin-vet-item" key={idx}>
                  <div>
                    <b>{vet.nombre}</b>
                    <div className="admin-vet-cedula"><b>Cédula:</b> {vet.cedula}</div>
                    <div className="admin-vet-correo"><b>Correo:</b> {vet.correo}</div>
                    <div className="admin-vet-telefono"><b>Teléfono:</b> {vet.telefono}</div>
                  </div>
                  <span className="icon-edit" onClick={() => onEditVet(idx)} title="Editar Veterinario" role="button">✎</span>
                  <span className="icon-delete" onClick={() => onDeleteVet(idx)} title="Eliminar Veterinario" role="button">X</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default VeterinariaCard;
 