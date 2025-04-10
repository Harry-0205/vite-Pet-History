import React from 'react';
import '../Jilian-Estillos/Estilos.css';

function Jilian2() {
    return (
    <div className="jilian2-container">
        
        <header className="header">
        <div className="menu-icon">☰</div>
        <nav className="dropdown-menu">
            <select>
            <option>Perfil-Mascota</option>
            <option>Historia-clinica</option>
            <option>Informacion-Cita</option>
            <option>Veterinarias</option>
        </select>
        </nav>
        <div className="logo-box">🐾LOGO🐾</div>
        <div className="buttons">
            <button>Perfil</button>
            <button>Salir</button>
        </div>
        </header>

    <main className="main-content">
        <h3>Historia-Clinica</h3>
        <div className="historia-clinica-box">
    <div className="paciente-info">
            <p><strong>PACIENTE:</strong> XXXXXXXXXXXXX XXXXXXX</p>
            <p><strong>FECHA:</strong> XX/ XX/ XXXX</p>
    </div>

    <div className="reporte-procedimientos">
            <h4>REPORTE:</h4>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>

            <h4>PROCEDIMIENTOS REALIZADOS:</h4>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            </div>
        </div>
    </main>
    
    <footer className="footer">Footer</footer>
    </div>
);
}

export default Jilian2;

