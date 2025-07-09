import '../Estilos carlos/cebolla.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cuerpoo from "../Componentescarlos/Cuerpoo"
import Footerr from "../Componentescarlos/Footerr"
import Headercarlos from '../Componentescarlos/hedercarlos';
import Cuerpo2 from '../Componentescarlos/Cuerpo2';
import Pacientesr from '../Componentescarlos/Pacientesr';
import { Route, Routes } from 'react-router-dom';
import Creaperf from '../Componentescarlos/Creaperf';



function Carlos() {

  return (
    <>
      <Headercarlos></Headercarlos>
        <Routes>
          <Route path="/" element={<Cuerpoo/>}/>
          <Route path="/pro2" element={<Cuerpo2/>}/>
          <Route path="/pro3" element={<Pacientesr/>}/>
          <Route path="/properfil" element={<Creaperf/>}/>
        </Routes>
      <Footerr></Footerr>
    </>
  )
}

export default Carlos
