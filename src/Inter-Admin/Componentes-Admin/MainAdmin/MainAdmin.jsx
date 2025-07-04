import InfoAdm from "./InfoAdm"
import VET from '../../../assets/imagenes/veteri.png'
import CreaPer from "./CreaPer"

function MainAdmin (){
    return(
        <div className="Infor1">
            <div>
                <InfoAdm></InfoAdm>
            </div>
            <div className="INVET">
                <img src={VET} alt="" />
            </div>
        </div>
    )
}

export default MainAdmin