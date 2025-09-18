import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Miguel from './home/Miguel/Miguel'
import '../src/App.css'
import Jilian from './Inter-Usu/Jilian/Jilian';


function App() {

  return (
        <>

          <Routes>
            <Route path='/*' element={<Miguel/>} />
            <Route path='/Usuario' element={<Jilian/>} />
          </Routes>

        </>
  )
}

export default App
