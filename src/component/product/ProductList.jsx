import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';  

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-node-tienda.onrender.com/v1/post');
        if (response.data.message === 'Posts') {
          setProducts(response.data.detail);
        } else {
          console.error('Respuesta de la API inesperada:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Función para truncar la descripción a 150 caracteres
  const truncateDescription = (description) => {
    if (description.length > 150) {
      return description.substring(0, 130) + '...';
    }
    return description;
  };

    // Función para formatear el precio a millones con separadores de puntos
    const formatPrice = (price) => {
      return price.toLocaleString('es-ES', {
        style: 'currency',
        currency: 'CLP',
      });
    };

  // Limita la cantidad de productos a mostrar a 6
  const limitedProducts = products.slice(0, 6);

  return (
    <div>
      <h2 className="titleSection">Scooter</h2>
      <Row>
        {limitedProducts.map((product) => (
          <Col key={product._id} xs={12} md={6} lg={6} xl={6}>
            <Card style={{ marginBottom: '20px' }}>
              <Row>
                <Col xs={12} md={6} lg={6} xl={4}>
                  <Card.Img src={product.img} alt={product.modelo} className="cardImg p-2" />
                </Col>
                <Col xs={12} md={6} lg={6} xl={8}>
                  <Card.Body className='p-4'>
                    <Card.Title className="bodyCardMarca"><small>{product.marca} </small><br />
                    <div className="bodyCardTitle">{product.modelo}</div>
                    </Card.Title>
                    <Card.Text>
                        <div>
                          Precio: $ <del>{formatPrice(product.precio)}</del>
                        </div>
                        <div />
                          Oferta: $ <strong>{formatPrice(product.precioOferta)}</strong>
                        <div />
                        <div className='bodyCardDescuento destacado'>
                          Descuento: {product.descuento}% 
                        </div>
                        <small>{truncateDescription(product.descripcion)}</small>
                    </Card.Text>
                      <Link to={`/ProductDetails/${product.modelo}`}>
                        <Button variant="primary btn-own">
                          MÁS INFO
                        </Button>
                      </Link>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
        <Col className='cardButton'>
          <Link to='/modelos'>
            <button className='btn btn-own'>VER TODOS</button>
         </Link>
        </Col>    
      </Row>
    </div>
  );
};