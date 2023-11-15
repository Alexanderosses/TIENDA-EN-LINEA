import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// OWN
import '../../app.css';
import imagenUno from '../../assets/BANNER-1.jpg';
import imagenDos from '../../assets/BANNER-2.jpg';
import imagenTres from '../../assets/BANNER-3.jpg';

export const CarouselComp = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='carouselEspace mb-4'>
      <Carousel activeIndex={index} onSelect={handleSelect}>

        <Carousel.Item className='justify-content-start '>
          <img className="d-block w-100" src={imagenUno} alt="First slide" />
          <Carousel.Caption>
            <h1 className='titleHeaderCarousel'>RION <br /></h1>
            <p className='subtitleHeaderCarousel'>El hiperscooter más rápido del mundo</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img className="d-block w-100" src={imagenDos} alt="Second slide" />
          <Carousel.Caption>
          <h1 className='titleHeaderCarousel'>DUALTRON <br /></h1>
            <p className='subtitleHeaderCarousel'>X Limited</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={imagenTres} alt="Third slide" />
          <Carousel.Caption>
          <h1 className='titleHeaderCarousel'>Kaabo   <br /></h1>
            <p className='subtitleHeaderCarousel'>Wolf King Gt Pro</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
};
