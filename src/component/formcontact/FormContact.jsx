import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import '../../app.css';

export const FormContact = () => {
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

    <div className='container'>
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="needs-validation">

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

                <Form.Group as={Col} md="12" controlId="validationCustom07">
                    <Form.Label className='textForm'>Mensaje *</Form.Label>
                    <textarea className="form-control formImput" id="exampleFormControlTextarea1" rows="5" required/>
                </Form.Group>

            </Row>          

            <div className='cardButton'>
                    <button type="submit" className='button'>Enviar</button>
            </div>    

        </Form>
    </div>
  )
}