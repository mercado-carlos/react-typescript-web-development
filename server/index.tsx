import express from 'express';
import path from 'path';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Routes, Route } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

import AboutPage from '../src/components/AboutPage';
import HomePage from '../src/components/HomePage';
import { customMiddleware } from '../src/store/middlewares/customMiddleware';
import { anotherMiddleware } from '../src/store/middlewares/anotherMiddleware';
import { rootReducer } from '../src/store/reducer/rootReducer';

const app = express();

const htmlFile = path.join(__dirname, '../build/index.html');
const htmlContent = fs.readFileSync(htmlFile, { encoding: 'utf-8' });

const store = createStore(
    rootReducer,
    {
        users: ['Carlos', 'May'],
        fruits: ['apple', 'avocado'],
    },
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
        htmlContent.replace(
            '<div id="root"></div>',
            `<div id="root">${reactComponentString}</div>`
        )
    );
});

app.listen(7777);
