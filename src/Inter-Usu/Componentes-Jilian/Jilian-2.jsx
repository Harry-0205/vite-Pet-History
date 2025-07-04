import React from 'react';
import '../Jillian-App/Estilos.css';
import DOG from '../Imagenes/DOG.jpg';

const Jilian2 = () => {
  return (
    <div className="contenedor-principal">
      <div className="perfil-contenedor">
        <img src={DOG} alt="Mascota" className="imagen-perfil" />
        <div className="info-perfil">
          <p><strong>Nombre:</strong> Max</p>
          <p><strong>Raza:</strong> Labrador</p>
          <p><strong>Edad:</strong> 4 años</p>
          <p><strong>Vacunas:</strong> Completas</p>
        </div>
      </div>
    </div>
  );
};

export default Jilian2;

