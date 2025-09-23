import '../../Estilos-Miguel/MiguelEs.css'
import logo from "../../../assets/imagenes/logo.png"
import { Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function HeaderMi (){
    return(
        <header >
            <div className='he-comp'>
                <div className='he-comp-grid1'><img src={logo} alt="" className='logo' /></div>
                <div className='he-comp' id='he-navbar'>
                    <div><Link to={"/inicio"}><h6 className='he-navbar-nav'>Inicio</h6></Link></div>
                    <div><Link to={"/servicios"}><h6 className='he-navbar-nav' >Servicios </h6></Link></div>
                    <div><Link to={"/nosotros"}><h6 className='he-navbar-nav'>¿Quienes somos?</h6></Link></div>
                </div>
                <div className='he-button'>
                    <Button  type="button" class="btn btn-outline-info" className='he-button-pos'><h6>Registrate</h6></Button>
                    <Button type="button" class="btn btn-outline-info" className='he-button-pos' id='he-button-sep'><h6>Iniciar sesion</h6></Button>
                </div>
            </div>
        </header>
    )
}
export default  HeaderMi