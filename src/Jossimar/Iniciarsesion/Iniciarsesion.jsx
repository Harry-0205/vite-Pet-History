import { Link } from 'react-router-dom';
import '../Iniciarsesion/iniciarsesion.css';
import backgroundImage from '../../assets/imagenes/img8.png'
import logo from '../../assets/imagenes/logo.png';

function IniciarSesion() {
    return (
    <div className="login-container">
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
            <input type="checkbox" />
            Usuario
            </label>
            <label className="remember-me">
            <input type="checkbox" />
            Administrador
            </label>
            </div>
        <form className="login-formulario">
        <div className="input-group">
            <label htmlFor="usuario"></label>
            <input type="text" id="usuario" placeholder="Usuario" />
        </div>
        <div className="input-group">
            <label htmlFor="contrasena"></label>
            <input type="password" id="contrasena" placeholder="Contraseña" />
        </div>
        <div className="options2">
            <label className="remember-me">
            <input type="checkbox" />
            Recuérdame
            </label>
            <Link to="/Recuperarcontra" className="recover-link">¿Recuperar contraseña?</Link>
        </div>
        <button type="submit" className="login-button">Iniciar sesión</button>
        </form>
    </div>
    <div className="right-section">
        <div className="background-container">
            <p className="footer">Información general en nuestro sitio web pet-history.com</p>
        </div>
    </div>
        </div>
);
}
export default IniciarSesion;