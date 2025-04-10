import img1 from "../assets/WhatsApp Image 2025-04-03 at 1.47.34 PM-Photoroom.png";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className="register-container">
      <aside className="left-section">
        <img src={img1} alt="Pet History Logo" />
        <h1 className="logo">Pet History</h1>
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
        <button className="google-button">Iniciar sesión con Google</button>
        <p>
          ¿No tienes cuenta? <Link to="/register">Regístrate rápido</Link>
        </p>
        <hr className="divider" />

        <form className="register-form">
          <section className="input-group">
            <label htmlFor="Usuario">Usuario</label>
            <input id="Usuario" type="email" placeholder="Escribe tu usuario" />
          </section>

          <section className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input id="password" type="password" placeholder="Escribe la contraseña" />
            <p>
              ¿Perdiste tu cuenta? <Link to="/register">Recuperar cuenta</Link>
            </p>
          </section>

          <p>
            <Link to="/register">¿Recuperar contraseña?</Link>
          </p>

          <button type="submit" className="register-button">Iniciar sesión</button>
        </form>
      </main>
    </section>
  );
}

export default Login;