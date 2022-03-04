import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AboutPage from '../components/CreateAndAccessStore/AboutPage';
import HomePage from '../components/CreateAndAccessStore/HomePage';
import { rootReducer } from '../reducer/rootReducer';

const store = createStore(rootReducer, {
    users: ['Carlos', 'May'],
    fruits: ['apple', 'avocado'],
});

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
