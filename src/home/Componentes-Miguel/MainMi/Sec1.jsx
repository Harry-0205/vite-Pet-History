import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
function Sec1(){
    return(
        <>
        <div>
            <section className="QS">
                
                <button className="qs1"><BsArrowLeft /></button>
                <article className="qs2">
                <h6>
                <h3>¿Quiénes somos?</h3>
                    <br />
                Somos una plataforma digital que centraliza la historia clínica de tu mascota mediante un código QR.
                Con nuestro sistema, puedes acceder fácilmente a sus registros médicos y agendar consultas
                o procedimientos quirúrgicos con veterinarios de confianza. Todo en un solo lugar,
                siempre disponible.
                </h6>
                </article>
                <button className="qs1"><BsArrowRight /></button>
            </section>
        </div>
        </>
    )
}
export default Sec1