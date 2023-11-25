// AuthForm.jsx
import { signUp, logIn } from './services/userService';
import { useState, useEffect } from 'react';
import { Form, Button, Container, Alert, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useUser } from './context/UserContext.jsx';
import { CarouselComp } from './component/carousel/CarouselComp.jsx';
import { ContactComp } from './component/contact/ContactComp.jsx';
import { FooterComp } from './component/footer/FooterComp.jsx';
import { Navigate } from 'react-router-dom';
import { format } from 'date-fns';

export const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    mail: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [messageVisibleTime, setMessageVisibleTime] = useState(null);

  const { user, setUser, setAuthToken, isLogged } = useUser();

  const setShowSuccessWithTimeout = (message) => {
    setShowSuccess(message);
    setMessageVisibleTime(setTimeout(() => setShowSuccess(false), 10000)); // 40 segundos
  };

  const setShowErrorWithTimeout = (message) => {
    setShowError(message);
    setMessageVisibleTime(setTimeout(() => setShowError(false), 10000)); // 40 segundos
  };

  useEffect(() => {
    return () => {
      if (messageVisibleTime) {
        clearTimeout(messageVisibleTime);
      }
    };
  }, [messageVisibleTime]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('Form data:', formData);
      if (isSignUp) {
        await signUp(formData);
        setShowSuccessWithTimeout('Registro exitoso');
        setShowError(false);
        setFormData({
          firstName: '',
          lastName: '',
          dob: '',
          mail: '',
          password: '',
        });
        setIsSignUp(false);
      } else {
        const loggedInUser = await logIn(formData);

        if (loggedInUser && loggedInUser.detail && loggedInUser.detail.user) {
          setUser(loggedInUser.detail.user);
          setAuthToken(loggedInUser.detail.token);
          setShowSuccessWithTimeout('Inicio de sesión exitoso.');
          setShowError(false);

          const { firstName, lastName, dob, mail, password } = loggedInUser.detail.user;
          setFormData({
            firstName,
            lastName,
            dob,
            mail,
            password // Limpiamos solo el campo de la contraseña
          });
        } else {
          setShowErrorWithTimeout('Error al iniciar sesión. Verifica tus credenciales.');
          setShowSuccess(false);
        }
      }
    } catch (error) {
      console.error('Error during sign up:', error.message);
      setShowErrorWithTimeout('Error al iniciar sesión. Verifica tus credenciales.');
      setShowSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setUser(null);
      setAuthToken(null);
      Navigate('/');
    } catch (error) {
      console.error('Error during logout:', error.message);
    }
  };

  const toggleAuthMode = () => {
    setShowSuccess(false);
    setShowError(false);
    setIsSignUp((prev) => !prev);
  };

  return (
    <>
      <Container fluid className='g-0'>
        <CarouselComp />
        <div className='container my-5 d-flex justify-content-center'>
          <Form onSubmit={handleSubmit} className="w-50">
            {loading && <Spinner animation="border" className="me-2" />}
            {loading && <span className='mb-2'>{isSignUp ? 'Estamos guardando tus datos, espere un momento, por favor...' : 'Validando datos, espere un momento, por favor...'}</span>}
            {showSuccess && (
              <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                {showSuccess}
              </Alert>
            )}
            {showError && (
              <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
                {isSignUp ? 'Error al registrarse. Inténtalo de nuevo.' : 'Error al iniciar sesión. Inténtelo de nuevo.'}
              </Alert>
            )}

            {isLogged ? (
              <>
              <h2>Datos del perfil de {user.firstName}</h2>
                <Form.Group controlId="formFirstName">
                  <Form.Label>Primer nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa tu nombre"
                    value={user?.firstName || ''}
                    readOnly
                  />
                </Form.Group>

                <Form.Group controlId="formLastName">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa tu apellido"
                    value={user?.lastName || ''}
                    readOnly
                  />
                </Form.Group>

                <Form.Group controlId="formDob">
                  <Form.Label>Fecha de nacimiento</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa tu fecha de nacimiento"
                    value={user?.dob ? format(new Date(user.dob), 'dd/MM/yyyy') : ''}
                    readOnly
                  />
                </Form.Group>

                <Form.Group controlId="formMail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa tu email"
                    value={user?.mail || ''}
                    readOnly
                  />
                </Form.Group>

                {/* <Form.Group controlId="formPassword">
                  <Form.Label>Clave</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingresa una clave"
                    value={user?.password || ''}
                    readOnly
                  />
                </Form.Group> */}

                <Button variant="danger" onClick={handleLogout} className="mb-3 mt-4">
                  Cerrar sesión
                </Button>
              </>
            ) : (
              <>
                {!isSignUp && (
                  <>
                  <h2>Inicio de sesión</h2>
                    <Form.Group controlId="formMail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Ingresa tu email"
                        onChange={(e) => setFormData({ ...formData, mail: e.target.value })}
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Ingresa tu clave"
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                      />
                    </Form.Group>
                    <Container className='d-flex align-items-center'>
                     
                        <Button variant="primary btn-own mt-4" type="submit" disabled={loading}>
                          Iniciar sesión
                        </Button>

                        {!loading && !user && (
                          <Button variant="link" type="button" onClick={toggleAuthMode} className="mt-4 ms-4">
                            Regístrate
                          </Button>
                        )}
                     
                    </Container>
                  </>
                )}

                {isSignUp && (
                  <>
                  <h2>Registro de usuario</h2>
                    <Form.Group controlId="formFirstName">
                      <Form.Label>Primer nombre</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingresa tu nombre"
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formLastName">
                      <Form.Label>Apellido</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingresa tu apellido"
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formDob">
                      <Form.Label>Fecha de nacimiento</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Ingresa tu fecha de nacimiento"
                        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formMail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Ingresa tu email"
                        onChange={(e) => setFormData({ ...formData, mail: e.target.value })}
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                      <Form.Label>Clave</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Ingresa una clave"
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                      />
                    </Form.Group>
                    <Container className='d-flex align-items-center'>
                      <Button variant="primary btn-own mt-4" type="submit" disabled={loading}>
                        Registrarse
                      </Button>

                      {!loading && !isLogged && (
                        <Button variant="link" type="button" onClick={toggleAuthMode} className="mt-4 ms-4" >
                          Iniciar sesión
                        </Button>
                      )}
                    </Container>
                  </>
                )}
              </>
            )}
          </Form>
        </div>
      </Container>
      <ContactComp />
      <FooterComp />
    </>
  );
};

AuthForm.propTypes = {
  isSignUp: PropTypes.bool.isRequired,
};
