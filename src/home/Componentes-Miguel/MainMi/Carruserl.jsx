import { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Hp from '../../../assets/imagenes/Huella.png'
import Hg from '../../../assets/imagenes/huellaGato.png'

function Carruserl() {

    const datos = [{iconsRef: Hp, Titulo: '¿Quiénes somos?', texto: "Somos una plataforma digital que centraliza la historia clínica de tu mascota mediante un código QR. Con nuestro sistema, puedes acceder fácilmente a sus registros médicos y agendar consultaso procedimientos quirúrgicos con veterinarios de confianza. Todo en un solo lugar,siempre disponible."}
        ,{iconsRef: Hg, Titulo: 'Nuestro Objetivo', texto: "En Pet history facilitamos el cuidado de tu mascota mediante una plataforma digital que conecta a dueños y veterinarios de froma simple y eficiente. Permitimos agendar citas, procedimientos y seguimientos desde cualquier lugar y momento visualizando la historia clinica de tu mascota escanenando un QR." }]

  const [Index, setIndex] = useState(0);
  const siguiente =()=>{
    setIndex((prev) => (prev + 1 ) % datos.length)
  }
   const anterior =()=>{
    setIndex((prev) => (prev - 1 + datos.length) % datos.length)
  }
  return (
    
    <div className='CarruEst'>
        <button onClick={anterior} className='BOTONES'><BsArrowLeft /></button>
        <div className='organizacion'>
            <img src= {datos[Index].iconsRef} alt="" className='carrusel'/>
            <h2>{datos[Index].Titulo}</h2>
            <p>{datos[Index].texto}</p>
        </div>
        <button onClick={siguiente} className='BOTONES'><BsArrowRight /></button>
    </div>
    
  );
}
export default Carruserl;