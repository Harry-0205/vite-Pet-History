import Button from 'react-bootstrap/Button';
import sublogo from '../../../assets/imagenes/SUBLOGO.png'
import MenuAdmin from './MenuAdmin'

function HeaderAdmin (){
    return(
        <>
        <div className="HeaderMi" id='HeaderAdmin'>
            <div >
                <MenuAdmin></MenuAdmin>
            </div>
            <div className='HE2'>
                <img src={sublogo} alt="" className='tamaño'/>
            </div>
            <div className='HE3'>
                <Button href='/' variant="primary" className='separacion' > Cerrar sesion </Button>
                <Button href='/Admin' variant="outline-primary" className='separacion'><font color='#fafafa'>Perfil</font></Button>
            </div>
        </div>
        </>
    )
}
export default  HeaderAdmin