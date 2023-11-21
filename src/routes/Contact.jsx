import { Container } from "react-bootstrap";
import { ContactComp } from "../component/contact/ContactComp";
import { CarouselComp } from '../component/carousel/CarouselComp.jsx';
import { FooterComp } from "../component/footer/FooterComp";
import { FormContact } from "../component/formcontact/FormContact";

export const Contact = () => {
  return (
    <Container fluid className='g-0'>
      <CarouselComp />
      <Container className="mb-5">
      <h2  className="titleSection">Contáctanos</h2>
      <div className="reservation contact" id='about'>
      <h2 className="titleSection mt-4">Conéctate con Nosotros</h2>
          <p className="textReservation col-md-8 mx-auto">
            Estamos aquí para escucharte. ¿Preguntas, comentarios o ideas para compartir? Completa el formulario y nos pondremos en contacto contigo pronto. Tu opinión es importante para nosotros y esperamos brindarte la mejor atención posible. ¡Esperamos saber de ti pronto!
          </p>

          <div className="col-md-8 mx-auto ">
            <FormContact />
          </div>
      </div>
      </Container>
      <ContactComp />
      <FooterComp />
    </Container>
  )
}

