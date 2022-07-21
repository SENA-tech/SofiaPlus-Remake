import React from 'react';
import { Route, Routes } from 'react-router-dom';

//Components
import Home from './Routes/Home/Home'
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/LoginForm';
import Footer from './Components/Footer/Footer';
import About from './Routes/About/About';
import Suport from './Routes/Suport/Suport';
import RegisterForm from './Components/Register/register';

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
      </Routes >
      <Footer />
    </div>

  );
}