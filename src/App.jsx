import { Route, Routes } from 'react-router-dom'
import './App.css'
import Jilian from './Inter-Usu/Jillian-App/Jilian'
import 'bootstrap/dist/css/bootstrap.min.css';
import Miguel from './home/Miguel/Miguel';
import Login from './Iniciarsesion/Componentesjossi/Login';
import Carlos from './Inter-pro/Carlos apps/carlos';
import Carlos2 from './Inter-pro/Carlos apps/Carlos2';
import Registro from "./registro/Pages/Registro";
<<<<<<< HEAD
=======
import Carlos3 from './Inter-pro/Carlos apps/Carlos3';
>>>>>>> f5e2c52d18b13ccbace5c9204ce443ed0152553c


function App() {

  return (
    <>
<<<<<<< HEAD
     
      <Miguel></Miguel>
=======
    <Routes>
      <Route path='/' element={<Miguel></Miguel>}></Route>
      <Route path='/registro' element={<Registro></Registro>}></Route>
      <Route path='/inter-Usu' element={<Carlos></Carlos>}></Route>
      <Route path='/Inter-Usu2' element={<Carlos2></Carlos2>}></Route>
      <Route path='/Inter-Usu3' element={<Carlos3></Carlos3>}></Route>
      <Route path='/Inter-Pro' element={<Login></Login>}></Route>
    </Routes>
>>>>>>> f5e2c52d18b13ccbace5c9204ce443ed0152553c
         
    </>
  )
}

export default App
