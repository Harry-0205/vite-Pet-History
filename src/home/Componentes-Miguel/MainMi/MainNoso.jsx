import BannerMi from "./BannerMi"
import MainInfo from "./MainInfo"
import obje from "../../../assets/imagenes/img_relleno/objetivos.avif";
import somos from "../../../assets/imagenes/img_relleno/pe.avif";


function MainNoso (){
    return(
        <main>
            <BannerMi
            titulo={"Conoce más"}
            subtitulo={"de Pet history  "}
            text={"Un aliado digital que te ayuda en la gestión y el cuidado integral de las mascotas, conectando dueños y veterinarios."}
            ></BannerMi>
            <MainInfo

            titulo_1={"¿Quienes"}
            subtitulo_1={"somos?"}
            texto_1={"En Pet History, somos un equipo apasionado por el bienestar animal y la tecnología. Hemos creado una plataforma diseñada para ser el puente perfecto entre los dueños de mascotas y las clínicas veterinarias. Nuestra misión es simplificar la gestión de la salud y el cuidado de cada animal, haciendo que la tranquilidad para los dueños y la eficiencia para los profesionales sean una realidad."}
            img_1={somos}

            titulo_2={"Nuestro objetivo"}
            texto_2={"Ser la plataforma líder que conecta y simplifica integralmente la gestión del cuidado animal, garantizando la salud y el bienestar de las mascotas, al mismo tiempo que optimiza la labor de los profesionales veterinarios."}
            img_2={obje}>
            
            </MainInfo>
        </main>
    )
}

export default MainNoso