import { Link } from "react-router-dom";
import "./Iniciarsesion.css";
import backgroundImage from "../../assets/imagenes/img10.png";
import logo from "../../assets/imagenes/logo.png"
import vetImage from "../../assets/imagenes/img10.png"

function Iniciarsesion(){
    return (
        <div className="login-container">
    <div className="left-section">
        <img src={vetImage} alt="Veterinario con perro" className="vet-image" />
    </div>
    <div className="center-section">
        <div className="header-container">
        <div className="logo-container">
            <img src={logo} alt="Pet History Logo" className="logo-image" />
        </div>
        <h2>Iniciar sesión</h2>
        <p className="subtitle">La manera más fácil y segura de gestionar las citas de tu mascota</p>
        </div>
        <div className="options">
        <label className="remember-me">
            <input type="checkbox" /> Usuario
        </label>
        <label className="remember-me">
            <input type="checkbox" /> Administrador
        </label>
        </div>
        <div className="login-formulario">
        <div className="input-group">
            <input type="text" id="usuario" placeholder="Usuario" />
        </div>
        <div className="input-group">
            <input type="password" id="contrasena" placeholder="Contraseña" />
        </div>
        <div className="options2">
            <label className="remember-me">
            <input type="checkbox" /> Recuérdame
            </label>
            <Link to="/Recuperarcontra" className="recover-link">¿Recuperar contraseña?</Link>
        </div>
        <Link to="/">
            <button type="button" className="login-button">Iniciar sesión</button>
        </Link>
        <div className="help-center" style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
            <p>Centro de Ayuda</p>
            <p>Información general en nuestro sitio web <a href="https://Pethistory.co" style={{ color: '#00aaff' }}>Pethistory.co</a></p>
        </div>
        </div>
    </div>
    </div>
    );
}