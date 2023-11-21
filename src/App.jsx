import { Navigate, Routes, Route } from 'react-router-dom';
import { HeaderComp } from './component/header/HeaderComp.jsx';
import { Home } from './routes/Home.jsx';
import { Modelos } from './routes/Modelos.jsx';
import { Reservation } from './routes/Reservation.jsx';
import { Contact } from './routes/Contact';
import { ProductDetails } from './routes/ProductDetails.jsx';
import { AuthForm } from './AuthForm.jsx';
import { UserProvider } from './context/UserContext.jsx';


export const App = () => {
  const menuFrase = [
    { item: 'full electromovilidad' }
  ];

  return (
    <UserProvider>
      <>
        <HeaderComp menuFrase={menuFrase} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Modelos" element={<Modelos />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ProductDetails/:item" element={<ProductDetails />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/" component={HeaderComp} />
        </Routes>
      </>
    </UserProvider>
  );
};
