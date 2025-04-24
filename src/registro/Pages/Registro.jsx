import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Pages/Brandon.css"
import Footer from '../Componentes/Footer';
import pet from "../../assets/pet.png"
import { Button } from 'react-bootstrap';
function SignUp() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('usuario');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/home');
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-md-12">
          <div className="row g-0">
            <div className="col-md-4 logo-container">
              <div className="text-center">
              <img 
                  src={pet} 
                  alt="Pet History Logo" 
                  className="pet-history-logo" 
                />
                <p className="description-text text-white mt-3">
                  Sistema global, privado, libre y anónimo de registro de mascotas.
                  Creando repositorios segmentados con datos certificados por médicos veterinarios partícipes de sistema.
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="form-container m-4">
                <div className="user-type-container">
                  <div className="user-type-option">
                    <input 
                      type="radio" 
                      id="usuario" 
                      name="userType" 
                      value="usuario" 
                      checked={userType === 'usuario'} 
                      onChange={handleUserTypeChange}
                    />
                    <label htmlFor="usuario" className="ms-2">Usuario</label>
                  </div>
                  <div className="user-type-option">
                    <input 
                      type="radio" 
                      id="profesional" 
                      name="userType" 
                      value="profesional" 
                      checked={userType === 'profesional'} 
                      onChange={handleUserTypeChange}
                    />
                    <label htmlFor="profesional" className="ms-2">Profesional</label>
                  </div>
                </div>
                
                <h2 className="form-title">Crea tu Cuenta</h2>
                <p className="form-subtitle">Registro rápido</p>
                
                <button className="btn google-btn">
                  <i className="bi bi-google me-2"></i>
                  Registrate con Google
                </button>
                
                <p className="option-text">O utilice su dirección de correo electrónico</p>
                
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Tu nombre" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Tu apellido" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Su dirección de correo electrónico" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Elija una contraseña" 
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <p className="password-hint">Utilice al menos una letra, un número y siete caracteres</p>
                  
                  {userType === 'profesional' && (
                    <a href="#" className="attach-link">Anexar certificado de veterinario profesional</a>
                  )}
                  
                  <Button href='/Inter-Usu' type="submit" className="btn register-btn">
                    Registrarme en Pet History
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      <Footer />
    </div>
  );
}

export default SignUp;