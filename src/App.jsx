import React from 'react';
import { Route, Routes } from 'react-router-dom'

//Components
import Home from './Routes/Home'
import Text from './Routes/Text'
import Navbar from './Components/Navbar/Navbar';

export default function App() {
  return (

    <div>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Text />} />
      </Routes>

    </div>

  );
}