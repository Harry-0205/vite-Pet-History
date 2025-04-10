import Calendario from "../Imagenes/Calendario.png"
import perros from "../Imagenes/perros.png"


function Cuerpoo() {
    return (
      <>
        
        <div>
        <main className="main">
         
        <div className="citas"><img src={Calendario} alt="sedef" /></div>
        <div className="recordatorio"><h4 className="record2">Recordatorios  </h4>

      <div className="record1">

        <h6>- Cita General a las 2:30PM, bruno "snaucer 11/04/2025"</h6>
        <h6>- Cita General a las 11:30am, bruno "snaucer 12/04/2025"</h6>
        <h6>- Cita procedimiento a las 8:30pm, bruno "snaucer 13/04/2025"</h6>
        <h6>- Cita General a las 4:30am, bruno "snaucer 14/04/2025"</h6>
        <h6>- Cita procedimiento a las 12:30pm, bruno "snaucer 15/04/2025"</h6>
        <h6>- Cita General a las 5:30pm, bruno "snaucer 16/04/2025"</h6>
        <h6>- Cita procedimiento a las 2:30, bruno "snaucer 17/04/2025"</h6>
        </div>
        <img className="imf" src={perros} alt="dddd" />
        </div>
        
        
      </main>
            
        </div>
        
      </>
    );
  }
  
  export default Cuerpoo;