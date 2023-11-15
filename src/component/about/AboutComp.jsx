import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// OWN
import '../../app.css';
import marcelo from '../../assets/personal/marcelo.png';
import claudio from '../../assets/personal/claudio.png';
import nick from '../../assets/personal/nick.png';
import hiroshi from '../../assets/personal/hiroshi.png';
import { Link } from 'react-router-dom';


export const AboutComp = () => {
    return (
    <Container>
        <h2 className='titleAbout mt-5 mb-4'>Nosotros</h2>
        <div className="about" id='about'>
            <Row className='justify-content-center p-2'>
                <h3 className='subTitleAbout mt-5 p-2'>En <span className='textAboutBold'>SNACKY</span> Restobar, la excelencia culinaria se paladea.</h3>
                <p className='col-md-7 mx-auto textAbout mt-4'>Snacky Restobar, enclavado en el corazón de Santiago de Chile, es un espacio gastronómico cautivador que fusiona la esencia de la cocina contemporánea con un ambiente acogedor y vibrante. Con una ubicación privilegiada, este rincón culinario se convierte en un punto de encuentro que celebra la diversidad de sabores y la cultura local. Snacky Restobar invita a los comensales a deleitarse con platos innovadores mientras experimentan la pulsante energía de la ciudad. Un oasis gastronómico que captura la esencia misma de Santiago.</p>
                <p className=' textAbout textAboutBig'>Nuestro team <span className='textAboutBold'>internacional</span></p>

                <Row className='col-md-8 mx-auto aboutPicture my-4'>
                    <Col md={3} xs={12}  className=' mx-auto aboutBlockPicture'>
                        <img src={marcelo} alt='Imagen Marcelo' className='img-fluid' />
                        <span className='textAboutBold'>Marcelo Rodríguez</span>
                        <span className='textAbout'>España</span>
                    </Col>
                    <Col md={3} xs={12}  className=' aboutBlockPicture justify-content-center'>
                        <img src={hiroshi} alt='Imagen Hiroshi' className='img-fluid' />
                        <span className='textAboutBold'>Hiroshi Sato</span>
                        <span className='textAbout'>Japón</span>
                    </Col>
                    <Col md={3} xs={12}  className=' aboutBlockPicture'>
                        <img src={claudio} alt='Imagen Claudio' className='img-fluid' />
                        <span className='textAboutBold'>Claudio Rossi</span>
                        <span className='textAbout'>Italia</span>
                    </Col>
                    <Col md={3} xs={12}  className=' aboutBlockPicture'>
                        <img src={nick} alt='Imagen Nick' className='img-fluid' />
                        <span className='textAboutBold'>Nick Dupont</span>
                        <span className='textAbout'>Francia</span>
                    </Col>           
                </Row>

                <p className='col-md-7 mx-auto textAbout'>En nuestro exquisito restobar Snacky, la alta gastronomía alcanza nuevas alturas con la magia culinaria de cuatro chefs de renombre internacional. El maestro del sushi,<span className='textAboutBold'> Hiroshi Sato</span> Hiroshi Sato, deleita con sus creaciones de sushi artísticamente elaborado. La reina de la cocina mediterránea,<span className='textAboutBold'>  Claudio Rossi</span>, transforma ingredientes simples en platos elegantes y sabrosos. El genio de la parrilla, <span className='textAboutBold'> Marcelo Rodríguez</span>, sirve suculentas carnes a la perfección. Y finalmente, la chef pastelera, <span className='textAboutBold'> Nick Dupont</span>, endulza nuestras vidas con postres que son auténticas obras de arte comestibles.</p>
                <p className='textAbout textAboutBig my-4'>La excelencia culinaria se paladea en <span className='textAboutBold'>SNACKY</span>.</p>
                <Row className='aboutBlock col-md-8 mx-auto p-4'>
                    <Col md={4} xs={12} className='aboutBlockDetail col'>
                        <span className='textAbout textAboutBold pb-2'>Inauguración</span>
                        <span className='textAbout'>2012</span>
                    </Col>
                    <Col md={4} xs={12} className='aboutBlockDetail col'>
                        <span className='textAbout textAboutBold pb-2'>Tipo de Establecimiento</span>
                        <span className='textAbout'>Restobar</span>
                    </Col>
                    <Col md={4} xs={12} className='aboutBlockDetail col'>
                        <span className='textAbout textAboutBold pb-2'>Rating</span>
                        <span>
                            <svg className='heartAboutFull' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"/></svg>
                            <svg className='heartAboutFull' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"/></svg>
                            <svg className='heartAboutFull' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"/></svg>
                            <svg className='heartAboutFull' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"/></svg>
                            <svg className='heartAboutEmpty'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.516 3c2.382 0 4.487 1.564 4.487 4.712 0 4.963-6.528 8.297-10.003 11.935-3.475-3.638-10.002-6.971-10.002-11.934 0-3.055 2.008-4.713 4.487-4.713 3.18 0 4.846 3.644 5.515 5.312.667-1.666 2.333-5.312 5.516-5.312zm0-2c-2.174 0-4.346 1.062-5.516 3.419-1.17-2.357-3.342-3.419-5.515-3.419-3.403 0-6.484 2.39-6.484 6.689 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-4.586-3.414-6.689-6.484-6.689z"/></svg>
                        </span>   
                    </Col>
                </Row>
            </Row>

            <Row className='cardButton mb-5 mt-4'>
                <Link to={"/Reservation"}>
                    <button className='button'>Reserva tu mesa</button>
                </Link>
            </Row>                    
        </div>
    </Container>
    )
}