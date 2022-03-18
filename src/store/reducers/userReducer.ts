import { Reducer } from 'redux';
import update from 'immutability-helper';

import UserAction, { UserReducerAction } from '../actions/userAction';
import { ProductFilters } from './shopReducer';

export interface User {
    filters: ProductFilters;
    shopProductsPage: number;
    shopProductsSize: number;
}

const userInitialState: User = {
    filters: {
        gender: [],
        category: [],
        trends: [],
    },
    shopProductsPage: 1,
    shopProductsSize: 2,
};

export const userReducer: Reducer<User, UserReducerAction> = (
    state = userInitialState,
    action
) => {
    switch (action.type) {
        case UserAction.UPDATE_USER_FILTERS:
            return update(state, { filters: { $set: action.filters } });
        case UserAction.UPDATE_USER_SHOP_PRODUCTS_PAGE:
            return update(state, {
                shopProductsPage: { $set: action.shopProductsPage },
            });
        default:
            return state;
    }
};
