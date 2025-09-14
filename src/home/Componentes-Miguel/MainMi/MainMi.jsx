import CarruVet from "./CarruVet"
import logo1 from "../../../assets/imagenes/veteri_logos/logo-1.jpg";
import logo2 from "../../../assets/imagenes/veteri_logos/logo-2.jpg";
import logo3 from "../../../assets/imagenes/veteri_logos/logo-3.webp";
import logo4 from "../../../assets/imagenes/veteri_logos/logo-4.jpg";
import logo5 from "../../../assets/imagenes/veteri_logos/logo-5.jpg";
import logo6 from "../../../assets/imagenes/veteri_logos/logo-6.jpg";
import logo7 from "../../../assets/imagenes/veteri_logos/logo-7.jpg";
import logo8 from "../../../assets/imagenes/veteri_logos/logo-8.jpg";
import logo9 from "../../../assets/imagenes/veteri_logos/logo-9.png";
import logo10 from "../../../assets/imagenes/veteri_logos/logo-10.webp";
import BannerMi from "./BannerMi";
import MainInfo from "./MainInfo";
import servicio from "../../../assets/imagenes/img_relleno/servicio.jpg";
import perfeccion from "../../../assets/imagenes/img_relleno/perfeccion.avif";
import Button from 'react-bootstrap/Button';


function MainMi (){
    const veterinarias = [
        logo1, logo2, logo3, logo4, logo5,
        logo6, logo7, logo8, logo9, logo10
    ];

                
    return(
        <main>
            <BannerMi
            titulo={"El cuidado de tu mascota,"}
            subtitulo={"conectado"}
            text={"Eficiencia para veterinarios, tranquilidad para dueños."}>
                <Button href="" type="button" class="btn btn-outline-info" className='he-button-pos' id="ma-ban-button"><h3>Registrate</h3></Button>
            </BannerMi>
            <div>
                <CarruVet imagenes={veterinarias} visible={10.14} imageWidth={150}/>
            </div>
            <div>
                <MainInfo
                titulo_1={"¿Por qué "}
                subtitulo_1={"Pet History?"}
                texto_1={"Porque sabemos lo importante que es la salud de tu mascota. Nuestra plataforma simplifica la  gestión completa: desde historias clínicas organizadas y agendas inteligentes hasta recordatorios automáticos y comunicación fluida entre dueños y veterinarios. Con Pet History, ahorras tiempo y te enfocas en lo que realmente importa: el bienestar de cada animal."}
                img_1={servicio}
                titulo_2={"Con nosotros podrá"}
                texto_2={"Tener toda la información de tu mascota siempre a mano, ¡al instante! Con nuestro código QR único, podrás acceder al historial completo, vacunas, tratamientos y cita en cualquier momento y lugar. Olvídate del papeleo y las prisas; con Pet History, tendrás una agenda organizada, recordatorios automáticos de vacunas y medicinas, y una comunicación más sencilla con tu veterinario. Queremos que el cuidado de tu compañero peludo sea más fácil y tranquilo que nunca."}
                img_2={perfeccion}>
                    <Button href="" type="button" class="btn btn-outline-info" className='he-button-pos' id="ma-cuerpo-buttom-text"  >
                        <h3>Conoce nuestros <br /> servicios</h3>
                    </Button>
                </MainInfo>
            </div>
        </main>
    )
}

export default MainMi

                    