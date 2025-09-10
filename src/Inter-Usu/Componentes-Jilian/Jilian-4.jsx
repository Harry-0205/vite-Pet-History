import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import '../Jillian-App/Estilos.css';


addLocale('es', {
  firstDayOfWeek: 1,
  dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
  dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
  dayNamesMin: ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SA'],
  monthNames: [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ],
  monthNamesShort: [
    'ene', 'feb', 'mar', 'abr', 'may', 'jun',
    'jul', 'ago', 'sep', 'oct', 'nov', 'dic'
  ],
  today: 'Hoy',
  clear: 'Limpiar',
  weekHeader: 'Sm'
});

const Jilian4 = () => {
  const [date, setDate] = useState(null);
  const [hora, setHora] = useState('');
  const [veterinaria, setVeterinaria] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [cita, setCita] = useState(null);
  const guardarCita = () => {
  if (date && hora && veterinaria) {
    setCita({
      fecha: date,
      hora,
      veterinaria
    });
    setMostrarFormulario(false);
  } else {
    alert("Por favor completa todos los campos.");
  }
};

const cancelarCita = () => {
  setCita(null);
};
  return (
    <div className="pagina">
  <div className="contenedor-principal-cita recuadro-cita">
    <div className="info-cita">
      <h2>Próxima Cita</h2>
      {cita ? (
        <>
          <p><strong>Fecha:</strong> {cita.fecha.toLocaleDateString()}</p>
          <p><strong>Hora:</strong> {cita.hora}</p>
          <p><strong>Veterinaria:</strong> {cita.veterinaria}</p>
          <button onClick={cancelarCita}>Cancelar Cita</button>
        </>
      ) : (
        <p>No hay una cita programada</p>
      )}
    </div>
<div style={{textAlign:"center"}}>
    <button onClick={() => setMostrarFormulario(!mostrarFormulario)}>
      {mostrarFormulario ? "Cerrar Formulario" : "Agendar Cita"}
    </button>
</div>
    {mostrarFormulario && (
      <div className="formulario-cita">
        <label>Selecciona Fecha:</label>
        <Calendar
          value={date}
          onChange={(e) => setDate(e.value)}
          inline
          showWeek
          locale="es"
        />
        <label>Hora:</label>
        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />
        <label>Veterinaria:</label>
        <input
          type="text"
          value={veterinaria}
          onChange={(e) => setVeterinaria(e.target.value)}
        />
        <button onClick={guardarCita}>Guardar Cita</button>
      </div>
    )}
  </div>
  

        
          
        
  </div>


    

  );
};

export default Jilian4;
