import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";

function PerVet() {
  const [showModal, setShowModal] = useState(false);
  const [profesional, setProfesional] = useState({});

  const handleClose = () => setShowModal(false);
  const handleShow = (datos) => {
    setProfesional(datos);
    setShowModal(true);
  };

  const listaProfesionales = [
    {
      nombre: "Carlos Ramírez",
      telefono: "3101234567",
      correo: "carlos.ramirez@mail.com",
      cc: "1029384756",
      universidad: "Universidad Nacional de Colombia",
    },
    {
      nombre: "Laura Gómez",
      telefono: "3159876543",
      correo: "laura.gomez@mail.com",
      cc: "1092837465",
      universidad: "Pontificia Universidad Javeriana",
    },
    {
      nombre: "Andrés Pérez",
      telefono: "3116549870",
      correo: "andres.perez@mail.com",
      cc: "1011122233",
      universidad: "Universidad de los Andes",
    },
  ];

  return (
    <div>
      <h2 className="list">Lista de Profesionales</h2>
      <div className="InfoAdm" id="sep">
        {listaProfesionales.map((profe, index) => (
          <div key={index}>
            <h3>{profe.nombre}</h3>
            <p>
              <strong>Teléfono:</strong> {profe.telefono}
            </p>
            <p>
              <strong>Correo:</strong> {profe.correo}
            </p>
            <p>
              <strong>C.C:</strong> {profe.cc}
            </p>
            <p>
              <strong>Universidad:</strong> {profe.universidad}
            </p>
            <Button
              className="acoBoto"
              onClick={() => handleShow(profe)}
            >
              <h5>Editar</h5>
            </Button>
            <hr />
          </div>
        ))}
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Profesional</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control defaultValue={profesional.nombre} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Teléfono</Form.Label>
              <Form.Control defaultValue={profesional.telefono} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Correo</Form.Label>
              <Form.Control defaultValue={profesional.correo} />
            </Form.Group>
            <Form.Group>
              <Form.Label>C.C</Form.Label>
              <Form.Control defaultValue={profesional.cc} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Universidad</Form.Label>
              <Form.Control defaultValue={profesional.universidad} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PerVet;
