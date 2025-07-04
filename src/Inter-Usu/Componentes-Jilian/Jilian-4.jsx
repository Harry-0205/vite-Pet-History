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

  return (
    <div className="pagina">
      <div className="contenedor-principal cita">
        <div className="info-cita">
          <h2>Próxima Cita</h2>
          <p><strong>Fecha:</strong> 30/04/2025</p>
          <p><strong>Hora:</strong> 10:30 a.m.</p>
          <p><strong>Veterinaria:</strong> AnimalCare</p>
        </div>

        {/* Calendario en español y más grande */}
        <div className="calendario-cita">
          <Calendar
            value={date}
            onChange={(e) => setDate(e.value)}
            inline
            showWeek
            locale="es"
          />
        </div>
      </div>

     
    </div>
  );
};

export default Jilian4;
