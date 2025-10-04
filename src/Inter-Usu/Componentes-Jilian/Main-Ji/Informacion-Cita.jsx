import React, { useState } from "react";
import "../../Jillian-App/Estilos.css";

const InformacionCita = () => {
    const [mascotas, setMascotas] = useState([
    {
        id: 1,
        nombre: "Chanda",
        especie: "Canino",
        raza: "Pastor Alemán",
        edad: "1 año",
        vacunas: "Ninguna",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9hiO_ZFhEH7gSrb_Sar4jH_lqDYDDi_OpjA&s",
        cita: null,
    },
    {
        id: 2,
        nombre: "Luna",
        especie: "Felino",
        raza: "Birmano",
        edad: "4 años",
        vacunas: "Rabia, Vacuna contra FeLV",
        foto: "https://nfnatcane.es/blog/wp-content/uploads/2020/02/gato-birmano.jpg",
        cita: {
        fecha: "2025-10-10",
        hora: "09:00",
        motivo: "Vacunación",
},
},
]);

    const [mostrarDetalles, setMostrarDetalles] = useState(null);
    const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);
    const [formData, setFormData] = useState({ fecha: "", hora: "", motivo: "" });
    const [mostrarModal, setMostrarModal] = useState(false);

const abrirModal = (mascota) => {
    setMascotaSeleccionada(mascota);
    setFormData({ fecha: "", hora: "", motivo: "" });
    setMostrarModal(true);
};

const guardarCita = (e) => {
    e.preventDefault();
    setMascotas((prev) =>
    prev.map((m) =>
        m.id === mascotaSeleccionada.id
        ? { ...m, cita: { ...formData } }
        : m
    )
);
    setMostrarModal(false);
};

const eliminarCita = (id) => {
    setMascotas((prev) =>
    prev.map((m) => (m.id === id ? { ...m, cita: null } : m))
    );
    setMostrarDetalles(null);
};

return (
    <div className="pantalla-completa">
        <div className="mascotas-container">
        <h2 className="titulo-cita">📅 Gestión de Citas</h2>

        <div className="lista-mascotas">
            {mascotas.map((mascota) => (
            <div className="mascota-card" key={mascota.id}>
                <img
                src={mascota.foto}
                alt={mascota.nombre}
                className="foto-mascota"
                />
                <h3>{mascota.nombre}</h3>
                <p><strong>Especie:</strong> {mascota.especie}</p>
                <p><strong>Raza:</strong> {mascota.raza}</p>
                <p><strong>Edad:</strong> {mascota.edad}</p>
                <p><strong>Vacunas:</strong> {mascota.vacunas}</p>

            {mascota.cita && (
                <button
                    className="btn-ver-mas"
                    onClick={() =>
                    setMostrarDetalles(
                        mostrarDetalles === mascota.id ? null : mascota.id
                    )
}
                >
                    {mostrarDetalles === mascota.id ? "Ocultar detalles" : "Ver más"}
                </button>
)}

            {mostrarDetalles === mascota.id && mascota.cita && (
                <div className="detalles-cita">
                    <p><strong>Fecha:</strong> {mascota.cita.fecha}</p>
                    <p><strong>Hora:</strong> {mascota.cita.hora}</p>
                    <p><strong>Motivo:</strong> {mascota.cita.motivo}</p>
                </div>
)}

            <div className="botones-acciones">
                <button
                    className="btn-agendar-otra"
                    onClick={() => abrirModal(mascota)}
                >
                    {mascota.cita ? "Agendar otra cita" : "Agendar cita"}
                </button>

                {mascota.cita && (
                <button
                    className="btn-eliminar"
                    onClick={() => eliminarCita(mascota.id)}
                >
                    Eliminar cita
                </button>
)}
            </div>
            </div>
))}
        </div>
    </div>

    {mostrarModal && (
        <div className="modal-fondo">
            <div className="modal-contenido">
            <h3>Agendar cita para {mascotaSeleccionada.nombre}</h3>
            <form onSubmit={guardarCita} className="form-cita">
            <label>
                Fecha:
                <input
                    type="date"
                    value={formData.fecha}
                    onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                    required
                />
            </label>
            <label>
                Hora:
                <input
                    type="time"
                    value={formData.hora}
                    onChange={(e) => setFormData({ ...formData, hora: e.target.value })}
                    required
                />
            </label>
            <label>
                Motivo:
                <input
                    type="text"
                    placeholder="Motivo de la cita"
                    value={formData.motivo}
                    onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
                    required
                />
            </label>
            <div className="modal-botones">
                <button type="submit" className="btn-agendar-otra">Guardar cita</button>
                <button type="button" className="btn-eliminar" onClick={() => setMostrarModal(false)}>
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
