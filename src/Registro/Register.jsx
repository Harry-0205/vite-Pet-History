import { useState } from 'react';
import './register.css';
import logo from '../assets/imagenes/logo.png';
import hero from '../assets/imagenes/img_relleno/servicio.jpg';

function Register() {
  const [form, setForm] = useState({
    nombres: '',
    apellidos: '',
    email: '',
    telefono: '',
    cedula: '',
    password: '',
  });
  const [remember, setRemember] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registro enviado: ' + JSON.stringify({ ...form, remember }, null, 2));
    setForm({ nombres: '', apellidos: '', email: '', telefono: '', cedula: '', password: '' });
    setRemember(false);
  };

  return (
    <div className="register-split">
      <aside className="register-left">
        <div className="auth-brand">
          <img src={logo} alt="PetHistory" className="brand-logo" />
        </div>

        <header className="auth-header">
          <h1 className="register-title">Crear cuenta</h1>
          <p className="register-sub"></p>
        </header>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nombres">Nombres</label>
              <input
                id="nombres"
                name="nombres"
                type="text"
                value={form.nombres}
                onChange={handleChange}
                placeholder="Juan Carlos"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="apellidos">Apellidos</label>
              <input
                id="apellidos"
                name="apellidos"
                type="text"
                value={form.apellidos}
                onChange={handleChange}
                placeholder="Pérez López"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="correo@ejemplo.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                value={form.telefono}
                onChange={handleChange}
                placeholder="3009776779"
                pattern="^[0-9+\-\s()]{7,}$"
                title="Ingresa un teléfono válido"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cedula">Cédula</label>
              <input
                id="cedula"
                name="cedula"
                type="text"
                value={form.cedula}
                onChange={handleChange}
                placeholder="1052570617"
                pattern="^[0-9]{5,20}$"
                title="Solo números"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Mínimo 6 caracteres"
                minLength={6}
                required
              />
            </div>
          </div>

          <div className="form-extra">
            <label className="remember">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember((v) => !v)}
              />
              Recordarme
            </label>
                      </div>

          <div className="actions">
            <button type="submit" className="btn-primary-gradient">Registrarme</button>
          </div>
        </form>

        <footer className="auth-footer">
          <p className="muted">
            Información general en nuestro sitio web
            <a href="#" className="brand-link"> PetHistory</a>
          </p>
        </footer>
      </aside>

      <section className="register-right">
        <img src={hero} alt="Veterinaria" className="hero-img" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2>El mejor software veterinario</h2>
          <p>Empieza a administrar tu práctica veterinaria y organiza tu información para optimizar y automatizar procesos.</p>
        </div>
      </section>
    </div>
  );
}

export default Register;
