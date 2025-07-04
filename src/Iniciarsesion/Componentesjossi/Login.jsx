import img1 from "../../assets/imagenes/pet.png";
import { Link } from 'react-router-dom';
import "../Jossimar-estilos/Login.css";
import React from 'react';
import Miguel from "../../home/Miguel/Miguel";
import { Button } from "react-bootstrap";

function Login() {
  return (
    <section className="register-container">
      <aside className="left-section">
        <img src={img1} alt="Pet History Logo" />
        <h1 className="titulo">
          Pet History</h1>
        <p>
          Los animales domésticos, fieles compañeros de nuestras vidas, llenan
          nuestros días de alegría, amor incondicional y una ternura que nos
          recuerda la belleza de compartir el mundo con seres tan nobles y leales.
        </p>
      </aside>

      <main className="right-section">
        <section className="user-type">
          <label htmlFor="Usu">
            <input type="checkbox" name="Usuario" id="Usu" />
            Usuario
          </label>
          <label htmlFor="Prof">
            <input type="checkbox" name="Empleado" id="Prof" />
            Empleado
          </label>
        </section>

        <h2>Iniciar sesión</h2>
        <Button href="/Pro" className="google-button">Iniciar sesión con Google</Button>

        <form className="register-form">
          <section className="input-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input id="email" type="email" placeholder="Escribe tu correo" />
          </section>

          <section className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input id="password" type="password" placeholder="Escribe la contraseña" />
            <p>
              ¿Perdiste tu cuenta? <Link to="/register">Recuperar cuenta</Link>
            </p>
             <p>
          ¿No tienes cuenta? <Link to="/register">Regístrate </Link>
        </p>
          </section>

          <Button href="/Pro" type="submit" className="register-button" >Iniciar sesión</Button>
        </form>
      </main>
    </section>
  );
}
export default Login;