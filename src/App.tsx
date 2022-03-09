import React from 'react';
import './styles/App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import HomePage from './containers/HomePage';
import AllProductsPage from './containers/AllProductsPage';
import CheckoutPage from './containers/CheckoutPage';
import { ROUTE } from './constants/route';
import { HeaderNavigation } from './components/HeaderNavigation';

function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                <HeaderNavigation />
                <Routes>
                    <Route path={ROUTE.HOME} element={<HomePage />} />
                    <Route
                        path={ROUTE.ALL_PRODUCTS}
                        element={<AllProductsPage />}
                    />
                    <Route path={ROUTE.CHECKOUT} element={<CheckoutPage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
