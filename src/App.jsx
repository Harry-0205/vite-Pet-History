import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Miguel from './home/Miguel/Miguel'
import Jossimar from './Jossimar/IniciarUsu/Iniciar'
import Jossi2 from './Jossi2/LoginPro/LoginP'
import '../src/App.css'


function App() {

  return (
        <Routes>
          <Route path='/' element={<Miguel/>} />
          <Route path='/LoginU' element={<Jossimar/>} />
          <Route path='/LoginP' element={<Jossi2/>} />
        </Routes>
  )
}

export default App
