// Member.jsx
import { Container } from 'react';
import { useUser } from './context/UserContext';

const Member = () => {
  const { user } = useUser();

  if (!user) {
    // Redirigir a la página de inicio de sesión si el usuario no está autenticado
    return <p>Please log in to access this page.</p>;
  }

  return (
    <Container>
      <h2>Member Profile</h2>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Date of Birth: {user.dob}</p>
      <p>Email: {user.mail}</p>
    </Container>
  );
};

export default Member;
