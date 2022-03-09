import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import HomePage from './containers/HomePage';
import AllProductsPage from './containers/AllProductsPage';
import CheckoutPage from './containers/CheckoutPage';
import { ROUTE } from './constants/route';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTE.HOME} element={<HomePage />} />
                <Route
                    path={ROUTE.ALL_PRODUCTS}
                    element={<AllProductsPage />}
                />
                <Route path={ROUTE.CHECKOUT} element={<CheckoutPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
