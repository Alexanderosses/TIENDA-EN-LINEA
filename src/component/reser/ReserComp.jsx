import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../../app.css';
import { Container } from 'react-bootstrap';

export const ReserComp = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className='g-0 fondo-1'>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>

      <Row className="mb-3">        

        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label className='textForm'>Selecciona una fecha *</Form.Label>
          <Form.Control required type="text" placeholder="Fecha" defaultValue="" className='formImput'/>
          <Form.Control.Feedback>Se ve bien!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label className='textForm'>Selecciona un Horario *</Form.Label>
          <Form.Control required type="text" placeholder="Horario" defaultValue="" className='formImput'/>
          <Form.Control.Feedback>Se ve bien!</Form.Control.Feedback>
        </Form.Group>

      </Row>

      <Row className="mb-3">        

        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label className='textForm'>Nombre *</Form.Label>
          <Form.Control required type="text" placeholder="Nombre" defaultValue="" className='formImput'/>
          <Form.Control.Feedback>Se ve bien!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label className='textForm'>Apellido *</Form.Label>
          <Form.Control required type="text" placeholder="Apellido" defaultValue="" className='formImput'/>
          <Form.Control.Feedback>Se ve bien!</Form.Control.Feedback>
        </Form.Group>

      </Row>

      <Row className="mb-3">        

        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label className='textForm'>Email *</Form.Label>
          <Form.Control required type="text" placeholder="Email" defaultValue="" className='formImput'/>
          <Form.Control.Feedback>Se ve bien!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom06">
          <Form.Label className='textForm'>Teléfono *</Form.Label>
          <Form.Control required type="text" placeholder="Telefono" defaultValue="" className='formImput'/>
          <Form.Control.Feedback>Se ve bien!</Form.Control.Feedback>
        </Form.Group>

      </Row>      

      <Row className="mb-4" as={Col} md="6">        

        <Form.Group as={Col} md="6" controlId="validationCustom07">
          <Form.Label className='textForm'>Número de personas *</Form.Label>
          <Form.Select aria-label="Default select" className='formImput'>
            <option selected hidden>Seleccione una opción</option>
            <option value="1">Una</option>
            <option value="2">Dos</option>
            <option value="3">Tres</option>
          </Form.Select>
        </Form.Group>

      </Row>          

      <Row className="mb-3">  
        <Form.Group as={Col} md="4" className="mb-3">
          <Form.Check className='textForm pe-2' required label=" Condiciones del servicio" feedback="Debes aceptar antes de enviar." feedbackType="invalid"/>
        </Form.Group>

        <Form.Group as={Col} md="8" className="mb-3">
          <Form.Check className='textForm' required label=" Consiento la recepción de comunicaciones de RACER por e-mail y/o SMS con fines comerciales" feedback="Debes aceptar antes de enviar." feedbackType="invalid"/>
        </Form.Group>
      </Row>    
      
      <Col className='cardButton'>
              <button type="submit" className='btn btn-own'>RESERVAR</button>
      </Col>    

      </Form>
    </Container>
    
  );
}