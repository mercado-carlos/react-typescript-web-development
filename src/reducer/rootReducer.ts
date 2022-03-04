import { combineReducers } from 'redux';

import { fruitsReducer } from './fruitsReducer';
import { usersReducer } from './userReducer';

export const rootReducer = combineReducers({
    fruits: fruitsReducer,
    users: usersReducer,
});
