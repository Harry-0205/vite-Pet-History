import '../Estilos carlos/cebolla.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menuu from '../Componentescarlos/Menuu';
import Cuerpoo from "../Componentescarlos/Cuerpoo"
import Footerr from "../Componentescarlos/Footerr"


function Carlos() {

  return (
    <>
      <div className='Edimenu'>

        <Menuu></Menuu>
        
      </div>
      <div>
      <Cuerpoo></Cuerpoo>
      <Footerr></Footerr>
      
      </div>
        
    </>
  )
}

export default Carlos
