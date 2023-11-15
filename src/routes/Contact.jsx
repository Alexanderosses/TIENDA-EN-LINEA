import { Container } from "react-bootstrap";
import { ContactComp } from "../component/contact/ContactComp";
import { FooterComp } from "../component/footer/FooterComp";
import { FormContact } from "../component/formcontact/FormContact";

export const Contact = () => {
  return (
    <Container className="g-0">
      <div className="ptop"></div>
      <h2 className='titleAbout mt-5 mb-4'>CONTÁCTANOS</h2>
      <div className="reservation contact" id='about'>
          
          <p className="textReservation col-md-8 mx-auto my-5">
            Estamos aquí para escucharte. ¿Preguntas, comentarios o ideas para compartir? Completa el formulario y nos pondremos en contacto contigo pronto. Tu opinión es importante para nosotros y esperamos brindarte la mejor atención posible. ¡Esperamos saber de ti pronto!
          </p>

          <div className="col-md-8 mx-auto ">
            <FormContact />
          </div>
      </div>
      <ContactComp />
      <FooterComp />
    </Container>
  )
}

