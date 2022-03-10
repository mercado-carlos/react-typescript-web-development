import React from 'react';
import './styles/App.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import HomePage from './containers/HomePage';
import AllProductsPage from './containers/AllProductsPage';
import CheckoutPage from './containers/CheckoutPage';
import { ROUTE } from './constants/route';
import { HeaderNavigation } from './components/HeaderNavigation';
import { rootReducer } from './store/rootReducer';
import ProductDetailsAction from './store/actions/productDetailsAction';
import startRootSaga from './store/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(startRootSaga);

store.dispatch({ type: ProductDetailsAction.FETCH_PRODUCTS_DETAILS });

(window as any).shopspree = store;

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="app-container">
                    <HeaderNavigation />
                    <Routes>
                        <Route path={ROUTE.HOME} element={<HomePage />} />
                        <Route
                            path={ROUTE.ALL_PRODUCTS}
                            element={<AllProductsPage />}
                        />
                        <Route
                            path={ROUTE.CHECKOUT}
                            element={<CheckoutPage />}
                        />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
