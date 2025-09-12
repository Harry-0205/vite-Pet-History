import '../../Estilos-Miguel/MiguelEs.css'
import logo from "../../../assets/imagenes/logo.png"

function HeaderMi (){
    return(
        <header >
            <div className='he-comp'>
                <div className='he-comp-grid1'><img src={logo} alt="" className='logo' /></div>
                <div className='he-comp' id='he-navbar'>
                    <div ><h6 className='he-navbar-nav'>Inicio</h6></div>
                    <div><h6 className='he-navbar-nav' >Servicios </h6></div>
                    <div><h6 className='he-navbar-nav'>¿Quienes somos?</h6></div>
                </div>
                <div className='he-button'>
                    <button type="button" class="btn btn-outline-info" className='he-button-pos'><h6>Registrate</h6></button>
                    <button type="button" class="btn btn-outline-info" className='he-button-pos' id='he-button-sep'><h6>Iniciar sesion</h6></button>
                </div>
            </div>
        </header>
    )
}
export default  HeaderMi