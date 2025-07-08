import "react-calendar"
 
import { useState } from 'react';    
import Calendar from 'react-calendar';
import '../Estilos carlos/cebolla.css'
import "react-calendar/dist/Calendar.css"
Calendar.css

function Calendario() {
  const [Fecha,Setfecha ] = useState(new Date());

  return (
    <div>
      <Calendar id='tama' onChange={Setfecha} value={Fecha} />
    </div>
  );
}
export default Calendario