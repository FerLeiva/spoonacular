import './App.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetail from './components/ItemDetail';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/NavBar';

const App = () => (
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route exact path="/" element={Login()} />
            <Route path="/login" element={Login()} />
            <Route path="/home" element={Home()} />
            <Route path="/recipes" element={ItemDetail()} />
        </Routes>
    </BrowserRouter>
);

export default App;