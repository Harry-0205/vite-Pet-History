import NavBarr from '../Componentes/NavBarr';
import Footer from '../Componentes/Footer';
import "../Pages/Brandon.css"
function Home() {
  return (
    <div className="container-fluid p-0">
      <NavBarr />
      
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-4">Bienvenido a Pet History</h1>
            <p className="text-center">
              Sistema global, privado, libre y anónimo de registro de mascotas.
            </p>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Registro de Mascotas</h5>
                <p className="card-text">Registre a sus mascotas en nuestra plataforma global.</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Historial Médico</h5>
                <p className="card-text">Mantenga un registro completo del historial médico de sus mascotas.</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Certificados Veterinarios</h5>
                <p className="card-text">Acceda a certificados y documentos validados por profesionales.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;