import { Button } from "react-bootstrap"

function PerVet () {
    return(
        <div>
            <h2 className="list">Lista de Profesionales</h2>
            <div className="InfoAdm" id="sep">
                    <div>
                        <h3>Carlos Ramírez</h3>
                        <p><strong>Teléfono:</strong> 3101234567</p>
                        <p><strong>Correo:</strong> carlos.ramirez@mail.com</p>
                        <p><strong>C.C:</strong> 1029384756</p>
                        <p><strong>Universidad:</strong> Universidad Nacional de Colombia</p>
                        <Button className="acoBoto"><h5>Editar</h5></Button>
                    </div>
                    <hr />
                    <div>
                        <h3>Laura Gómez</h3>
                        <p><strong>Teléfono:</strong> 3159876543</p>
                        <p><strong>Correo:</strong> laura.gomez@mail.com</p>
                        <p><strong>C.C:</strong> 1092837465</p>
                        <p><strong>Universidad:</strong> Pontificia Universidad Javeriana</p>
                        <Button className="acoBoto"><h5>Editar</h5></Button>
                    </div>
                    <hr />
                    <div>
                        <h3>Andrés Pérez</h3>
                        <p><strong>Teléfono:</strong> 3116549870</p>
                        <p><strong>Correo:</strong> andres.perez@mail.com</p>
                        <p><strong>C.C:</strong> 1011122233</p>
                        <p><strong>Universidad:</strong> Universidad de los Andes</p>
                        <Button className="acoBoto"><h5>Editar</h5></Button>
                    </div>
            </div>
        </div>
    )
}

export default PerVet