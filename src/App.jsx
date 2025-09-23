import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Miguel from './home/Miguel/Miguel'
import Jossimar from './Jossimar/IniciarUsu/Iniciar'
import '../src/App.css'


function App() {

  return (
        <Routes>
          <Route path='/' element={<Miguel/>} />
          <Route path='/Login' element={<Jossimar/>} />
        </Routes>
  )
}

export default App
