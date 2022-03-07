import { Store } from 'redux';
import { UsersReducerAction } from '../reducer/userReducer';
import { StoreStateType } from '../reducer/rootReducer';

class UsersAction {
    static ADD_USERS = 'ADD_USERS';

    addUsers =
        (users: string[]) =>
        (store: Store<StoreStateType>): UsersReducerAction => {
            console.log(store.getState());
            return { type: UsersAction.ADD_USERS, users };
        };
}

export default UsersAction;
