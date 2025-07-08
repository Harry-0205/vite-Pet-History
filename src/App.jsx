import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Jilian from './Inter-Usu/Jillian-App/Jilian'
import 'bootstrap/dist/css/bootstrap.min.css';
import Miguel from './home/Miguel/Miguel'
import Carlos from './Inter-pro/Carlos apps/Carlos.jsx';
import Carlos2 from './Inter-pro/Carlos apps/Carlos2';
import Registro from "./registro/Pages/Registro";
import Carlos3 from './Inter-pro/Carlos apps/Carlos3';
import Login from './Iniciarsesion/Componentesjossi/Login';
import Admin from './Inter-Admin/Admin/Admin';
import CreaPer from './Inter-Admin/Componentes-Admin/MainAdmin/CreaPer'
import PerVet from './Inter-Admin/Componentes-Admin/MainAdmin/PerVet';
import '../src/App.css'


function App() {

  return (
        <Routes>
          <Route path='/' element={<Miguel/>} />
          <Route path='/Admin' element={<Admin/>} />
          <Route path='/CreaPer' element={<CreaPer/>} />
          <Route path='/iniciar' element={<Login/>} />
          <Route path='/PerVet' element={<PerVet/>} />
          <Route path='/Usu' element={<Jilian/>} />
          <Route path='/Pro' element={<Carlos/>} />
          <Route path='/registro' element={<Registro/>}/>
          <Route path='/pro2' element={<Carlos2/>} />
          <Route path='/pro3' element={<Carlos3/>} />


        </Routes>
  )
}

export default App
