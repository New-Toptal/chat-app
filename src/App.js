import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import Forgot from './components/forgot';
import Chatboard from './components/chatBoard/index';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/chat' element={<Chatboard />} />
        <Route path='/forgot' element={<Forgot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
