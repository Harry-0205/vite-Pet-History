import React, { useState } from "react";
import "../../Jilian/../Jillian-App/Estilos.css";

const HistoriaClinica = () => {
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <div className="historia-clinica-wrapper-fullscreen">
      <div className="historia-header-nueva">
        <h1 className="titulo-historia-nueva-izquierda">📘 Historia Clínica</h1>
      </div>

      <div className="card-mascota-nueva">
        <img
          src="https://placedog.net/400/400"
          alt="Mascota"
          className="foto-mascota-nueva"
        />
        <h2 className="nombre-mascota">Pepe</h2>
        <button className="btn-vermas-nuevo" onClick={() => setModalAbierto(true)}>
          Ver más
        </button>
      </div>

      {modalAbierto && (
        <div className="modal-fondo-nuevo">
          <div className="modal-contenido-nuevo">
            <h2>Historia Clínica de Pepe</h2>

            <div className="seccion-historia">
              <h3>📋 Reporte</h3>
              <p>
                Durante la consulta médica general, el paciente fue valorado de manera integral, evidenciando un estado de salud estable.
              </p>
              <p>
                Se aplicó la vacuna antirrábica conforme al esquema de prevención, y se brindaron recomendaciones sobre cuidados nutricionales y hábitos de bienestar.
              </p>
              <p>
                Se sugiere mantener controles periódicos para garantizar un adecuado seguimiento clínico.
              </p>
            </div>

            <div className="seccion-historia">
              <h3>🏥 Procedimientos Realizados</h3>
              <ul>
                <li>Consulta médica general</li>
                <li>Aplicación de vacuna antirrábica</li>
                <li>Examen físico completo</li>
                <li>Control nutricional</li>
              </ul>
            </div>

            <button className="btn-cerrar-modal" onClick={() => setModalAbierto(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoriaClinica;
