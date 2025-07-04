import React from 'react';
import '../Jillian-App/Estilos.css';

const Jilian3 = () => {
  return (
    <div className="contenedor-principal historial">
      <h2>Historial Clínico</h2>
      <p><strong>Paciente:</strong> Max</p>
      <p><strong>Fecha:</strong> 23/04/2025</p>

      <div className="reporte">
        <h4>Reporte</h4>
        <p>Revisión general realizada. Se detectó leve inflamación en oído derecho. Se prescribió tratamiento.</p>
      </div>

      <div className="procedimientos">
        <h4>Procedimientos Realizados</h4>
        <ul>
          <li>Vacunación antirrábica</li>
          <li>Desparasitación</li>
        </ul>
      </div>

   
    </div>
  );
};

export default Jilian3;
