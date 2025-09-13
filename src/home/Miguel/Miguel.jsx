import HeaderMi from "../Componentes-Miguel/HeaderMi/HeaderMi"
import MainMi from "../Componentes-Miguel/MainMi/MainMi"
import FooterMi from "../Componentes-Miguel/FooterMi/FooterMi"
import '../Estilos-Miguel/MiguelEs.css'
import MainServ from "../Componentes-Miguel/MainMi/MainServ"
import MainNoso from "../Componentes-Miguel/MainMi/MainNoso"

function Miguel(){
    return(
        <>
        <HeaderMi></HeaderMi>
        <MainNoso></MainNoso>
        <FooterMi></FooterMi>
        </>  
    )
}
export default Miguel