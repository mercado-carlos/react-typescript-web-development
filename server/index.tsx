import express from 'express';
import path from 'path';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Routes, Route } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import serialize from 'serialize-javascript';

import AboutPage from '../src/components/AboutPage';
import HomePage from '../src/components/HomePage';
import { customMiddleware } from '../src/store/middlewares/customMiddleware';
import { anotherMiddleware } from '../src/store/middlewares/anotherMiddleware';
import { rootReducer } from '../src/store/reducer/rootReducer';

const app = express();

const htmlFile = path.join(__dirname, '../build/index.html');
const htmlContent = fs.readFileSync(htmlFile, { encoding: 'utf-8' });

const initialState = {
    users: ['Carlos', 'May'],
    fruits: ['apple', 'avocado', '</script><script>window.confirm()</script>'],
};

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(customMiddleware, anotherMiddleware)
);

app.use('/public', express.static('build'));

app.get('*', (req, res) => {
    const reactComponentString = renderToString(
        <Provider store={store}>
            <StaticRouter basename="/test" location={req.url}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </StaticRouter>
        </Provider>
    );

    res.send(
        htmlContent
            .replace(
                '<div id="root"></div>',
                `<div id="root">${reactComponentString}</div>`
            )
            .replace(
                'window.initialState=null',
                `window.initialState=${serialize(initialState)}`
            )
    );
});

app.listen(7777);
