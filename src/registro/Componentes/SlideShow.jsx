import { useState } from 'react';

function SlideShow() {
  const [activeSlide, setActiveSlide] = useState(37);
  

  const slides = [
    { id: 36, image: '/images/PethistoryLogo.jpg' },
    { id: 37, image: '/images/PethistoryLogo.jpg' },
    { id: 38, image: '/images/PethistoryLogo.jpg' },
    { id: 39, image: '/images/PethistoryLogo.jpg' }
  ];
  
  return (
    <div className="slideShow-container">
      <div className="container">
        <div className="row">
          {slides.map((slide) => (
            <div className="col-3" key={slide.id}>
              <div 
                className={`slideShow-item ${activeSlide === slide.id ? 'active' : ''}`}
                onClick={() => setActiveSlide(slide.id)}
              >
                <div className="position-relative">
                  <img 
                    src={slide.image} 
                    alt={`Slide ${slide.id}`} 
                    className="slideShow-thumbnail" 
                  />
                  <div className="slideShow-number">
                    <span>{slide.id}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SlideShow;