import React from 'react';

import { MyContext } from '../../context/MyContext';
import UserInput from '../UserInput';

import { HomePageProps, HomePageState } from './interface';

export default class HomePage extends React.Component {
    static contextType = MyContext;
    context!: React.ContextType<typeof MyContext>;

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <ul>
                    {this.context.users.map((user) => (
                        <li key={user}>{user}</li>
                    ))}
                </ul>
                <button onClick={() => this.context.updateUser('bella')}>
                    Add User
                </button>
                <UserInput />
            </div>
        );
    }
}
