import { Container } from "react-bootstrap";
import { CarouselComp } from '../component/carousel/CarouselComp.jsx';
import { ContactComp } from "../component/contact/ContactComp";
import { FooterComp } from "../component/footer/FooterComp";
import { ReserComp } from "../component/reser/ReserComp";

export const Reservation = () => {
  return (
    <Container fluid className='g-0'>
      <CarouselComp />
      <Container className="mb-5">
      <h2 className="titleSection">Reservas</h2>
      <div className="reservation text-center" id='about'>  
          <h2 className="titleSection mt-4">Reserva tu aventura con estilo en RACER</h2>
          <p className="textReservation col-md-8 mx-auto mb-5">
            ¡Experimenta la libertad en dos ruedas con nuestro exclusivo servicio de reserva de scooters en RACER! En RACER, no solo vendemos scooters, sino que también te ofrecemos la oportunidad de vivir una experiencia única en la carretera.
          <br/><br/>
          <strong>¿Por qué reservar con RACER?</strong><br/>
        <ol>
          <li>Variedad de Modelos: Desde elegantes scooters urbanos hasta potentes scooters deportivos, ofrecemos una amplia gama de modelos para adaptarse a tu estilo y preferencias.
</li><br/>
<li>
Facilidad de Reserva: Nuestro proceso de reserva es rápido y sencillo. Selecciona tu scooter favorito, elige las fechas de alquiler y ¡listo! Estarás listo para rodar.
</li><br/>
<li>
Equipamiento de Primera Clase: Todos nuestros scooters están equipados con las últimas características de seguridad y comodidad. Tu experiencia en la carretera será tan emocionante como segura.
</li><br/>
<li>
Asistencia en el Camino: Ofrecemos asistencia en carretera las 24 horas para brindarte tranquilidad mientras exploras la ciudad.
</li><br/>
        </ol>
        <strong>Cómo Reservar:</strong><br/>   
      <div>
        <span>Explora nuestra colección de scooters en línea.</span><br/>  
        <span>Selecciona el modelo y las fechas de alquiler deseadas.</span><br/>  
        <span>Completa el proceso de reserva de forma segura.</span><br/>  
        <span><strong></strong>¡Prepárate para disfrutar de la libertad sobre dos ruedas!</span>
      </div><br/> 
      <strong>Descubre la Ciudad a tu Manera con RACER. Reserva Ahora.</strong><br/> 
      <small>
      ¡Nota: La disponibilidad puede variar, así que asegúrate de reservar con anticipación para garantizar tu aventura en scooter con RACER!
          </small></p>

    
          <div className="col-md-8 mx-auto">
            <ReserComp />
          </div>
      </div>
      </Container>
      <ContactComp />
      <FooterComp />
    </Container>
  )
}
