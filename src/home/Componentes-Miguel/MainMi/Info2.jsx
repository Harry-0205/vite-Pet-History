import masc1 from "../../../assets/imagenes/masc1.png"
import masc2 from "../../../assets/imagenes/masc2.png"
import masc3 from "../../../assets/imagenes/masc3.png"

function Info2() {
    return(
        <div className="Infor2">
            <div className="Servs">
                <h2>Nuestros servicios</h2>
            </div>
            <div className="HeaderMi" id="serv" >
                <div>
                    <img src={masc1} alt="" className="tamaño"/>
                    <p>
                        <h3>
                            Agendamiento de <br /> procedimientos quirurgicos
                        </h3>
                    </p>
                </div>
                <div>
                    <img src={masc3} alt="" className="tamaño"/>
                    <p>
                        <h3>
                            Historia clinica en <br /> cualquier momento
                        </h3>
                    </p>
                </div>
                <div>
                    <img src={masc2} alt="" className="tamaño"/>
                    <p>
                        <h3>
                            Agendamiento de citas <br /> medico-veterinarias
                        </h3>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Info2