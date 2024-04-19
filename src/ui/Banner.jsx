import { useEffect, useState } from 'react';
import { Carousel } from './Carousel'
import './styles/Banner.css';
import { Link } from 'react-router-dom';


export const Banner = () => {

  const [randomPage, setRandomPage] = useState('');

  const handleRandom = () => {
    let randomNum = Math.floor( Math.random() * 3 + 1 ); 
    setRandomPage(randomNum === 1 ? 'galletones' : randomNum === 2 ? 'brownies' : 'tortas');
  }

  useEffect(() => {
    handleRandom();
  }, [])
  
  
  
  return (
    <div className="banner">

      {/* Lado izquierdo */}
      <div className="left-side">
        {/* Mensaje */} 
        <div className="message-box">
          <p className="message">QUIERO AREQUIPE</p>
        </div>
        {/* Segundo mensaje */}
        <div className="second-message-box">
          <p className="second-message">Lorem ipsum dolor sit amet</p>
        </div>
        {/* Boton de ordenar */}
        <div className="order-button-box">
          <Link to={randomPage} className="order-button">Ordenar</Link>
        </div>
      </div>

      {/* Lado derecho */}
      <div className="right-side">
        <Carousel/>
      </div>

    </div>
  )
}









{/* <div className="first-image-box">
<img src="" alt="" />
</div>
<div className="second-image-box">
<div className="image-box">
  <img src="" alt="" />
</div>
<div className="image-description-box">
  <p></p>
</div>
</div>
<div className="third-image-box">
<img src="" alt="" />
</div> */}