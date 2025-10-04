import { useEffect, useState } from 'react';



function CarruVet({ imagenes = [], visible = 10.14, imageWidth = 150 }) {

  const total = imagenes.length;
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 1000);
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
        {[...imagenes, ...imagenes].map((src, i) => (
          <img key={i} src={src} alt={`logo-${i}`} />
        ))}
      </div>
    </div>
  );
}

export default CarruVet;