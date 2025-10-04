import React, { useState } from "react";
import "../../Jillian-App/Estilos.css";

const InformacionCita = () => {
    const [cita, setCita] = useState(null);
    const [form, setForm] = useState({
    mascota: "",
    foto: null,
    fecha: "",
    hora: "",
    veterinario: "",
    veterinaria: "",
    motivo: ""
});

const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
};

const agendarCita = (e) => {
    e.preventDefault();
    setCita(form);
};

const cancelarCita = () => {
    setCita(null);
    setForm({ mascota: "", foto: null, fecha: "", hora: "", veterinario: "", veterinaria: "", motivo: "" });
};

return (
    <div className="contenedor-cita">
    <h2 className="titulo-cita">📅 Gestión de Citas</h2>

    {!cita ? (
        <form className="formulario-cita" onSubmit={agendarCita}>
        <h3 className="subtitulo">Agendar Nueva Cita</h3>

        <input type="text" name="mascota" placeholder="Nombre de la mascota" value={form.mascota} onChange={handleChange} required />
        <input type="file" name="foto" accept="image/*" onChange={handleChange} />
        <input type="date" name="fecha" value={form.fecha} onChange={handleChange} required />
        <input type="time" name="hora" value={form.hora} onChange={handleChange} required />
        <input type="text" name="veterinario" placeholder="Nombre del veterinario" value={form.veterinario} onChange={handleChange} required />
        <input type="text" name="veterinaria" placeholder="Nombre de la veterinaria" value={form.veterinaria} onChange={handleChange} required />
        <textarea name="motivo" placeholder="Motivo de la cita" value={form.motivo} onChange={handleChange} required />
        <button type="submit" className="btn-agendar">Agendar Cita</button>
        </form>
    ) : (
        <div className="cita-agendada">
        <h3 className="subtitulo">📌 Cita Agendada</h3>
        {cita.foto && <img src={URL.createObjectURL(cita.foto)} alt="Mascota" className="foto-mascota" />}
        <p><strong>Mascota:</strong> {cita.mascota}</p>
        <p><strong>Fecha:</strong> {cita.fecha}</p>
        <p><strong>Hora:</strong> {cita.hora}</p>
        <p><strong>Veterinario:</strong> {cita.veterinario}</p>
        <p><strong>Veterinaria:</strong> {cita.veterinaria}</p>
        <p><strong>Motivo:</strong> {cita.motivo}</p>
        <p><strong>Estado:</strong> ⏳ Pendiente</p>
        <button className="btn-cancelar" onClick={cancelarCita}>Cancelar Cita</button>
        </div>
)}
    </div>
);
};

export default InformacionCita;
