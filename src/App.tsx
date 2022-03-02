import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import AboutPage from './components/Routing/AboutPage';
import HomePage from './components/Routing/HomePage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/:username/about" element={<AboutPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
