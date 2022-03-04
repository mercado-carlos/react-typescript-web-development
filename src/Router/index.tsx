import React from 'react';
import { applyMiddleware, createStore, Middleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AboutPage from '../components/CreateAndAccessStore/AboutPage';
import HomePage from '../components/CreateAndAccessStore/HomePage';
import { rootReducer } from '../store/reducer/rootReducer';

const anotherMiddleware: Middleware = (store) => (next) => (action) => {
    console.log('Current action:', action);
    next(action);
};

const customMiddleware: Middleware = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        next(action(store));
    } else {
        next(action);
    }
};

const store = createStore(
    rootReducer,
    {
        users: ['Carlos', 'May'],
        fruits: ['apple', 'avocado'],
    },
    applyMiddleware(customMiddleware, anotherMiddleware)
);

const Router = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default Router;
