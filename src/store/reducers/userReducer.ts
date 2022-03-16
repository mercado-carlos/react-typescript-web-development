import { Reducer } from 'redux';
import update from 'immutability-helper';

import UserAction, { UserReducerAction } from '../actions/userAction';
import { ProductFilters } from './shopReducer';

export interface User {
    filters: ProductFilters;
}

const userInitialState: User = {
    filters: {
        gender: [],
        category: [],
        trends: [],
    },
};

export const userReducer: Reducer<User, UserReducerAction> = (
    state = userInitialState,
    action
) => {
    switch (action.type) {
        case UserAction.UPDATE_USER_FILTERS:
            return update(state, { filters: { $set: action.filters } });
        default:
            return state;
    }
};
