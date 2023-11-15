import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Card, Col, Row } from 'react-bootstrap';
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
    <div>
    <Container fluid className="mt-5">
      <div className="ptop"></div>
      <h2 className="titleSectionCard mt-5 ms-2 mb-4">Detalles del Producto</h2>
      <Card className="bodyCard h-100">
        <Card.Body className="d-flex flex-column">
          <Row>
            <Col md={4} className="carImg">
              <Card.Img src={product.img} alt={product.modelo}  className="cardImg"  />
            </Col>
            <Col md={8}>
              <Card.Title className="bodyCardTitle">{product.marca}</Card.Title>
              <Card.Title className="bodyCardTitle">{product.modelo}</Card.Title>
              <Card.Text className="bodyCardParagraph">{product.descripcion}</Card.Text>
              <Card.Text className="bodyCardPrice mt-auto">Precio: $ {formatPrice(product.precio)} </Card.Text>
              <Card.Text className="bodyCardPrice mt-auto"> Descuento: {product.descuento}% </Card.Text>
              <Card.Text className="bodyCardPrice mt-auto">Precio Oferta: $ {formatPrice(product.precioOferta)} </Card.Text>              
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
    <ContactComp />
    <FooterComp />
    </div>
  );
};
