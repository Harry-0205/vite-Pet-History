import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Miguel from './home/Miguel/Miguel'
import Register from './Registro/Register'
import AdminPanel from './admin/AdminPanel'
import '../src/App.css'
import Jilian from './Inter-Usu/Jilian/Jilian';



function App() {

  return (
        <>

          <Routes>
            <Route path='/*' element={<Miguel/>} />
            <Route path='/usuario*' element={<Jilian/>} />
            <Route path='/registro' element={<Register />} />
            <Route path='/admin' element={<AdminPanel />} />
          </Routes>

        </>
  )
}

export default App
