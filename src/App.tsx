import React from 'react';
import './styles/App.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import HomePage from './containers/HomePage';
import AllProductsPage from './containers/AllProductsPage';
import CheckoutPage from './containers/CheckoutPage';
import { ROUTE } from './constants/route';
import { HeaderNavigation } from './components/HeaderNavigation';
import { rootReducer } from './store/rootReducer';
import startRootSaga from './store/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(startRootSaga);

(window as any).shopspree = store;

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="app-container">
                    <HeaderNavigation />
                    <Switch>
                        <Route
                            exact
                            component={CheckoutPage}
                            path={ROUTE.CHECKOUT}
                        />
                        <Route
                            exact
                            component={AllProductsPage}
                            path={ROUTE.ALL_PRODUCTS}
                        />
                        <Route exact component={HomePage} path={ROUTE.HOME} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
