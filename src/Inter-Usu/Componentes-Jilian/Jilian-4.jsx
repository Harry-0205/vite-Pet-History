import React from 'react';
import '../Jillian-App/Estilos.css';
import Calen from '../Imagenes/Calen.jpg';

const Jilian4 = () => {
  return (
    <div className="pagina">
      <div className="contenedor-principal cita">
        <div>
          <h2>Próxima Cita</h2>
          <p><strong>Fecha:</strong> 30/04/2025</p>
          <p><strong>Hora:</strong> 10:30 a.m.</p>
          <p><strong>Veterinaria:</strong> AnimalCare</p>
        </div>
        <img src={Calen} alt="Calendario" className="img-cita" />
      </div>

      <footer className="footer">
        <div className="footer-contenido">
          <p><strong>PET-HISTORY</strong> &copy; 2025</p>
          <p>Desarrollado por el equipo PET-HISTORY</p>
          <p>Contacto: soporte@pet-history.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Jilian4;