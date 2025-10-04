import React, { useState, useEffect, useRef } from "react";
import iconoUser from "../../../assets/imagenes/veteri_logos/icono_user.png";

const especiesData = {
  Perro: ["Labrador", "Pastor Alemán", "Pug", "Bulldog", "Golden Retriever"],
  Gato: ["Persa", "Siames", "Bengalí", "Esfinge", "Maine Coon"],
  Ave: ["Canario", "Periquito", "Loro", "Cacatúa"],
  Pez: ["Goldfish", "Betta", "Guppy", "Cíclido"],
  Conejo: ["Mini Lop", "Holandés", "Cabeza de León"],
};

const PerfilMascota = () => {
  const [mascotas, setMascotas] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    especie: "",
    raza: "",
    edad: "",
    nit: "",
    correo: "",
    vacunas: "",
    foto: null,
  });
  const [mostrarFormulario, setMostrarFormulario] = useState(true);

  const listaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.especie || !formData.raza || !formData.edad) {
      alert("Por favor completa los campos obligatorios");
      return;
    }

    setMascotas((prev) => [...prev, { ...formData, id: Date.now() }]);
    setFormData({ nombre: "", especie: "", raza: "", edad: "", vacunas: "", foto: null });
    setMostrarFormulario(false);
  };

  const eliminarMascota = (id) => {
    setMascotas((prev) => prev.filter((m) => m.id !== id));
  };

  useEffect(() => {
    if (listaRef.current) {
      const container = listaRef.current;
      container.scrollTop = (container.scrollHeight - container.clientHeight) / 2;
      container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
    }
  }, [mascotas]);

  return (
    <div className="pantalla-completa">
      <div className="mascotas-container">
        <h2>Gestión de Mascotas</h2>


        {!mostrarFormulario && (
          <button className="btn-toggle-formulario" onClick={() => setMostrarFormulario(true)}>
            Agregar otra mascota
          </button>
        )}

        {mostrarFormulario && (
          <form onSubmit={handleSubmit} className="form-mascota">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre de la mascota"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <select
              name="especie"
              value={formData.especie}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona especie</option>
              {Object.keys(especiesData).map((especie) => (
                <option key={especie} value={especie}>{especie}</option>
              ))}
            </select>
            <select
              name="raza"
              value={formData.raza}
              onChange={handleChange}
              required
              disabled={!formData.especie}
            >
              <option value="">Selecciona raza</option>
              {formData.especie &&
                especiesData[formData.especie].map((raza) => (
                  <option key={raza} value={raza}>{raza}</option>
                ))}
            </select>
            <input
              type="number"
              name="edad"
              placeholder="Edad"
              value={formData.edad}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="vacunas"
              placeholder="Vacunas (opcional)"
              value={formData.vacunas}
              onChange={handleChange}
            />
            <input
              type="file"
              name="foto"
              accept="image/*"
              onChange={handleChange}
            />
            <button type="submit">Agregar Mascota</button>
          </form>
        )}

        <div className="lista-mascotas" ref={listaRef}>
          {mascotas.length === 0 ? (
            <p>No hay mascotas registradas</p>
          ) : (
            mascotas.map((m) => (
              <div key={m.id} className="mascota-card">
                <img
                  src={m.foto ? URL.createObjectURL(m.foto) : iconoUser}
                  alt={m.nombre}
                  className="foto-mascota"
                />
                <h3>{m.nombre}</h3>
                <p><strong>Especie:</strong> {m.especie}</p>
                <p><strong>Raza:</strong> {m.raza}</p>
                <p><strong>Edad:</strong> {m.edad} años</p>
                {m.vacunas && (
                  <p><strong>Vacunas:</strong> {m.vacunas}</p>
                )}
                <button onClick={() => eliminarMascota(m.id)}>Eliminar</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PerfilMascota;
