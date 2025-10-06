import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeaderBando.css';
import logo from '../assets/imagenes/logo.png';

function HaderBando() {
  const navigate = useNavigate();

  const handleSalir = () => {
    navigate('/LoginP');
  };

  return (
    <header className="haderbando">
      <div className="haderbando-inner">
        <div className="spacer" />
        <div className="logo-center">
          <img src={logo} alt="Pet History" />
        </div>
        <div className="actions">
          <button className="salir-btn" onClick={handleSalir}>Salir</button>
        </div>
      </div>
    </header>
  );
}

export default HaderBando;
