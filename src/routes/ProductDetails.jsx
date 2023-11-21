import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Card, Col, Row } from 'react-bootstrap';
import { CarouselComp } from '../component/carousel/CarouselComp.jsx';
import { ContactComp } from '../component/contact/ContactComp.jsx';
import { FooterComp } from '../component/footer/FooterComp.jsx';

export const ProductDetails = () => {
  const { item } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-node-tienda.onrender.com/v1/post');
        if (response.data.message === 'Posts') {
          // Encuentra el producto por nombre
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

    // Función para formatear el precio a millones con separadores de puntos
    const formatPrice = (price) => {
      return price.toLocaleString('es-ES', {
        style: 'currency',
        currency: 'CLP',
      });
    };

  return (
    <Container fluid className='g-0'>
      <CarouselComp />
        <Container className="mb-5 ">
          <h2 className="titleSection">Ficha del Scooter</h2>
          <Card className="bodyCard h-100 ">
            <Card.Body className="d-flex flex-column">
              <Row>
                <Col md={4} className="carImg">
                  <Card.Img src={product.img} alt={product.modelo}  className="cardImg"  />
                </Col>
                <Col md={8}>
                  <Card.Title className="bodyCardMarca">{product.marca} <br/>
                  <div className="bodyCardTitle">{product.modelo}</div >
                  </Card.Title >
                  <Card.Text >
                  <div className="bodyCardParagraph pb-2"> {product.descripcion}</div>
                  <div className="bodyCardPrice mt-auto pb-2">Precio: $ <del>{formatPrice(product.precio)}</del> </div>
                  <div className="bodyCardDescuento mt-auto pb-2 destacado"> Descuento: <strong >{product.descuento}%</strong>  </div>
                  <div className="bodyCardPriceEnd mt-auto">Precio Oferta: $ {formatPrice(product.precioOferta)} </div>   
                  </Card.Text>           
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
