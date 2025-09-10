import Button from 'react-bootstrap/Button';
import sublogo from '../../../assets/imagenes/SUBLOGO.png'

function HeaderMi (){
    return(
        <>
        <div className="HeaderMi">
            <div >
                <img src={sublogo} alt="" className='tamaño'/>
            </div>
            <div className='HE2'>
                <h1 ><b><font color='#4C4C4C' >PET-HISTORY</font></b></h1>
            </div>
            <div className='HE3'>
                <Button href='/Registro' variant="primary" className='separacion'> Registro </Button>
                <Button href='/Iniciar' variant="outline-primary" className='separacion'><font color='#fafafa'>Iniciar sesion</font></Button>
            </div>
        </div>
        </>
    )
}
export default  HeaderMi