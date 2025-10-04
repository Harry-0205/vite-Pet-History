import React, { useState } from "react";
import "../Estilos/Estilitos.css";



const mascotasAtendidas = [
  { id: 1, nombre: "Firulais", especie: "Perro", fecha: "2025-09-28", motivo: "Vacunación", veterinario: "Dra. Gómez", observaciones: "Paciente en buen estado de salud." },
  { id: 2, nombre: "Misu", especie: "Gato", fecha: "2025-09-29", motivo: "Consulta general", veterinario: "Dr. Pérez", observaciones: "Recomendación de desparasitación." },
  { id: 3, nombre: "Rocky", especie: "Perro", fecha: "2025-09-25", motivo: "Control post-operatorio", veterinario: "Dra. Hernández", observaciones: "Cicatrización adecuada, continuar con antibióticos." },
  { id: 4, nombre: "Luna", especie: "Gato", fecha: "2025-09-26", motivo: "Desparasitación", veterinario: "Dr. Silva", observaciones: "Se recomienda control en 3 meses." },
  { id: 5, nombre: "Toby", especie: "Perro", fecha: "2025-09-27", motivo: "Chequeo general", veterinario: "Dra. Moreno", observaciones: "Peso adecuado, dieta balanceada recomendada." },
  { id: 6, nombre: "Nala", especie: "Gata", fecha: "2025-09-28", motivo: "Vacunación", veterinario: "Dr. Ríos", observaciones: "Aplicada vacuna triple felina." },
  { id: 7, nombre: "Max", especie: "Perro", fecha: "2025-09-22", motivo: "Problemas digestivos", veterinario: "Dra. Castaño", observaciones: "Tratamiento con dieta blanda por 5 días." },
  { id: 8, nombre: "Kiara", especie: "Perra", fecha: "2025-09-20", motivo: "Vacunación antirrábica", veterinario: "Dr. Lozano", observaciones: "Paciente tranquila, próxima vacuna en 1 año." },
  { id: 9, nombre: "Simba", especie: "Gato", fecha: "2025-09-21", motivo: "Control anual", veterinario: "Dra. Martínez", observaciones: "Se recomienda esterilización." },
  { id: 10, nombre: "Bruno", especie: "Perro", fecha: "2025-09-19", motivo: "Lesión en la pata", veterinario: "Dr. Herrera", observaciones: "Reposo y antiinflamatorio por 7 días." },
];

export default function HistorialMascotas() {
  const [idSeleccionado, setIdSeleccionado] = useState(null);

  const handleClick = (id) => {
    setIdSeleccionado(idSeleccionado === id ? null : id);
  };

  return (
    <div className="historial-container">
      <h2 className="titulo">Mascotas atendidas recientemente</h2>

      <div className="lista-mascotas">
        {mascotasAtendidas.map((mascota) => (
          <div key={mascota.id} className={`tarjeta-mascota ${idSeleccionado === mascota.id ? "activa" : ""}`}>
            <div className="encabezado">
              <h3 className="nombre">{mascota.nombre}</h3>
              <span className="fecha">{mascota.fecha}</span>
            </div>
            <p className="especie">{mascota.especie}</p>

            {idSeleccionado === mascota.id && (
              <div className="detalles">
                <p><strong>Motivo:</strong> {mascota.motivo}</p>
                <p><strong>Veterinario:</strong> {mascota.veterinario}</p>
                <p><strong>Observaciones:</strong> {mascota.observaciones}</p>
              </div>
            )}

            <div className="boton-container">
              <button
                className="boton-vermas"
                onClick={() => handleClick(mascota.id)}
              >
                {idSeleccionado === mascota.id ? "Ver menos" : "Ver más"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
