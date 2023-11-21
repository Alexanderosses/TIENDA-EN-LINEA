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
      return description.substring(0, 150) + '...';
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
                <Col xs={12} md={6} lg={6} xl={6}>
                  <Card.Img src={product.img} style={{ height: '250px', width: '250px', objectFit: 'cover' }} />
                </Col>
                <Col xs={12} md={6} lg={6} xl={6}>
                  <Card.Body>
                    <Card.Text><small><strong>{product.marca}</strong></small></Card.Text>
                    <Card.Title>{product.modelo}</Card.Title>
                    <Card.Text>
                      Precio: $ {formatPrice(product.precio)}
                      <br />
                      Precio de oferta: $ {formatPrice(product.precioOferta)}
                      <br />
                      Descuento: {product.descuento}%
                      <br />
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