import { Reducer } from 'redux';

export interface UsersReducerAction {
    type: string;
    users: string[];
}

export const usersReducer: Reducer<string[], UsersReducerAction> = (
    state = [],
    action
) => {
    switch (action.type) {
        case 'ADD_USERS':
            return [...state, ...action.users];

        default:
            return state;
    }
};
