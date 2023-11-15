// OWN
import '../../app.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const ContactComp = () => {
  return (
    <Container fluid className="contact mt-2" id='contact'>
        <div className="col-md-8 mx-auto">
            <Row>
                <h2 className='titleContact mt-5 mb2'>Nuestros canales de comunicación</h2>
                <h3 className='textContact'>En RACER FULL ELECTROMOVILIDAD estamos para atender tus consultas.</h3>
            </Row>
            <Row className='contactBlock pt-4'>
                <Col md={4} xs={12} className='contactBlockIcon pt-4'>
                    <div className='contactIconBlock'>
                        <svg className='contactIcon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-3.148 0-6 2.553-6 5.702 0 4.682 4.783 5.177 6 12.298 1.217-7.121 6-7.616 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm12 16l-6.707-2.427-5.293 2.427-5.581-2.427-6.419 2.427 4-9 3.96-1.584c.38.516.741 1.08 1.061 1.729l-3.523 1.41-1.725 3.88 2.672-1.01 1.506-2.687-.635 3.044 4.189 1.789.495-2.021.465 2.024 4.15-1.89-.618-3.033 1.572 2.896 2.732.989-1.739-3.978-3.581-1.415c.319-.65.681-1.215 1.062-1.731l4.021 1.588 3.936 9z"/></svg>
                    </div>
                    <span className='textContactIcon textContactBold'>Estamos ubicados en:</span>
                    <span className='textContact'>Camino El Alba 11969, Las Condes, Santiago de Chile</span>
                </Col>
                <Col md={4} xs={12} className='contactBlockIcon pt-4'>
                    <div className='contactIconBlock'>
                        <svg className='contactIcon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 17.311l-1.76-3.397-1.032.505c-1.12.543-3.4-3.91-2.305-4.497l1.042-.513-1.747-3.409-1.053.52c-3.601 1.877 2.117 12.991 5.8 11.308l1.055-.517z"/></svg>
                    </div>
                    <span className='textContactIcon textContactBold'>Teléfonos</span>
                    <span className='textContact'>+569 4247 3940 - +562 2232 1827</span>
                </Col>
                <Col md={4} xs={12} className='contactBlockIcon pt-4'>
                    <div className='contactIconBlock'>
                        <svg className='contactIcon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z"/></svg>
                    </div>
                    <span className='textContactIcon textContactBold'>Email</span>
                    <span className='textContact'>contacto@snackyrestobar.cl</span>
                </Col>                        
            </Row>
        </div>
    </Container>
  )
}

