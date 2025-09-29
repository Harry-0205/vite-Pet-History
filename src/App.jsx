import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Miguel from './home/Miguel/Miguel'
import Register from './Registro/Register'
import AdminPanel from './admin/AdminPanel'
import '../src/App.css'


function App() {

  return (
        <Routes>
          <Route path='/registro' element={<Register />} />
          <Route path='/admin' element={<AdminPanel />} />
          <Route path='/*' element={<Miguel/>} />
        </Routes>
  )
}

export default App
