import React, { useState } from 'react';
import '../Jillian-App/Estilos.css';
import DOG from '../Imagenes/DOG.jpg';
import QR from '../Imagenes/jiji.avif';
import { Modal, Button } from 'react-bootstrap';

const Jilian2 = () => {
  const [mostrarHistorial, setMostrarHistorial] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mascotas, setMascotas] = useState([
    { nombre: "Max", raza: "Labrador", edad: "4 años", vacunas: "Completas", imagen: DOG }
  ]);

  const [nuevaMascota, setNuevaMascota] = useState({
    nombre: '',
    raza: '',
    edad: '',
    vacunas: ''
  });

  const abrirHistorial = () => setMostrarHistorial(true);
  const cerrarHistorial = () => setMostrarHistorial(false);
  const toggleFormulario = () => setMostrarFormulario(!mostrarFormulario);

  const manejarCambio = (e) => {
    setNuevaMascota({ ...nuevaMascota, [e.target.name]: e.target.value });
  };

  const agregarMascota = () => {
    if (nuevaMascota.nombre && nuevaMascota.raza && nuevaMascota.edad && nuevaMascota.vacunas) {
      setMascotas([...mascotas, { ...nuevaMascota, imagen: DOG }]);
      setNuevaMascota({ nombre: '', raza: '', edad: '', vacunas: '' });
      setMostrarFormulario(false);
    }
  };

  return (
    <div className="pagina">
      {mascotas.map((mascota, index) => (
        <div className="perfil-contenedor" key={index}>
          <img src={mascota.imagen} alt="Mascota" className="imagen-perfil" />
          <div className="info-perfil">
            <p><strong>Nombre:</strong> {mascota.nombre}</p>
            <p><strong>Raza:</strong> {mascota.raza}</p>
            <p><strong>Edad:</strong> {mascota.edad}</p>
            <p><strong>Vacunas:</strong> {mascota.vacunas}</p>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <Button variant="info" onClick={abrirHistorial}>Ver Detalles</Button>
            </div>
          </div>
        </div>
      ))}

      {mostrarFormulario && (
        <div className="formulario-cita">
          <input type="text" name="nombre" placeholder="Nombre" value={nuevaMascota.nombre} onChange={manejarCambio} />
          <input type="text" name="raza" placeholder="Raza" value={nuevaMascota.raza} onChange={manejarCambio} />
          <input type="text" name="edad" placeholder="Edad" value={nuevaMascota.edad} onChange={manejarCambio} />
          <input type="text" name="vacunas" placeholder="Vacunas" value={nuevaMascota.vacunas} onChange={manejarCambio} />
          <Button onClick={agregarMascota}>Guardar Mascota</Button>
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "60px" }}>
        <Button variant="success" onClick={toggleFormulario}>
          {mostrarFormulario ? "Cerrar Formulario" : "Agregar Mascota"}
        </Button>
      </div>

      <Modal show={mostrarHistorial} onHide={cerrarHistorial} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Historial Clínico</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Paciente:</strong> Max</p>
          <p><strong>Fecha:</strong> 23/04/2025</p>

          <div className="reporte">
            <h4>Reporte</h4>
            <p>Revisión general realizada. Se detectó leve inflamación en oído derecho. Se prescribió tratamiento.</p>
          </div>

          <div className="procedimientos">
            <h4>Procedimientos Realizados</h4>
            <ul>
              <li>Vacunación antirrábica</li>
              <li>Desparasitación</li>
            </ul>
          </div>

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <img src={QR} alt="Código QR" style={{ width: '200px' }} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarHistorial}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Jilian2;
