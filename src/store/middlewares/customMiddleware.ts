import { Middleware, Store } from 'redux';

export type CustomMiddlewareFunction = (store: Store) => any;

export interface CustomDispatch {
    <T>(action: T): T;
    (param: CustomMiddlewareFunction): any;
}

export const customMiddleware: Middleware = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        next(action(store));
    } else {
        next(action);
    }
};
