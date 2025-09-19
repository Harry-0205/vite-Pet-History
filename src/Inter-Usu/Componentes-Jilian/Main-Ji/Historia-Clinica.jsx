import React from "react";
import "../../Jillian-App/Estilos.css";

const HistoriaClinica = () => {
  return (
    <div className="historia-container">
      <div className="historia-header">
        <h2>Historia Clínica</h2>
        <div className="historia-info">
          <p><strong>Paciente:</strong> XXXXXXXX XXXXXXXX</p>
          <p><strong>Fecha:</strong> 20/09/2025</p>
        </div>
      </div>

      <div className="historia-body">
        <div className="historia-reporte">
          <h3>Reporte:</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
            sed quia consequuntur magni dolores eos.
          </p>
        </div>

        <div className="historia-procedimientos">
          <h3>Procedimientos Realizados:</h3>
          <ul>
            <li>Consulta médica general</li>
            <li>Aplicación de vacuna antirrábica</li>
            <li>Examen físico completo</li>
            <li>Control nutricional</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HistoriaClinica;
