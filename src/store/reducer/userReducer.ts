import { Reducer } from 'redux';

export interface UsersAction {
    type: string;
    users: string[];
}

export const usersReducer: Reducer<string[], UsersAction> = (
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
