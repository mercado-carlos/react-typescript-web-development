import React from 'react';
import axios from 'axios';

import { Button } from '../Button';

import { hasUserAlreadyFetched } from './utils';
import {
    UserManagementProps,
    UserManagementState,
    UserDataAPI,
} from './interface';
import './style.css';

export class UserManagement extends React.Component<
    UserManagementProps,
    UserManagementState
> {
    constructor(props: UserManagementProps) {
        super(props);

        this.state = {
            users: [],
            currentUserId: 1,
        };
    }

    fetchUser = async () => {
        const { currentUserId, users } = this.state;

        const response = await axios.get(
            `https://reqres.in/api/users/${currentUserId}`
        );
        const { data } = response.data as UserDataAPI;

        this.setState({
            users: [...users, data],
        });
    };

    componentDidMount() {
        this.fetchUser();
    }

    componentDidUpdate(
        prevProps: UserManagementProps,
        prevState: UserManagementState
    ) {
        const { currentUserId, users } = this.state;

        if (
            prevState.currentUserId !== this.state.currentUserId &&
            !hasUserAlreadyFetched(users, currentUserId)
        ) {
            this.fetchUser();
        }
    }

    handleAddUserId = () => {
        const { currentUserId } = this.state;

        currentUserId < 10 &&
            this.setState({
                currentUserId: currentUserId + 1,
            });
    };
    handleMinusUserId = () => {
        const { currentUserId } = this.state;

        currentUserId > 1 &&
            this.setState({
                currentUserId: currentUserId - 1,
            });
    };

    renderUsers = () => {
        const { users, currentUserId } = this.state;

        return users
            .filter((user) => user.id <= currentUserId)
            .map(({ avatar, first_name, last_name }) => {
                return (
                    <div className="user-details">
                        <img className="user-avatar" src={avatar} alt="" />
                        <span>{`${first_name} ${last_name}`}</span>
                    </div>
                );
            });
    };

    render() {
        const { currentUserId } = this.state;

        return (
            <div className="users-management-container">
                <h1> User Management </h1>
                <div className="users-contaier">{this.renderUsers()}</div>
                <p>Number of Users: {currentUserId}</p>
                <div className="options">
                    <Button onClick={this.handleAddUserId} type="primary">
                        Add
                    </Button>
                    <Button onClick={this.handleMinusUserId}>Minus</Button>
                </div>
            </div>
        );
    }
}
