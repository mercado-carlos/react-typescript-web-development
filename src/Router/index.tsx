import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../store/rootReducer';
import '../App.css';

import HomePage from '../containers/HomePage';

const store = createStore(rootReducer, {
    notes: [
        {
            id: '123',
            title: 'Attack On Titan',
            content: 'Eren Jaeger',
            createdDate: '2021-03-30T07:54:17.176Z',
            modifiedDate: '2021-03-30T07:54:17.176Z',
        },
        {
            id: '12345',
            title: 'My Hero Acadamia',
            content: 'Deku',
            createdDate: '2021-03-30T07:54:17.176Z',
            modifiedDate: '2021-03-30T07:54:17.176Z',
        },
    ],
});

const Router = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <HomePage />
            </div>
        </Provider>
    );
};

export default Router;
