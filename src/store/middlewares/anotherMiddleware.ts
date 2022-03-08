import { Middleware } from 'redux';

export const anotherMiddleware: Middleware = (store) => (next) => (action) => {
    console.log('Current action:', action);
    next(action);
};
