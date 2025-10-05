import { useEffect, useState } from 'react';
import './register.css';
import logo from '../assets/imagenes/logo.png';
import hero from '../assets/imagenes/img_relleno/otroperrito.avif';
import { obtenerTiposDoc } from '../api/tipoDocApi';
import { crearUsuario } from '../api/usuariosApi';
import { Form } from 'react-bootstrap';
import { useNavigate  } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const handledCrearUsuario = async () => {
      try {
        await crearUsuario(formData);
        console.log("Usuario creado");
        navigate('/Usuario/Perfil');
        alert(" Usuario creado exitosamente");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert(" Error al crear el usuario");
    }
  };
  const [formData, setFormData] = useState({
    numDoc: "",
    nombre: "",
    apeUno: "",
    apeDos: "",
    telefono: "",
    numContra: "",
    direccion: "",
    fechaNac: "",
    tipdoc: "",
    nomTipoDoc: "",
    correo: "",
    passw: "",
  });

  const [tiposDoc, setTiposDoc] = useState([]);
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    const cargarTiposDoc = async () => {
      try {
        const tipos = await obtenerTiposDoc();
        setTiposDoc(tipos);
      } catch (error) {
        console.error("Error al cargar tipos de documento:", error);
      }
    };
    cargarTiposDoc();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        <form className="register-form" action={handledCrearUsuario}>
          <div className="form-group">
            <label htmlFor="numDoc">Número de documento</label>
            <input
              id="numDoc"
              name="numDoc"
              type='number'
              value={formData.numDoc}
              onChange={handleChange}
              placeholder="Número de documento"
              pattern="^[0-9]{5,20}$"
              title="Solo números"
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nombre">Nombres</label>
              <input
                id="nombre"
                name="nombre"
                type='text'
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Juan Carlos"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="apeUno">Primer Apellido</label>
              <input
                id="apeUno"
                name="apeUno"
                type='text'
                value={formData.apeUno}
                onChange={handleChange}
                placeholder="Pérez"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="apeDos">Segundo Apellido</label>
              <input
                id="apeDos"
                name="apeDos"
                type='text'
                value={formData.apeDos}
                onChange={handleChange}
                placeholder="López"
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                id="telefono"
                name="telefono"
                type='number'
                value={formData.telefono}
                onChange={handleChange}
                placeholder="3009776779"
                required
              />
            </div>
          </div>
            <div className="form-group">
              <label htmlFor="direccion">Dirección</label>
              <input
                id="direccion"
                name="direccion"
                type='text'
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Calle 123 #45-67"
                required
              />
            </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fechaNac">Fecha de nacimiento</label>
              <input
                id="fechaNac"
                name="fechaNac"
                type="date"
                value={formData.fechaNac}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="tipdoc">Tipo de documento</label>
              <Form.Select
                name="tipdoc"
                value={formData.tipdoc}
                onChange={(e) => {
                  const idSeleccionado = parseInt(e.target.value);
                  const tipoSeleccionado = tiposDoc.find(
                    (t) => t.idTipo === idSeleccionado
                  );
                  setFormData((f) => ({
                    ...f,
                    tipdoc: idSeleccionado,
                    nomTipoDoc: tipoSeleccionado?.nomTipoDoc || "",
                  }));
                }}
                required
                className="form-select mb-2"
              >
                <option value="">Seleccione un tipo</option>
                {tiposDoc.map((tipo) => (
                  <option key={tipo.idTipo} value={tipo.idTipo}>
                    {tipo.tipoDoc} - {tipo.nomTipoDoc}
                  </option>
                ))}
              </Form.Select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="correo">Correo electrónico</label>
              <input
                id="correo"
                name="correo"
                type="email"
                value={formData.correo}
                onChange={handleChange}
                placeholder="correo@ejemplo.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="passw">Contraseña</label>
              <input
                id="passw"
                name="passw"
                type='password'
                value={formData.passw}
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
              <button type="submit"  className="btn-primary-gradient">
                Registrarme
              </button>
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
          <p>
            Cuidado inteligente para tu mascota, eficiencia para veterinarios,
            tranquilidad para dueños.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Register;
