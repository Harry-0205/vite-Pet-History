import React, { useState } from 'react';
import '../Jillian-App/Estilos.css';
import DOG from '../Imagenes/DOG.jpg';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Jilian2 = () => {
  const [mascotas, setMascotas] = useState([
    {
      nombre: "Max",
      raza: "Labrador",
      edad: "4 años",
      vacunas: "Completas",
      imagen: DOG,
      historia: {
        fecha: "23/04/2025",
        reporte: "Revisión general realizada. Se detectó leve inflamación en oído derecho. Se prescribió tratamiento.",
        procedimientos: ["Vacunación antirrábica", "Desparasitación"]
      }
    }
  ]);

  const [showHistorial, setShowHistorial] = useState(false);
  const [historiaActual, setHistoriaActual] = useState(null);
  const [showFormulario, setShowFormulario] = useState(false);
  const [nuevaMascota, setNuevaMascota] = useState({
    nombre: "",
    raza: "",
    edad: "",
    vacunas: "",
    imagen: DOG,
    historia: {
      fecha: "",
      reporte: "",
      procedimientos: []
    }
  });

  const handleAgregarMascota = () => {
    setMascotas([...mascotas, nuevaMascota]);
    setShowFormulario(false);
    setNuevaMascota({
      nombre: "",
      raza: "",
      edad: "",
      vacunas: "",
      imagen: DOG,
      historia: {
        fecha: "",
        reporte: "",
        procedimientos: []
      }
    });
  };

  const mostrarHistorial = (historia) => {
    setHistoriaActual(historia);
    setShowHistorial(true);
  };

  return (
    <div className="pagina">
      {mascotas.map((mascota, index) => (
        <div key={index} className="perfil-contenedor">
          <img src={mascota.imagen} alt="Mascota" className="imagen-perfil" />
          <div className="info-perfil">
            <p><strong>Nombre:</strong> {mascota.nombre}</p>
            <p><strong>Raza:</strong> {mascota.raza}</p>
            <p><strong>Edad:</strong> {mascota.edad}</p>
            <p><strong>Vacunas:</strong> {mascota.vacunas}</p>
            <Button variant="info" onClick={() => mostrarHistorial(mascota.historia)}>Ver Detalles</Button>
          </div>
        </div>
      ))}

      <div style={{ textAlign: 'center', margin: '20px' }}>
        <Button variant="success" onClick={() => setShowFormulario(true)}>Agregar Mascota</Button>
      </div>

      <Modal show={showHistorial} onHide={() => setShowHistorial(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Historial Clínico</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {historiaActual && (
            <>
              <p><strong>Fecha:</strong> {historiaActual.fecha}</p>
              <div className="reporte">
                <h4>Reporte</h4>
                <p>{historiaActual.reporte}</p>
              </div>
              <div className="procedimientos">
                <h4>Procedimientos Realizados</h4>
                <ul>
                  {historiaActual.procedimientos.map((proc, idx) => (
                    <li key={idx}>{proc}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowHistorial(false)}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showFormulario} onHide={() => setShowFormulario(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Nueva Mascota</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Nombre"
            value={nuevaMascota.nombre}
            onChange={(e) => setNuevaMascota({ ...nuevaMascota, nombre: e.target.value })}
          />
          <input
            type="text"
            placeholder="Raza"
            value={nuevaMascota.raza}
            onChange={(e) => setNuevaMascota({ ...nuevaMascota, raza: e.target.value })}
          />
          <input
            type="text"
            placeholder="Edad"
            value={nuevaMascota.edad}
            onChange={(e) => setNuevaMascota({ ...nuevaMascota, edad: e.target.value })}
          />
          <input
            type="text"
            placeholder="Vacunas"
            value={nuevaMascota.vacunas}
            onChange={(e) => setNuevaMascota({ ...nuevaMascota, vacunas: e.target.value })}
          />
          <input
            type="text"
            placeholder="Fecha Historial"
            value={nuevaMascota.historia.fecha}
            onChange={(e) =>
              setNuevaMascota({
                ...nuevaMascota,
                historia: { ...nuevaMascota.historia, fecha: e.target.value }
              })
            }
          />
          <input
            type="text"
            placeholder="Reporte"
            value={nuevaMascota.historia.reporte}
            onChange={(e) =>
              setNuevaMascota({
                ...nuevaMascota,
                historia: { ...nuevaMascota.historia, reporte: e.target.value }
              })
            }
          />
          <input
            type="text"
            placeholder="Procedimientos (separados por coma)"
            onChange={(e) =>
              setNuevaMascota({
                ...nuevaMascota,
                historia: {
                  ...nuevaMascota.historia,
                  procedimientos: e.target.value.split(',')
                }
              })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleAgregarMascota}>Guardar Mascota</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Jilian2;
