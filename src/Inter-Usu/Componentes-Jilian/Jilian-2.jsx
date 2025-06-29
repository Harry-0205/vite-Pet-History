import React from 'react';
import '../Jillian-App/Estilos.css';
import DOG from '../Imagenes/DOG.jpg';

const Jilian2 = () => {
  return (
    <div className="pagina">
      <div className="perfil-contenedor">
        <img src={DOG} alt="Mascota" className="imagen-perfil" />
        <div className="info-perfil">
          <p><strong>Nombre:</strong> Max</p>
          <p><strong>Raza:</strong> Labrador</p>
          <p><strong>Edad:</strong> 4 años</p>
          <p><strong>Vacunas:</strong> Completas</p>
        </div>
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

export default Jilian2;