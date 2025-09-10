import { BrowserRouter, Route, Routes } from "react-router-dom"
import FooterMi from "../../home/Componentes-Miguel/FooterMi/FooterMi"
import HeaderAdmin from "../Componentes-Admin/HeaderAdmin/HeaderAdmin"
import MainAdmin from "../Componentes-Admin/MainAdmin/MainAdmin"
import '../Estilos-Admin/Estilos-Admin.css'
import CreaPer from "../Componentes-Admin/MainAdmin/CreaPer"
import PerVet from "../Componentes-Admin/MainAdmin/PerVet"

function Admin (){
    return(
        <div>
            <HeaderAdmin></HeaderAdmin>
            <Routes>
                <Route path="/" element={<MainAdmin/>}/>
                <Route path="/creaper" element={<CreaPer/>}/>
                <Route path="/pervert" element={<PerVet/>}/>
            </Routes>
            <FooterMi></FooterMi>
        </div>
    )
}

export default Admin 