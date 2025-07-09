import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function Cuerpo2() {
  const [mostrarConsulta, setMostrarConsulta] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [historiaSeleccionada, setHistoriaSeleccionada] = useState(null);
  const [cedula, setCedula] = useState("");
  const [mostrarResumen, setMostrarResumen] = useState(false);

  const historias = [
    {
      id: 1,
      paciente: "Max",
      fecha: "2025-07-01",
      motivo: "Vacunación anual",
      tratamiento: "Vacuna antirrábica aplicada",
    },
    {
      id: 2,
      paciente: "Luna",
      fecha: "2025-06-28",
      motivo: "Chequeo general",
      tratamiento: "Desparasitación y análisis de sangre",
    },
    {
      id: 3,
      paciente: "Rocky",
      fecha: "2025-06-20",
      motivo: "Herida en pata",
      tratamiento: "Curación, antibióticos recetados",
    },
    {
      id: 4,
      paciente: "Milo",
      fecha: "2025-06-15",
      motivo: "Fiebre y vómito",
      tratamiento: "Tratamiento para infección estomacal",
    },
  ];

  const handleEditar = (historia) => {
    setHistoriaSeleccionada(historia);
    setMostrarModal(true);
  };

  const handleCerrarModal = () => {
    setMostrarModal(false);
    setHistoriaSeleccionada(null);
  };

  const handleBuscar = () => {
    if (cedula === "1234") {
      setMostrarResumen(true);
    } else {
      setMostrarResumen(false);
      alert("No se encontró información para la cédula ingresada.");
    }
  };

  return (
    <div className="record8 p-4">
      <h4 className="co1" id="co11">
        --- "Historias Clínicas recientes" ---
      </h4>

      <div className="mb-3">
        <Button onClick={() => setMostrarConsulta(!mostrarConsulta)}>
          Consultar
        </Button>
      </div>

      {mostrarConsulta && (
        <Form className="border p-3 mb-4">
          <Form.Group>
            <Form.Label>Ingrese la cédula del dueño:</Form.Label>
            <Form.Control
              type="text"
              placeholder="C.C del dueño"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" className="mt-2" onClick={handleBuscar}>
            Buscar
          </Button>
        </Form>
      )}

      {mostrarResumen && (
        <div className="record3 border p-3 mb-4">
          <h4>--- "RESUMEN HISTORIA CLÍNICA" ---</h4>
          <p style={{ fontSize: "0.9rem", whiteSpace: "pre-line" }}>
            {`1- Reseña
Aquí se consignarán los datos personales del paciente y los propietarios responsables del mismo.
Respecto a los datos del paciente, se incluye especie, raza, sexo, edad, capa y señales, tamaño, peso, utilización
y nombre.
Además aquí se incluyen datos administrativos como el número de historia clínica, y los datos de los
propietarios, como nombre y apellido, dirección, teléfono, número de documento.

2- Anamnesis
Son los datos que el profesional obtiene del personal cercano o del responsable del paciente y del medio en
el que se desarrolla. Los datos imprescindibles se encuentran listados a continuación.

2.1- Anamnesis Pretérita (Antecedentes Individuales)
Representan antecedentes de diferentes patologías, modo de vida y características propias.

Anamnesis Familiar: Investigar si familiares cercanos conocidos (padres, abuelos, hermanos,
otros) presentan antecedentes de alguna patología importante (cáncer, diabetes, cardiopatías,
enfermedades del aparato locomotor o del sistema nervioso, y otras enfermedades hereditarias).

Anamnesis Sanitaria: Plan de vacunación empleado, fecha de últimas inmunizaciones y tipo de
vacunas aplicadas. Desparasitaciones y Análisis Coproparasitológicos.

Anamnesis Ambiental: Lugar de Nacimiento, lugares donde ha vivido antiguamente y en la actualidad
(esto tiene importancia por las enfermedades endémicas características en cada zona). Tipo de
vivienda (animal callejero, de campo, departamento o casa; lugar donde habita generalmente el
perro, si sube o baja escaleras en la vivienda, si hay patio, etc). Convivencia con otros animales.
Viajes realizados.

Anamnesis Fisiológica: Datos acerca del parto, crianza, enfermedades que tuvo en la juventud.
Actividad física que realiza habitualmente (paseos, animal deportivo, entrenamiento, sedentarismo),
estado físico y peso actual respecto al habitual, hábitos de alimentación (dieta y frecuencia de
alimentación), toma de agua (frecuencia y hábitos al respecto), defecación, diuresis, sueño.
Comportamiento reproductivo (fecha de último estro, frecuencia e intensidad de celos). Si es un
animal utilizado para reproducción, registrar la fecha y número de servicios, descendientes paridos
y características de partos y destetes.

Anamnesis Patológica Remota: Manifestaciones morbosas que se hayan presentado en el pasado.
Forma de inicio, signos, tratamientos instaurados y evolución

Antecedentes Quirúrgicos: Cirugías recibidas (castraciones, cirugías estéticas, etc).`}
          </p>
        </div>
      )}

      {historias.map((h) => (
        <div className="co2 border rounded p-3 mb-3" key={h.id}>
          <h6>
            <strong>PACIENTE:</strong> {h.paciente}
          </h6>
          <h6>
            <strong>FECHA:</strong> {h.fecha}
          </h6>
          <h6>
            <strong>MOTIVO:</strong> {h.motivo}
          </h6>
          <h6>
            <strong>TRATAMIENTO:</strong> {h.tratamiento}
          </h6>
          <Button variant="warning" onClick={() => handleEditar(h)}>
            Editar
          </Button>
        </div>
      ))}
      <Modal show={mostrarModal} onHide={handleCerrarModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Historia Clínica</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {historiaSeleccionada && (
            <Form>
              <Form.Group>
                <Form.Label>Paciente</Form.Label>
                <Form.Control defaultValue={historiaSeleccionada.paciente} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Fecha</Form.Label>
                <Form.Control type="date" defaultValue={historiaSeleccionada.fecha} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Motivo</Form.Label>
                <Form.Control defaultValue={historiaSeleccionada.motivo} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Tratamiento</Form.Label>
                <Form.Control as="textarea" rows={3} defaultValue={historiaSeleccionada.tratamiento} />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCerrarModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleCerrarModal}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cuerpo2;
