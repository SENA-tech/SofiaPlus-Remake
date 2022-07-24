import React from 'react';
import { Route, Routes } from 'react-router-dom';

//Components
import { About, Classmates, Error404, Footer, Home, Login, Navbar, RegisterForm, Suport } from './Data';

export default function App() {

  return (

    <div>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} >
          <Route path='login' element={<Login />} />
          <Route path='register' element={<RegisterForm />} />
        </Route >
        <Route path='/about' element={<About />} />
        <Route path='/support' element={<Suport />} />
        <Route path='/search' element={<Classmates />}/>
        <Route path='*' element={<Error404 />}/>
      </Routes >
      <Footer />
    </div>

  );
}