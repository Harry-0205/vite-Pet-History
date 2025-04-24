import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Jilian from './Inter-Usu/Jillian-App/Jilian'
import Jilian2 from './Inter-Usu/Jillian-App/Jilian-2'
import 'bootstrap/dist/css/bootstrap.min.css';
import Miguel from './home/Miguel/Miguel';
import Carlos from './Inter-pro/Carlos apps/carlos';
import Carlos2 from './Inter-pro/Carlos apps/Carlos2';
import Registro from "./registro/Pages/Registro";

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Miguel></Miguel>}></Route>
      <Route path='/registro' element={<Registro></Registro>}></Route>
      <Route path='/inter-usu' element={<Carlos></Carlos>}></Route>
      <Route path='/Inter-Usu2' element={<Carlos2></Carlos2>}></Route>
      <Route path='/Inter-Usu3' element={<Carlos3></Carlos3>}></Route>
      <Route path='/Inter-Pro' element={<Jilian></Jilian>}></Route>
    </Routes>
         
    </>
  )
}

export default App
