import React from 'react';
import axios from 'axios';

import { CounterManagementProps, CounterManagementState } from './interface';

export class CounterManagement extends React.Component<
    CounterManagementProps,
    CounterManagementState
> {
    constructor(props: CounterManagementProps) {
        super(props);

        this.state = {
            counter: 0,
            users: [],
        };

        console.log('constructor');
    }

    handleAddClick = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
    };

    handleMinusClick = () => {
        this.setState({
            counter: this.state.counter - 1,
        });
    };

    static getDerivedStateFromProps(
        props: CounterManagementProps,
        state: CounterManagementState
    ) {
        console.log('getDerivedStateFromProps');

        // return props.ownerName === 'Rysh' ? { counter: 5 } : null;
        return null;
    }

    clickWindow = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    componentDidMount() {
        axios.get('https://reqres.in/api/users?page=2').then((response) => {
            const data = response.data;

            const users = data.data.map((userData: any) => userData.first_name);

            this.setState({ users });
        });

        window.addEventListener('click', this.clickWindow);

        console.log('componentDidMount');
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.clickWindow);
    }

    render() {
        const { ownerName } = this.props;
        const { counter, users } = this.state;

        console.log('render');

        return (
            <div>
                <h1> Counter Management </h1>
                <h2> Owner Name: {ownerName} </h2>
                <h3> Counter: {counter} </h3>
                <button onClick={this.handleAddClick}>Add</button>
                <button onClick={this.handleMinusClick}>Minus</button>
                <ul>
                    {users.map((user) => (
                        <li>{user}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
