import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import AboutPage from './components/History/AboutPage';
import HomePage from './components/History/HomePage';
import UserDetails from './components/History/UserDetails';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/user" element={<UserDetails />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
