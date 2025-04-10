import FooterMi from "../Componentes-Miguel/FooterMi/FooterMi"
import HeaderMi from "../Componentes-Miguel/HeaderMi/HeaderMi"
import MainMig from "../Componentes-Miguel/MainMi/MainMig"

function Miguel(){
    return(
        <>
        <div className="Conte">
        <div><HeaderMi></HeaderMi></div>
        <div><MainMig></MainMig></div>
        <div><FooterMi></FooterMi></div>
        </div>
        </>
      
    )
}
export default Miguel