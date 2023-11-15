import './App.css';
import { Navigate, Routes, Route } from 'react-router-dom';
import { HeaderComp } from './component/header/HeaderComp.jsx';
import { Home } from './routes/Home';
import { Modelos } from './routes/Modelos.jsx';
import { Reservation } from './routes/Reservation';
import { Contact } from './routes/Contact';
import { Aboutus } from './routes/Aboutus';

import { ProductDetails } from './routes/ProductDetails';



export const App = () => {
  const menuFrase = [
    { item: "full electromovilidad" }
  ];
  return (
    <>
      <HeaderComp menuFrase={menuFrase} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Modelos' element={<Modelos />} />
        <Route path='/Reservation' element={<Reservation />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Aboutus' element={<Aboutus />} />
        <Route path='/ProductDetails/:item' element={<ProductDetails />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
};