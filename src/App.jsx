import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Jilian from './Inter-Usu/Jillian-App/Jilian'
import Jilian2 from './Inter-Usu/Jillian-App/Jilian-2'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderMi from './home/Componentes-Miguel/HeaderMi/MenuMi';
import Miguel from './home/Miguel/Miguel';
import Carlos from './Inter-pro/Carlos apps/carlos';
import Carlos2 from './Inter-pro/Carlos apps/Carlos2';
import Inciar from './Login/jossimar-app/Iniciar';
import Login from './Login/Componentesjossi/Login';

function App() {

  return (
    <>
     
     <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login></Login>}></Route>
    </Routes>
    </BrowserRouter>
      
         
         
    </>
  )
}

export default App
