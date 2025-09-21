import React, { useState } from "react";

const HistoriaClinica = () => {
  const [mostrarReporte, setMostrarReporte] = useState(true);
  const [mostrarProcedimientos, setMostrarProcedimientos] = useState(true);

  return (
    <div className="pantalla-completa">
      <div className="historia-container">
        <div className="historia-header">
          <h2>Historia Clínica</h2>
          <div className="historia-info">
            <p><strong>Paciente:</strong> Pepe</p>
            <p><strong>Fecha:</strong> 20/09/2025</p>
          </div>
        </div>

        <div className="historia-body">
          <div className="historia-section">
            <h3 onClick={() => setMostrarReporte(!mostrarReporte)}>
              📋 Reporte {mostrarReporte ? "▲" : "▼"}
            </h3>
            {mostrarReporte && (
              <div className="historia-reporte">
                <p>Durante la consulta médica general, el paciente fue valorado de manera integral,
                evidenciando un estado de salud estable.</p>
                <p>Se aplicó la vacuna antirrábica conforme al esquema de prevención,
                y se brindaron recomendaciones sobre cuidados nutricionales y hábitos de bienestar.</p>
                <p>Se sugiere mantener controles periódicos para garantizar un adecuado seguimiento clínico.</p>
              </div>
            )}
          </div>

          <div className="historia-section">
            <h3 onClick={() => setMostrarProcedimientos(!mostrarProcedimientos)}>
              🏥 Procedimientos Realizados {mostrarProcedimientos ? "▲" : "▼"}
            </h3>
            {mostrarProcedimientos && (
              <ul className="historia-procedimientos">
                <li>Consulta médica general</li>
                <li>Aplicación de vacuna antirrábica</li>
                <li>Examen físico completo</li>
                <li>Control nutricional</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoriaClinica;
