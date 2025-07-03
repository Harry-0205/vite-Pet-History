import HeaderMi from "../Componentes-Miguel/HeaderMi/HeaderMi"
import MainMi from "../Componentes-Miguel/MainMi/MainMi"
import FooterMi from "../Componentes-Miguel/FooterMi/FooterMi"
import '../Estilos-Miguel/MiguelEs.css'

function Miguel(){
    return(
        <>
         <div className="acomodacion">
        <HeaderMi></HeaderMi>
        <MainMi></MainMi>
        <FooterMi></FooterMi>
        </div>
        </>

      
    )
}
export default Miguel