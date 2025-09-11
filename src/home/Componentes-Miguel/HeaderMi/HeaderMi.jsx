import '../../Estilos-Miguel/MiguelEs.css'
import logo from "../../../assets/imagenes/logo.png"

function HeaderMi (){
    return(
        <header className='heMi'>
            <div><img src={logo} alt="" className='logo'/></div>
            <div className='heMi'>
                <div><h6>Inicio</h6></div>
                <div><h6>Servicios</h6></div>
                <div><h6>¿Quienes somos?</h6></div>
            </div>
            <div></div>
        </header>
    )
}
export default  HeaderMi