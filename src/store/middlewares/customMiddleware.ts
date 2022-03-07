import { AnyAction, Middleware, Store } from 'redux';

import { StoreStateType } from '../reducer/rootReducer';
import FruitsAction from '../action/fruitsAction';
import { FruitsReducerAction } from '../reducer/fruitsReducer';
import { UsersReducerAction } from '../reducer/userReducer';

export type CustomMiddlewareFunction<S, R> = (store: Store<S>) => R;

export interface CustomDispatch<S, R> {
    <T>(action: T): T;
    (param: CustomMiddlewareFunction<S, R>): any;
}

export const customMiddleware: Middleware<
    {},
    StoreStateType,
    CustomDispatch<StoreStateType, FruitsReducerAction | UsersReducerAction>
> = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        next(action(store));

        store.dispatch(new FruitsAction().addFruits([]));
    } else {
        next(action);
    }
};
