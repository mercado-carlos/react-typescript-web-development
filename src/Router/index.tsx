import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';

import AboutPage from '../components/CreateAndAccessStore/AboutPage';
import HomePage from '../components/CreateAndAccessStore/HomePage';
import { rootReducer } from '../store/reducer/rootReducer';
import { customMiddleware } from '../store/middlewares/customMiddleware';
import { anotherMiddleware } from '../store/middlewares/anotherMiddleware';

const store = createStore(
    rootReducer,
    {
        users: ['Carlos', 'May'],
        fruits: ['apple', 'avocado'],
    },
    composeWithDevTools(applyMiddleware(customMiddleware, anotherMiddleware))
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
