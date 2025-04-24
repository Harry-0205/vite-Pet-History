import { Link } from 'react-router-dom';
import pet from "../../assets/pet.png"


function NavBarr() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#203c5b' }}>
      <div className="container">
        <Link className="navbar-brand" to="/home">
          
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home">Mis Mascotas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home">Perfil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Cerrar Sesión</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBarr;
