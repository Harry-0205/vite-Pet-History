import BannerMi from "./BannerMi"
import MainInfo from "./MainInfo"
import serv1 from "../../../assets/imagenes/servicios/serv1.png";
import serv2 from "../../../assets/imagenes/servicios/serv2.png";
import serv3 from "../../../assets/imagenes/servicios/serv3.png";
import serv4 from "../../../assets/imagenes/servicios/serv4.png";

function MainServ (){
    return(
        <main>
            <BannerMi
            titulo={"Nuestros Servicios"}
            subtitulo={"siempre a tu alcance"}
            text={"Gestión completa de la salud de tu mascota: historial, agenda, recordatorios y comunicación eficaz."}
            ></BannerMi>
            <MainInfo
            titulo_1={"Manejo de"}
            subtitulo_1={"Historia Clínica"}
            texto_1={"Lleva la salud de tu mascota al día con facilidad. Aquí tendrás toda su información médica organizada y siempre accesible. Además, podrás guardar fotos y videos de su evolución para un seguimiento más completo y visual."}
            img_1={serv1}
            
            titulo_2={"Agenda Inteligente"}
            texto_2={"Organizar el tiempo nunca fue tan sencillo. Como dueño, agenda las citas y procedimientos de tu mascota sin complicaciones. Como profesional, mantén tu calendario siempre actualizado, con todas las citas y tareas importantes a la vista, optimizando cada jornada."}
            img_2={serv2}>
            </MainInfo>
            <MainInfo
            titulo_1={"Gestión y "}
            subtitulo_1={"Administración"}
            texto_1={"Para los líderes de clínicas, la administración se simplifica. Supervisa y organiza tu equipo profesional de manera eficiente, asegurando que cada miembro tenga las herramientas para ofrecer el mejor servicio. Toma el control de tu veterinaria con inteligencia."}
            img_1={serv3}
            titulo_2={"Recordatorios Precisos"}
            texto_2={"Nunca más olvidarás una fecha importante. Recibe alertas personalizadas para vacunas, tratamientos y citas de tu mascota. Para el profesional, asegúrate de cumplir con cada compromiso, gracias a recordatorios que te guían en tu agenda diaria."}
            img_2={serv4}></MainInfo>
        </main>
    )
}

export default MainServ
