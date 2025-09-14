import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Miguel from './home/Miguel/Miguel'
import '../src/App.css'


function App() {

  return (
        <Routes>
          <Route path='/*' element={<Miguel/>} />
        </Routes>
  )
}

export default App
