import '../Jilian-Estillos/Estilos.css'
import React, { useState } from 'react';
import Mn from "../Componentes-Jilian/Mn"

function Jilian() {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  return (
    <div className="Jilian"> 
    
      <header className="header"> 
        <Mn></Mn>
        <div className="logo">🐾 Logo 🐾</div>
        <div className="botones">
          <button>Perfil</button>
          <button>Salir</button>
        </div>
      </header>

      <main className="main">
        <div className="calendario">Calendario</div>
        <div className="Recordatorio">Recordatorio</div>
      </main>

      <footer className="footer">Footer </footer>
    </div>
  );
}

export default Jilian;