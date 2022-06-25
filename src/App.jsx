import React from 'react';
import { Route, Routes } from 'react-router-dom';

//Components
import Home from './Routes/Home/Home'
import Text from './Routes/Text'
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/LoginForm';

export default function App() {
  return (

    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </div>

  );
}