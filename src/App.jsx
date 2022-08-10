import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

//Components
import { About, Classmates, Error404, Footer, Home, Login, Navbar, RegisterForm, Suport } from './Data';
import Logout from './Routes/Logout/Logout';

export default function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);
    window.scroll(0, 0)
  }, [pathname])

  return (

    <div>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} >
          <Route path='login' element={<Login />} />
          <Route path='register' element={<RegisterForm />} />
          <Route path='logout' element={<Logout />} />
        </Route >
        <Route path='/about' element={<About />} />
        <Route path='/support' element={<Suport />} />
        <Route path='/search' element={<Classmates />} />
        <Route path='*' element={<Error404 />} />
      </Routes >
      <Footer />
    </div>

  );
}