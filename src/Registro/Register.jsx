import { useState } from 'react';
import './register.css';
import logo from '../assets/imagenes/logo.png';
import hero from '../assets/imagenes/img_relleno/otroperrito.avif';

function Register() {
  const [form, setForm] = useState({
    nombres: '',
    apellido1: '',
    apellido2: '',
    email: '',
    telefono: '',
    direccion: '',
    fechaNacimiento: '',
    tipoDocumento: '',
    documento: '',
    password: '',
    showTipoDoc: false,
  });
  const [remember, setRemember] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="register-split">
      <aside className="register-left">
        <div className="auth-brand">
          <img src={logo} alt="PetHistory" className="brand-logo" />
        </div>
        <header className="auth-header">
          <h1 className="register-title">Crear cuenta</h1>
        </header>
        <form className="register-form" >
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
              <label htmlFor="apellido1">Primer Apellido</label>
              <input
                id="apellido1"
                name="apellido1"
                type="text"
                value={form.apellido1}
                onChange={handleChange}
                placeholder="Pérez"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="apellido2">Segundo Apellido</label>
              <input
                id="apellido2"
                name="apellido2"
                type="text"
                value={form.apellido2}
                onChange={handleChange}
                placeholder="López"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="direccion">Dirección</label>
              <input
                id="direccion"
                name="direccion"
                type="text"
                value={form.direccion}
                onChange={handleChange}
                placeholder="Calle 123 #45-67"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
              <input
                id="fechaNacimiento"
                name="fechaNacimiento"
                type="date"
                value={form.fechaNacimiento}
                onChange={handleChange}
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
            <div className="form-group" style={{ position: 'relative' }}>
              <label htmlFor="tipoDocumento">Tipo de documento</label>
              <button
                type="button"
                className="dropdown-btn"
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  border: '1.5px solid #a1e0f3',
                  borderRadius: '12px',
                  background: '#fff',
                  textAlign: 'left',
                  fontSize: '14px',
                  cursor: 'pointer',
                  marginBottom: '0',
                }}
                onClick={() => setForm(f => ({ ...f, showTipoDoc: !f.showTipoDoc }))}
              >
                {form.tipoDocumento === 'cedula_extranjeria' ? 'Cédula de extranjería' : form.tipoDocumento === 'cedula_ciudadania' ? 'Cédula de ciudadanía' : 'Selecciona tipo'}
                <span style={{ float: 'right' }}>▼</span>
              </button>
              {form.showTipoDoc && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: '100%',
                  background: '#fff',
                  border: '1.5px solid #a1e0f3',
                  borderRadius: '0 0 12px 12px',
                  zIndex: 10,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}>
                  <div style={{ padding: '10px', cursor: 'pointer' }}
                    onClick={() => setForm(f => ({ ...f, tipoDocumento: 'cedula_extranjeria', showTipoDoc: false }))}>
                    Cédula de extranjería
                  </div>
                  <div style={{ padding: '10px', cursor: 'pointer' }}
                    onClick={() => setForm(f => ({ ...f, tipoDocumento: 'cedula_ciudadania', showTipoDoc: false }))}>
                    Cédula de ciudadanía
                  </div>
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="documento">Número de documento</label>
              <input
                id="documento"
                name="documento"
                type="text"
                value={form.documento}
                onChange={handleChange}
                placeholder="Número de documento"
                pattern="^[0-9]{5,20}$"
                title="Solo números"
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
          <p>Cuidado inteligente para tu mascota, eficiencia para veterinarios, tranquilidad para dueños.</p>
        </div>
      </section>
    </div>
  );

}

export default Register;
