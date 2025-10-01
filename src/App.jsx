import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Miguel from './home/Miguel/Miguel'
import Jossimar from './Jossimar/IniciarUsu/Iniciar'
import Jossi2 from './Jossi2/LoginPro/LoginP'
import Register from './Registro/Register'
import AdminPanel from './admin/AdminPanel'
import '../src/App.css'
import Jilian from './Inter-Usu/Jilian/Jilian';
import Vista1 from './InterProCaliche/Vistas/Vista1';



function App() {

  return (
        <>
          <Routes>
            <Route path='/*' element={<Miguel/>} />
            <Route path='/usuario*' element={<Jilian/>} />
            <Route path='/registro' element={<Register />} />
            <Route path='/admin' element={<AdminPanel />} />
            <Route path='/LoginU' element={<Jossimar/>} />
            <Route path='/LoginP' element={<Jossi2/>} />
            <Route path='/Profe' element={<Vista1/>} />
          </Routes>
        </>
  )
}

export default App
