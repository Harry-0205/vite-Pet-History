import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../Jossimar-estilos/Login.css';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App