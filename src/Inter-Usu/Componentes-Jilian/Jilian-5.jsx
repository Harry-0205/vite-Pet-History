import React from 'react';
import '../Jillian-App/Estilos.css';
import LG from '../Imagenes/LG.png';

const Jilian5 = () => {
  return (
    <div className="contenedor-principal veterinarias">
      <h2>Últimas Veterinarias Visitadas</h2>
      <img src={LG} alt="Veterinaria" className="img-vet" />
      <ul>
        <li>Veterinaria AnimalCare - 01/04/2025</li>
        <li>Veterinaria PetPlus - 15/03/2025</li>
        <li>Clínica Felina y Canina - 28/02/2025</li>
      </ul>


    </div>
  );
};

export default Jilian5;
