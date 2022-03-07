import React from 'react';
import { connect, MapStateToProps } from 'react-redux';

import UsersAction from '../../../store/action/usersAction';
import { CustomDispatch } from '../../../store/middlewares/customMiddleware';
import { UsersReducerAction } from '../../../store/reducer/userReducer';
import {
    rootReducer,
    StoreStateType,
} from '../../../store/reducer/rootReducer';

import {
    UsersProps,
    UsersOwnProps,
    UsersStateProps,
    UsersDispatchProps,
} from './interface';

class Users extends React.Component<UsersProps> {
    clickAddUsers = () => {
        this.props.addUsers(['Bella', 'Prince']);
    };

    render() {
        console.log('Users Render Called');
        const { ownerName, users } = this.props;

        return (
            <div>
                <h1>Owner Name: {ownerName}</h1>
                <h1>Users</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user}>{user}</li>
                    ))}
                </ul>
                <button onClick={this.clickAddUsers}>Add Users</button>
            </div>
        );
    }
}

const mapStateToProps: MapStateToProps<
    UsersStateProps,
    UsersOwnProps,
    ReturnType<typeof rootReducer>
> = (state, ownProps) => {
    console.log('Users Map State Props Called');
    return {
        users: state.users,
    };
};

const mapDispatchToProps = (
    dispatch: CustomDispatch<StoreStateType, UsersReducerAction>,
    ownProps: UsersOwnProps
): UsersDispatchProps => {
    const usersAction = new UsersAction();

    return {
        addUsers: (users) => dispatch(usersAction.addUsers(users)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
