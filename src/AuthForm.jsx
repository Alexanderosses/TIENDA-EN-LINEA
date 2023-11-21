// AuthForm.jsx
import { signUp, logIn, logOut } from './services/userService';
import { useState } from 'react';
import { Form, Button, Container, Alert, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useUser } from './context/UserContext.jsx';
import { FooterComp } from './component/footer/FooterComp.jsx';
import { ContactComp } from './component/contact/ContactComp.jsx';
import { CarouselComp } from './component/carousel/CarouselComp.jsx';

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

  const { user, setUser, setAuthToken, isLogged } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log(formData);

      if (isSignUp) {
        // Registro de usuario
        await signUp(formData);
        setShowSuccess('Registro exitoso');
        setShowError(false);
        setFormData({ firstName: '', lastName: '', dob: '', mail: '', password: '' });
        setIsSignUp(false);
      } else {
        // Inicio de sesión
        const loggedInUser = await logIn(formData);

        // Establecer el usuario y el token en el contexto después del inicio de sesión
        setUser(loggedInUser);
        setAuthToken(loggedInUser?.detail?.token);
        setShowSuccess('Inicio de sesión éxitoso.');
        setShowError(false);

        // Después de un inicio de sesión exitoso
        if (loggedInUser && loggedInUser.detail) {
          const { firstName, lastName } = loggedInUser.detail.user;
          setUser({ firstName, lastName });
        }
      }
    } catch (error) {
      console.error('Error:', error.message);
      setShowError(true);
      setShowSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    // Lógica para cerrar sesión
    await logOut(user?.detail?.token);
    setUser(null); // Limpiar el usuario en el contexto
    setAuthToken(null); // Limpiar el token en el contexto
  };

  const toggleAuthMode = () => {
    console.log('Toggle Auth Mode');
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
            {loading && <Spinner animation="border" className="mr-2" />}
            {loading && <span>{isSignUp ? 'Estamos guardando tus datos, espere un momento, por favor...' : 'Validando datos, espere un momento, por favor...'}</span>}
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

            {!isSignUp && (
              <>
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

                <Button variant="primary btn-own mt-4" type="submit" disabled={loading}>
                  Iniciar sesión
                </Button>

                {!loading && !user && (
                  <Button
                    variant="link"
                    type="button"
                    onClick={toggleAuthMode}
                    className="ml-2"
                  >
                    Registrate
                  </Button>
                )}
              </>
            )}

            {isSignUp && (
              <>
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
        placeholder="ingresa tu apellido"
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        required
      />
    </Form.Group>

    <Form.Group controlId="formDob">
      <Form.Label>Fecha de nacimiento</Form.Label>
      <Form.Control
        type="date"
        placeholder="ingresa tu fecha de nacimiento"
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
        placeholder="Ingresa un clave"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />
    </Form.Group>

    <Button variant="primary btn-own mt-4" type="submit" disabled={loading}>
    Registrarse
    </Button>

                {!loading && !isLogged && (
                  <Button
                    variant="link"
                    type="button"
                    onClick={toggleAuthMode}
                    className="ml-2"
                  >
                    iniciar sesión
                  </Button>
                )}
              </>
            )}

            {isLogged && (
              <Button variant="danger" onClick={handleLogout} className="mb-3">
                Cerrar sesión
              </Button>
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
