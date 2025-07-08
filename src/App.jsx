import { Route, Routes } from 'react-router-dom'
import Jilian from './Inter-Usu/Jillian-App/Jilian'
import 'bootstrap/dist/css/bootstrap.min.css';
import Miguel from './home/Miguel/Miguel'
import Carlos from './Inter-pro/Carlos apps/Carlos.jsx';
import Registro from "./registro/Pages/Registro";
import Login from './Iniciarsesion/Componentesjossi/Login';
import Admin from './Inter-Admin/Admin/Admin';
import '../src/App.css'


function App() {

  return (
        <Routes>
          <Route path='/' element={<Miguel/>} />
          <Route path='/Admin/*' element={<Admin/>} />
          <Route path='/iniciar' element={<Login/>} />
          <Route path='/Usu/*' element={<Jilian/>} />
          <Route path='/Pro/*' element={<Carlos/>} />
          <Route path='/registro' element={<Registro/>}/>
        </Routes>
  )
}

export default App
