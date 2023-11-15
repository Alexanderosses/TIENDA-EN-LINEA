import { CarouselComp } from '../component/carousel/CarouselComp.jsx';
import { MenuComp } from "../component/menu/MenuComp";
import { ContactComp } from "../component/contact/ContactComp";
import { FooterComp } from "../component/footer/FooterComp";
import { Container } from 'react-bootstrap';

export const Modelos = () => {
  return (
    <>
      <Container fluid className='g-0'>
      <CarouselComp />
        <div className='container'>
          <MenuComp />
        </div>
      </Container>
      <ContactComp />
      <FooterComp />
    </>
  );
};
