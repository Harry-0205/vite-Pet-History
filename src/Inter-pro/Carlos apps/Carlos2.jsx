import '../Estilos carlos/cebolla.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menuu from '../Componentescarlos/Menuu';
import Peboton from '../Componentescarlos/Peboton';
import Ceboton from "../Componentescarlos/Ceboton"

import Footerr from "../Componentescarlos/Footerr"
import Cuerpo2 from '../Componentescarlos/Cuerpo2';


function Carlos2() {

  return (
    <>
      <div className='Edimenu'>

        <Menuu></Menuu>
        <Peboton></Peboton>
        <Ceboton></Ceboton>
      </div>
      <div>
        <Cuerpo2></Cuerpo2>
      
      <Footerr></Footerr>
      
      </div>
        
    </>
  )
}

export default Carlos2