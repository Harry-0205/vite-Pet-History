import { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Veteri from '../../../assets/imagenes/Veteri.png'
import Veteri2 from '../../../assets/imagenes/Veteri2.png'

function CarruVet() {

    const datos = [{iconsRef: Veteri, Titulo: 'Veterinaria Rosales', texto: "Somos una veterina especializada en procedimietnos como esterilizacion, endoscopia y mas. Nos ubicamos en: Carrera 8 #987e12sur. Te esperamos" }
        ,{iconsRef: Veteri2, Titulo: 'Veterinaria Max', texto: "Somos una veterina especializada en procedimietnos como esterilizacion, endoscopia y mas. Nos ubicamos en: Carrera 5 #123a45bis. Te esperamos" }]

  const [Index, setIndex] = useState(0);
  const siguiente =()=>{
    setIndex((prev) => (prev + 1 ) % datos.length)
  }
   const anterior =()=>{
    setIndex((prev) => (prev - 1 + datos.length) % datos.length)
  }
  return (
    
    <div className='CarruEst'>
        <button onClick={anterior} className='BOTONES' id='orga'><BsArrowLeft /></button>
        <div className='organizacion1'>
            <img src= {datos[Index].iconsRef} alt="" className='carrusel'/>
            <h2>{datos[Index].Titulo}</h2>
            <p>{datos[Index].texto}</p>
        </div>
        <button onClick={siguiente} className='BOTONES' id='orga' ><BsArrowRight /></button>
    </div>
    
  );
}
export default CarruVet;