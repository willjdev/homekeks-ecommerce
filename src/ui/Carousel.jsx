import { useEffect, useState } from "react";
import './styles/Carousel.css'

export const Carousel = () => {

const [currentImageIndex, setCurrentImageIndex] = useState(0);

useEffect(() => {
  const intervalId = setInterval( () => {
    setCurrentImageIndex( (prevIndex) => (prevIndex + 1) % images.length );
  }, 5000);

  return () => clearInterval(intervalId); 
}, [currentImageIndex]);

const images = [
  '../../../public/Assets/Carrusel-1.jpg',
  '../../../public/Assets/Carrusel-2.jpg',
  '../../../public/Assets/Carrusel-3.jpg',
  '../../../public/Assets/Carrusel-4.jpg',
  '../../../public/Assets/Carrusel-5.jpg',

]


  return (
    <div className="carousel-container">
      <div className="carousel" style={{ transform: `translateX(-${currentImageIndex * 100}%)`}}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
