import { Route, Routes } from "react-router-dom"
import FooterMi from "../../home/Componentes-Miguel/FooterMi/FooterMi"
import HeaderJi from "../Componentes-Jilian/Header-Ji/Header-Ji"
import PerfilMascota from "../Componentes-Jilian/Main-Ji/Perfil-Mascota"



function Jilian (){
    return(
        <>
        <HeaderJi></HeaderJi>
        <Routes>
            <Route path="/mascotas" element={<PerfilMascota />} />
            <Route path="/historiaClinica"element={<HistoriaClinica/>}/>
        </Routes>
        <FooterMi></FooterMi>
        </>
    )
}
export default Jilian