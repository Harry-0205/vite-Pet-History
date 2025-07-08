import Button from 'react-bootstrap/Button';
import sublogo from '../../assets/imagenes/SUBLOGO.PNG'
import Menuu from './Menuu';

function Headercarlos (){
    return(
        <>
        <div className="HeaderMi" id='HeaderAdmin'>
            <div >
                <Menuu></Menuu>
            </div>
            <div className='HE2'>
                <img src={sublogo} alt="" className='tamaño'/>
            </div>
            <div className='HE3'>
                <Button href='/' variant="primary" className='separacion' > Cerrar sesion </Button>
                <Button href='/Pro/properfil' variant="outline-primary" className='separacion'><font color='#fafafa'>Perfil</font></Button>
            </div>
        </div>
        </>
    )
}
export default  Headercarlos