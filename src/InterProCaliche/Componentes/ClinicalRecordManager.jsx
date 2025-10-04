import React, { useState } from "react";
import "../Estilos/Estilitos.css";


export default function ClinicalRecordManager() {
  const [records, setRecords] = useState([]); // almacena todas las historias creadas
  const [showForm, setShowForm] = useState(false);
  const [searchNumber, setSearchNumber] = useState("");
  const [searchOwner, setSearchOwner] = useState("");
  const [results, setResults] = useState([]);

  const [form, setForm] = useState({
    recordNumber: "",
    name: "",
    species: "",
    breed: "",
    age: "",
    sex: "",
    ownerName: "",
    ownerPhone: "",
    notes: "",
  });

  // Manejar cambios en el formulario
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // Guardar una nueva historia
  function handleSubmit(e) {
    e.preventDefault();
    if (!form.recordNumber || !form.name || !form.ownerName) {
      alert("Debes completar: número de historia, nombre de mascota y nombre del propietario.");
      return;
    }
    setRecords([...records, form]);
    setForm({
      recordNumber: "",
      name: "",
      species: "",
      breed: "",
      age: "",
      sex: "",
      ownerName: "",
      ownerPhone: "",
      notes: "",
    });
    setShowForm(false);
    alert("Historia clínica guardada ✅");
  }

  // Buscar por número de historia o por dueño
  function handleSearch() {
    const filtered = records.filter(
      (r) =>
        (searchNumber && r.recordNumber.includes(searchNumber)) ||
        (searchOwner && r.ownerName.toLowerCase().includes(searchOwner.toLowerCase()))
    );
    setResults(filtered);
  }

  return (
    <div className="clinical-container">
      <h2 className="titulo">Gestión de Historias Clínicas</h2>

      {/* Banner de búsqueda */}
      <div className="banner busqueda">
        <div className="campo">
          <label>Buscar por # Historia Clínica</label>
          <input
            type="text"
            value={searchNumber}
            onChange={(e) => setSearchNumber(e.target.value)}
            placeholder="Ej: HC-123456"
          />
        </div>
        <div className="campo">
          <label>Buscar por nombre del dueño</label>
          <input
            type="text"
            value={searchOwner}
            onChange={(e) => setSearchOwner(e.target.value)}
            placeholder="Ej: Juan Pérez"
          />
        </div>
        <button className="btn" onClick={handleSearch}>Buscar</button>
      </div>

      {/* Banner de creación */}
      <div className="banner crear">
        <button className="btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cerrar Formulario" : "Crear Nueva Historia Clínica"}
        </button>
      </div>

      {/* Formulario */}
      {showForm && (
        <div className="formulario">
          <form onSubmit={handleSubmit}>
            <div className="fila">
              <label># Historia Clínica</label>
              <input name="recordNumber" value={form.recordNumber} onChange={handleChange} />
            </div>
            <div className="fila">
              <label>Nombre de la Mascota</label>
              <input name="name" value={form.name} onChange={handleChange} />
            </div>
            <div className="fila">
              <label>Especie</label>
              <input name="species" value={form.species} onChange={handleChange} />
            </div>
            <div className="fila">
              <label>Raza</label>
              <input name="breed" value={form.breed} onChange={handleChange} />
            </div>
            <div className="fila">
              <label>Edad</label>
              <input name="age" value={form.age} onChange={handleChange} />
            </div>
            <div className="fila">
              <label>Sexo</label>
              <input name="sex" value={form.sex} onChange={handleChange} />
            </div>
            <div className="fila">
              <label>Nombre del Propietario</label>
              <input name="ownerName" value={form.ownerName} onChange={handleChange} />
            </div>
            <div className="fila">
              <label>Teléfono del Propietario</label>
              <input name="ownerPhone" value={form.ownerPhone} onChange={handleChange} />
            </div>
            <div className="fila">
              <label>Notas / Observaciones</label>
              <textarea name="notes" value={form.notes} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="btn">Guardar Historia Clínica</button>
          </form>
        </div>
      )}

      {/* Resultados */}
      <div className="resultados">
        <h3>Resultados de búsqueda</h3>
        {results.length === 0 ? (
          <p>No hay resultados para mostrar.</p>
        ) : (
          <ul>
            {results.map((r, i) => (
              <li key={i} className="card">
                <strong>{r.name}</strong> ({r.species}, {r.breed})  
                <br /> <span>Propietario: {r.ownerName} - Tel: {r.ownerPhone}</span>
                <br /> <span># {r.recordNumber}</span>
                <p><em>{r.notes}</em></p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
