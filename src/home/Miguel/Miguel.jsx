import HeaderMi from "../Componentes-Miguel/HeaderMi/HeaderMi"
import MainMi from "../Componentes-Miguel/MainMi/MainMi"
import FooterMi from "../Componentes-Miguel/FooterMi/FooterMi"
import '../Estilos-Miguel/MiguelEs.css'
import MainServ from "../Componentes-Miguel/MainMi/MainServ"
import MainNoso from "../Componentes-Miguel/MainMi/MainNoso"
import { Route, Routes } from "react-router-dom"

function Miguel(){
    return(
        <>
        <HeaderMi></HeaderMi>
        <Routes>
            <Route path='/' element={<MainMi/>} />
            <Route path='/inicio' element={<MainMi/>} />
            <Route path='/servicios' element={<MainServ/>} />
            <Route path='/nosotros' element={<MainNoso/>} />
        </Routes>
        <FooterMi></FooterMi>
        </>
    )
}
export default Miguel