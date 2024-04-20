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
  'https://res.cloudinary.com/ds4ygend0/image/upload/v1713575502/Carrusel-1_dogvmu.jpg',
  'https://res.cloudinary.com/ds4ygend0/image/upload/v1713575502/Carrusel-2_n3s0hn.jpg',
  'https://res.cloudinary.com/ds4ygend0/image/upload/v1713575502/Carrusel-3_zqlgcn.jpg',
  'https://res.cloudinary.com/ds4ygend0/image/upload/v1713575502/Carrusel-4_deqgvr.jpg',
  'https://res.cloudinary.com/ds4ygend0/image/upload/v1713575502/Carrusel-5_zqhk2r.jpg',

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
