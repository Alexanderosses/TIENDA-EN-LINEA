import '../../app.css';
import logo_small from '../../assets/logo_small.png';
import Container from 'react-bootstrap/Container';

export const FooterComp = () => {
  return (
    <Container fluid className="mx-auto footer">
        <div className='footer100'>
          <img src={logo_small} alt='Imagen Logo' className='footerLogo' /> 
        </div>
        <div className='footer100'>
          <span className="footerText1">2023 © Todos los derechos reservados </span> 
        </div>
        <div className='footer100'> 
          <span className="footerText2">Diseñado por </span> <span className="footerText2 footerMl"> Alexander Osses</span> 
        </div>
    </Container>
  )
}