import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AboutPage from '../components/AboutPage';
import HomePage from '../components/HomePage';
import { rootReducer } from '../store/reducer/rootReducer';
import { customMiddleware } from '../store/middlewares/customMiddleware';
import { anotherMiddleware } from '../store/middlewares/anotherMiddleware';

const store = createStore(
    rootReducer,
    (window as any).initialState,
    applyMiddleware(customMiddleware, anotherMiddleware)
);

const Router = () => {
    return (
        <Provider store={store}>
            <BrowserRouter basename="/test">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default Router;
