import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Card, Col, Row, Alert } from 'react-bootstrap';
import { CarouselComp } from '../component/carousel/CarouselComp.jsx';
import { ContactComp } from '../component/contact/ContactComp.jsx';
import { FooterComp } from '../component/footer/FooterComp.jsx';
import IcoMercadopago from '../assets/ico-MercadoPago.png';
import { useUser } from '../context/UserContext.jsx';

export const ProductDetails = () => {
  const { item } = useParams();
  const [product, setProduct] = useState(null);
  const { isLogged } = useUser();
  const [showLoginMessage, setShowLoginMessage] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-node-tienda.onrender.com/v1/post');
        if (response.data.message === 'Posts') {
          const productFound = response.data.detail.find((p) => p.modelo === item);

          if (productFound) {
            setProduct(productFound);
          } else {
            console.error('Producto no encontrado:', item);
          }
        } else {
          console.error('Respuesta de la API inesperada:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [item]);

  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return price.toLocaleString('es-ES', {
        style: 'currency',
        currency: 'CLP',
      });
    }
    return 'Precio no válido';
  };

  const FuncionComprar = async () => {
    if (isLogged) {
      try {
        const response = await axios.post('https://api-node-tienda.onrender.com/Mercado_Pago', product);
        window.location.href = response.data;
      } catch (error) {
        console.error('Error al intentar comprar:', error);
        if (error.response) {
          console.error('Respuesta del servidor:', error.response.data);
          console.error('Código de estado:', error.response.status);
        } else if (error.request) {
          console.error('No se recibió respuesta del servidor');
        } else {
          console.error('Error:', error.message);
        }
      }
    } else {
      setShowLoginMessage(true);
    }
  };

  if (!product) {
    return (
      <Container className="mt-5">
        <div className="ptop"></div>
        <h2 className="titleSectionCard mt-5 ms-2 mb-4">Producto no encontrado</h2>
        <ContactComp />
        <FooterComp />
      </Container>
    );
  }

  return (
    <Container fluid className="g-0">
      <CarouselComp />
      <Container className="mb-5">
        <h2 className="titleSection">Ficha del Scooter</h2>
        <Card className="bodyCard h-100">
          <Card.Body className="d-flex flex-column">
            <Row>
              <Col md={4} className="carImg">
                <Card.Img src={product.img} alt={product.modelo} className="cardImg" />
              </Col>
              <Col md={8}>
                <Card.Title className="bodyCardMarca">
                  {product.marca} <br />
                  <div className="bodyCardTitle">{product.modelo}</div>
                </Card.Title>
                <Card.Text>
                  <div className="bodyCardParagraph pb-2"> {product.descripcion}</div>
                  <div className="bodyCardPrice mt-auto pb-2">
                    Precio: $ <del>{formatPrice(product.precio)}</del>{' '}
                  </div>
                  <div className="bodyCardDescuento mt-auto pb-2 destacado">
                    Descuento: <strong>{product.descuento}%</strong>{' '}
                  </div>
                  <div className="bodyCardPriceEnd mt-auto">
                    Precio Oferta: $ {formatPrice(product.precioOferta)}{' '}
                  </div>
                </Card.Text>

                <Col md={12} className=' mt-4'>
                  {showLoginMessage && !isLogged && (
                    <Alert variant="warning">
                      Debes iniciar sesión para comprar.
                    </Alert>
                  )}
                  <button className='btn btn-own' onClick={FuncionComprar} disabled={!isLogged}>
                    Comprar <img className="" src={IcoMercadopago} alt="Logo Mercadopago" /> Mercadopago
                  </button>
                </Col>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
      <ContactComp />
      <FooterComp />
    </Container>
  );
};
