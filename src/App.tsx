import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';

import AboutPage from './components/LinkAndRedirect/AboutPage';
import HomePage from './components/LinkAndRedirect/HomePage';
import ProfileProps from './components/LinkAndRedirect/ProfileProps';

const App = () => {
    return (
        <BrowserRouter>
            <Link replace to="/home">
                Home
            </Link>
            <br />
            <Link to="/about">About</Link>
            <br />
            <Link to="/profile">Profile</Link>
            <br />
            <Link to="/random">Random</Link>
            <Routes>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/profile" element={<ProfileProps />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
