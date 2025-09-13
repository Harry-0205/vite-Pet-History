import Info2 from "./Info2"
import CarruVet from "./CarruVet"


function MainMi (){
    return(
        <main>
            <div className="ma-ban">
                <p><h3 className="ma-ban-eslogan">El cuidado de tu mascota,<br /> conectado<br /></h3></p>
                <div className="ma-ban-text">
                <h5>Eficiencia para veterinarios, tranquilidad para dueños.</h5>
                <button type="button" class="btn btn-outline-info" className='he-button-pos' id="ma-ban-button"><h3>Registrate</h3></button>
                </div>
            </div>
            <div className="ma-carru-div">
                <CarruVet></CarruVet>
            </div>
        </main>
    )
}

export default MainMi