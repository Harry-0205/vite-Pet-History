
import React, { useState } from "react";
import "../Estilos/Estilitos.css";


const Citas = () => {
  // Arreglo de citas
  const citas = [
    {
      mascota: "Firulais",
      fecha: "2025-10-10",
      hora: "10:00 AM",
      veterinario: "Dr. Gómez",
      servicios: ["Vacunación", "Chequeo general"],
      notas: "Llevar historial médico"
    },
    {
      mascota: "Michi",
      fecha: "2025-10-12",
      hora: "02:00 PM",
      veterinario: "Dra. Pérez",
      servicios: ["Desparasitación"],
      notas: ""
    },
    {
      mascota: "Luna",
      fecha: "2025-10-15",
      hora: "09:00 AM",
      veterinario: "Dr. Ramírez",
      servicios: ["Corte de uñas", "Baño"],
      notas: "Revisar alergias"
    },
  ];

  // Estado para filtros
  const [filtroVeterinario, setFiltroVeterinario] = useState("");
  const [filtroFecha, setFiltroFecha] = useState("");

  // Estado para modal
  const [modalVisible, setModalVisible] = useState(false);
  const [citaSeleccionada, setCitaSeleccionada] = useState(null);

  // Filtrar citas
  const citasFiltradas = citas.filter(cita => {
    return (
      (filtroVeterinario === "" || cita.veterinario.toLowerCase().includes(filtroVeterinario.toLowerCase())) &&
      (filtroFecha === "" || cita.fecha === filtroFecha)
    );
  });

  // Función para resaltar citas próximas
  const esProxima = (fecha) => {
    const hoy = new Date();
    const citaFecha = new Date(fecha);
    const diff = (citaFecha - hoy) / (1000 * 60 * 60 * 24);
    return diff >= 0 && diff <= 3;
  };

  // Abrir modal
  const abrirModal = (cita) => {
    setCitaSeleccionada(cita);
    setModalVisible(true);
  };

  // Cerrar modal
  const cerrarModal = () => {
    setModalVisible(false);
    setCitaSeleccionada(null);
  };

  return (
    <div className="dashboard-container">
      <h2>Mis Citas Programadas</h2>

      {/* Filtros */}
      <div className="filtros">
        <input
          type="text"
          placeholder="Filtrar por veterinario"
          value={filtroVeterinario}
          onChange={(e) => setFiltroVeterinario(e.target.value)}
        />
        <input
          type="date"
          value={filtroFecha}
          onChange={(e) => setFiltroFecha(e.target.value)}
        />
      </div>

      {/* Lista de citas */}
      {citasFiltradas.length === 0 ? (
        <p className="no-citas">No hay citas que coincidan con los filtros</p>
      ) : (
        <div className="citas-grid">
          {citasFiltradas.map((cita, index) => (
            <div key={index} className={`cita-card ${esProxima(cita.fecha) ? "proxima" : ""}`}>
              <div className="cita-header">
                <span className="icon-mascota">🐶</span>
                <h3>{cita.mascota}</h3>
              </div>

              <div className="cita-info">
                <p><span className="icon">📅</span> {cita.fecha}</p>
                <p><span className="icon">⏰</span> {cita.hora}</p>
                <p><span className="icon">👩‍⚕️</span> {cita.veterinario}</p>
                <p><span className="icon">🛠️</span> {cita.servicios.join(", ")}</p>
                <p><span className="icon">📝</span> {cita.notas || "Ninguna"}</p>
              </div>

              {/* Botón para ver detalles */}
              <div className="cita-botones">
                <button onClick={() => abrirModal(cita)}>Ver Detalles</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {modalVisible && citaSeleccionada && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Detalles de {citaSeleccionada.mascota}</h3>
            <p><strong>Fecha:</strong> {citaSeleccionada.fecha}</p>
            <p><strong>Hora:</strong> {citaSeleccionada.hora}</p>
            <p><strong>Veterinario:</strong> {citaSeleccionada.veterinario}</p>
            <p><strong>Servicios:</strong> {citaSeleccionada.servicios.join(", ")}</p>
            <p><strong>Notas:</strong> {citaSeleccionada.notas || "Ninguna"}</p>
            <button className="cerrar-modal" onClick={cerrarModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Citas;
