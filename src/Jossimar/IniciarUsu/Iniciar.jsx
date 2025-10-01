import { Link } from "react-router-dom";
import "./Iniciar.css";
import backgroundImage from "../../assets/imagenes/img10.png";
import logo from "../../assets/imagenes/logo.png";

function Iniciar() {
return (
    <div className="login-container">
    <div className="center-section">
        <div className="header-container">
        <div className="logo-container">
            <img src={logo} alt="Pet History Logo" className="logo-image" />
        </div>
        <h2>Iniciar Sesión</h2>
        </div>
        <div className="login-formulario">
        <div className="input-group">
            <input type="text" id="usuario" placeholder="Usuario" />
        </div>
        <div className="input-group">
            <input type="password" id="contrasena" placeholder="Contraseña" />
        </div>
            <button type="button" className="login-button">Iniciar sesión</button>
        </div>
        <div className="help-center">
        <p>Centro de Ayuda</p>
        <p>Información general en nuestro sitio web <a href="http://localhost:5173/">Pethistory</a></p>
    </div>
    </div>
    <div className="right-section">
        <div className="background-container"></div>
    </div>
    </div>
);
}

export default Iniciar;