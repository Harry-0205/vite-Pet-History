import React from 'react';
import '../Jillian-App/Estilos.css';
import Calen from '../Imagenes/Calen.jpg';

const Jilian4 = () => {
  return (
    <div className="pagina">
      <div className="contenedor-principal">
        <div className="cita">
          <div>
            <h2>Próxima Cita</h2>
            <p><strong>Fecha:</strong> 30/04/2025</p>
            <p><strong>Hora:</strong> 10:30 a.m.</p>
            <p><strong>Veterinaria:</strong> AnimalCare</p>
          </div>
          <img src={Calen} alt="Calendario" className="img-cita" />
        </div>
      </div>

     
    </div>
  );
};

export default Jilian4;
