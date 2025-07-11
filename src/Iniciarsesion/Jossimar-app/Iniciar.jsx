import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import '../Jossimar-estilos/Login.css';
import Login from '../Componentesjossi/Login.jsx';

function Iniciar() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Iniciar;