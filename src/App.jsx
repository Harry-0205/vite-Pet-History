import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Jilian from './Inter-Usu/Jillian-App/Jilian'
import 'bootstrap/dist/css/bootstrap.min.css';
import Miguel from './home/Miguel/Miguel'
import Carlos from './Inter-pro/Carlos apps/carlos';
import Carlos2 from './Inter-pro/Carlos apps/Carlos2';
import Registro from "./registro/Pages/Registro";
import Carlos3 from './Inter-pro/Carlos apps/Carlos3';
import Login from './Iniciarsesion/Componentesjossi/Login';
import Admin from './Inter-Admin/Admin/Admin';
import MainAdmin from './Inter-Admin/Componentes-Admin/MainAdmin/MainAdmin';
import CreaPer from './Inter-Admin/Componentes-Admin/MainAdmin/CreaPer'

function App() {

  return (
  
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Miguel/>} />
          <Route path='/Admin' element={<Admin/>} />
          <Route path='/CreaPer' element={<CreaPer/>} />
        </Routes>
        </BrowserRouter>

  )
}

export default App
