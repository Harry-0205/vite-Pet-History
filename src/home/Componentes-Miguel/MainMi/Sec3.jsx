import Logo from '../../../assets/pet.png'
function Sec3(){
    return(
        <>
        <div className="cajon">
            <div className="servici">
                
                    <h2>Nuestros servicios</h2>
                
            </div>
            <div className="cajita1">
                <img src= {Logo} alt="" id='tamaño'/>
                <h6> 
                    Historial clinico en un QR<br />
                    <i>
                    Facil manejo
                    </i>
                </h6>
            </div>
            <div className="cajita1">
                <img src= {Logo} alt="" id='tamaño'/>
                <h6> 
                    Consultas <br />
                    <i>
                    Una manera mas eficiente de poder cuidar la salud de tu mascota
                    </i>
                </h6>
            </div>
            <div className="cajita1">
                <img src= {Logo} alt="" id='tamaño'/>
                <h6> 
                    Procedimientos quirurgicos<br />
                    <i>
                    Para esas situaciones imprevistas
                    </i>
                </h6>   
            </div>
        </div>
        </>
    )
}
export default Sec3