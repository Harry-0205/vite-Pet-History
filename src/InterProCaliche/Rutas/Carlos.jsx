import FooterMi from "../../home/Componentes-Miguel/FooterMi/FooterMi"
import Citas from "../Componentes/Citas"
import ClinicalRecordManager from "../Componentes/ClinicalRecordManager"
import Cliente from "../Componentes/Cliente"
import HeaderCali from "../Componentes/Headercali"
import { Route, Routes } from "react-router-dom"
import Perfil from "../Componentes/Perfil"


function Carlos (){
    return(
        <div>
        <div>
        <HeaderCali></HeaderCali>
        </div>
        
        <div>
            <Routes>
            <Route path="/Historia" element={<ClinicalRecordManager/>} />
            <Route path="/Pacientes"element={<Cliente/>}/>
            <Route path="/Citas"element={<Citas/>}/>
            <Route path="/Miperfil" element={<Perfil/>}/>
            
            </Routes>
        </div>
        
        
        
        
        <FooterMi></FooterMi>

        </div>
    )
}

export default  Carlos