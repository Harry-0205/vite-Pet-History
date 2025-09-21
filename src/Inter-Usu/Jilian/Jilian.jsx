import { Route, Routes } from "react-router-dom"
import FooterMi from "../../home/Componentes-Miguel/FooterMi/FooterMi"
import HeaderJi from "../Componentes-Jilian/Header-Ji/Header-Ji"
import PerfilMascota from "../Componentes-Jilian/Main-Ji/Perfil-Mascota"
import HistoriaClinica from "../Componentes-Jilian/Main-Ji/Historia-Clinica"
import InformacionCita from "../Componentes-Jilian/Main-Ji/Informacion-Cita"



function Jilian (){
    return(
        <>
        <HeaderJi></HeaderJi>
        <Routes>
            <Route path="/perfil" element={<PerfilMascota/>} />
            <Route path="/historia"element={<HistoriaClinica/>}/>
            <Route path="/informacion"element={<InformacionCita/>}/>
        </Routes>
        <FooterMi></FooterMi>
        </>
    )
}
export default Jilian