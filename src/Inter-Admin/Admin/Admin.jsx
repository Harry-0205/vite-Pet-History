import { BrowserRouter, Route, Routes } from "react-router-dom"
import FooterMi from "../../home/Componentes-Miguel/FooterMi/FooterMi"
import HeaderAdmin from "../Componentes-Admin/HeaderAdmin/HeaderAdmin"
import MainAdmin from "../Componentes-Admin/MainAdmin/MainAdmin"
import '../Estilos-Admin/Estilos-Admin.css'
import CreaPer from "../Componentes-Admin/MainAdmin/CreaPer"

function Admin (){
    return(
        <div>
            <HeaderAdmin></HeaderAdmin>
            <MainAdmin></MainAdmin>
            <FooterMi></FooterMi>
        </div>
    )
}

export default Admin 