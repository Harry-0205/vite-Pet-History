import React, { useEffect, useState } from "react";
import "../../Jillian-App/Estilos.css";
import { crearAgendamiento, obtenerCitas, obtenerProcedimientos } from "../../../api/agendamientoApi";
import { obtenerVeterinariaId } from "../../../api/veterinariasApi";
import { obtenerMascotas } from "../../../api/mascotasApi";


const InformacionCita = () => {
  const handleCrearAgendamiento = async (e) => {
    e.preventDefault();
    try {
    const nuevaCita = await crearAgendamiento(formData);


        setMascotas((prev) =>
        prev.map((m) =>
            m.idMasc === formData.idMascota
            ? { ...m, cita: nuevaCita }
            : m
        )
        );
        alert("Cita asignada correctamente");
        setMostrarModal(false);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Error al asignar cita");
    }
  };


  const [mostrarDetalles, setMostrarDetalles] = useState(null);
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);

    const [mascotas, setMascotas] = useState([]); // antes "paciente"
    const [procedimiento, setProcedimiento] = useState([]);
    const [veterinaria, setVeterinaria] = useState(null);

  const [formData, setFormData] = useState({ fecAg: Date.now(),fecAsi: "",idMascota:"", idProcedimientos: "", idVeterinarias: "" });
  const [mostrarModal, setMostrarModal] = useState(false);

  const [agenda, setAgenda] = useState([
    {
      fecAg: Date.now(),
      fecAsi: "",
      idMascota: "",
      nomMasc: "",
      idProcedimientos: "",
      procedimientos: "",
      idVeterinarias: "",
      nomVet: ""
    }
  ]);

  useEffect(() => {
    const cargarDatos = async () => {
    try {
        const [proceData, veteriData, mascData, citasData] = await Promise.all([
            obtenerProcedimientos(),
            obtenerVeterinariaId(1),
            obtenerMascotas(),
            obtenerCitas(), // 👈 ahora también traemos las citas
        ]);

        // 🔗 Unir cada mascota con su cita
        const mascotasConCitas = mascData.map((m) => {
            const citas = citasData.filter((c) => c.idMascota === m.idMasc);
            return { ...m, citas };
        });

        setMascotas(mascotasConCitas);
        setVeterinaria(veteriData);
        setProcedimiento(proceData);
        } catch (error) {
        console.error("Error al cargar la data:", error);
        }
    };
    cargarDatos();
  }, []);

  const abrirModal = (agenda) => {
    setMascotaSeleccionada(agenda);
    setFormData({ fecAsi: "", nomMasc: "", procedimientos: "", nomVet: "" });
    setMostrarModal(true);
  };

  const eliminarCita = (idMascota) => {
    setAgenda((prev) =>
      prev.map((m) => (m.idMascota === idMascota ? { ...m, cita: null } : m))
    );
    setMostrarDetalles(null);
  };

  return (
    <div className="pantalla-completa">
      <div className="mascotas-container">
        <h2 className="titulo-cita">📅 Gestión de Citas</h2>

        <div className="lista-mascotas">
          {mascotas.length === 0 ? (
            <p>No hay mascotas registradas</p>
          ) : (
            mascotas.map((m) => (
              <div className="mascota-card" key={m.idMasc}
                onClick={() => {
                setMascotaSeleccionada(m);
                setFormData((prev) => ({
                    ...prev,
                    idMascota: m.idMasc,
                }));
                }}>
                <h3>{m.nom}</h3>
                <p><strong>ID:</strong> {m.idMasc}</p>
                {m.citas && m.citas.length > 0 && (
                <>
                    <button
                    className="btn-ver-mas"
                    onClick={() =>
                        setMostrarDetalles(
                        mostrarDetalles === m.idMasc ? null : m.idMasc
                        )
                    }
                    >
                    {mostrarDetalles === m.idMasc ? "Ocultar detalles" : "Ver más"}
                    </button>

                    {mostrarDetalles === m.idMasc && (
                    <div className="detalles-cita scroll-citas">
                        {m.citas.map((cita, index) => (
                        <div key={index} className="cita-item">
                            <p><strong>Fecha:</strong> {cita.fecAsi}</p>
                            <p><strong>Procedimiento:</strong> {cita.procedimientos}</p>
                            <p><strong>Veterinaria:</strong> {cita.nomVet}</p>
                            <hr />
                        </div>
                        ))}
                    </div>
                    )}
                </>
                )}

                <div className="botones-acciones">
                  <button
                    className="btn-agendar-otra"
                    onClick={() => abrirModal(m)}
                  >
                    {m.cita ? "Agendar otra cita" : "Agendar cita"}
                  </button>

                  {m.cita && (
                    <button
                      className="btn-eliminar"
                      onClick={() => eliminarCita(m.idMascota)}
                    >
                      Eliminar cita
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal */}
      {mostrarModal && (
        <div className="modal-fondo">
          <div className="modal-contenido">
            <h3>Agendar cita para {mascotaSeleccionada.nom}</h3>
            <form onSubmit={handleCrearAgendamiento} className="form-cita">
              <label >
                Fecha:
                <input
                  type="date"
                  value={formData.fecAsi}
                  onChange={(e) =>
                    setFormData({ ...formData, fecAsi: e.target.value })
                  }
                  required
                />
              </label>
                <label>
                Procedimiento:
                <select
                    value={formData.idProcedimientos}
                    onChange={(e) =>
                    setFormData({ ...formData, idProcedimientos: e.target.value })
                    }
                    required
                >
                    <option value="">Selecciona un procedimiento</option>
                    {procedimiento.map((proc) => (
                    <option key={proc.idProcedimiento} value={proc.idProcedimiento}>
                        {proc.procedimiento}
                    </option>
                    ))}
                </select>
                </label>
                <label>
                Veterinaria:
                <select
                    value={formData.idVeterinarias}
                    onChange={(e) =>
                    setFormData({ ...formData, idVeterinarias: e.target.value })
                    }
                    required
                >
                    <option value="">Selecciona una veterinaria</option>
                    {Array.isArray(veterinaria) ? (
                    veterinaria.map((vet) => (
                        <option key={vet.idVeterinaria} value={vet.idVeterinaria}>
                        {vet.nombre}
                        </option>
                    ))
                    ) : (
                    <option value={veterinaria?.idVeterinaria || ""}>
                        {veterinaria?.nombre || "Veterinaria no disponible"}
                    </option>
                    )}
                </select>
                </label>
              <div className="modal-botones">
                <button type="submit" className="btn-agendar-otra">
                  Guardar cita
                </button>
                <button
                  type="button"
                  className="btn-eliminar"
                  onClick={() => setMostrarModal(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default InformacionCita;