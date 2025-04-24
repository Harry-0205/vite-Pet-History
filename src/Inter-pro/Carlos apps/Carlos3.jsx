import '../Estilos carlos/cebolla.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menuu from '../Componentescarlos/Menuu'; 

import Footerr from "../Componentescarlos/Footerr"
import Cuerpo3 from '../Componentescarlos/Cuerpo2';
import Pacientesr from '../Componentescarlos/Pacientesr';


function Carlos3() {

  return (
    <>
      <div className='Edimenu'>

        <Menuu></Menuu>
      </div>
      <div>
        <Pacientesr></Pacientesr>
      
      <Footerr></Footerr>
      
      </div>
        
    </>
  )
}

export default Carlos3