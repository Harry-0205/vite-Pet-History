import { useEffect, useState } from 'react';
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


function CarruVet() {
  const veterinarias = [
    logo1, logo2, logo3, logo4, logo5,
    logo6, logo7, logo8, logo9, logo10
  ];
  const total = veterinarias.length;
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const imageWidth = 150; // ancho de cada imagen
  const visible = 10.14; // cuántas se muestran a la vez
  // intervalo automático
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2000); // cada 2 segundos
    return () => clearInterval(interval);
  }, []);
  const handleTransitionEnd = () => {
    if (index === total) {
      // Paso 1: quitar transición y saltar al inicio
      setIsTransitioning(false);
      setIndex(0);
      // Paso 2: esperar 2 frames para reactivar transición
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  };
  return (
    <div
      className="ma-cuerpo-carru"
      style={{ width: `${imageWidth * visible}px` }}
    >
      <div
        className="cuerpo-carru-dentro"
        style={{
          transform: `translateX(-${index * imageWidth}px)`,
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {[...veterinarias, ...veterinarias].map((src, i) => (
          <img key={i} src={src} alt={`logo-${i}`} />
        ))}
      </div>
    </div>
  );
}

export default CarruVet;