import React from 'react';

export interface MyContextType {
    users: string[];
    updateUser(user: string): any;
}

export const MyContext = React.createContext<MyContextType>({
    users: ['Carlos', 'May'],
    updateUser: () => {},
});

interface MyContextProviderState {
    users: string[];
}

export class MyContextProvider extends React.Component<
    {},
    MyContextProviderState
> {
    constructor(props: {}) {
        super(props);

        this.state = {
            users: ['Carlos', 'May'],
        };
    }

    handleUpdateUser = (user: string) => {
        this.setState({
            users: [...this.state.users, user],
        });
    };
    render() {
        return (
            <MyContext.Provider
                value={{
                    users: this.state.users,
                    updateUser: this.handleUpdateUser,
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}
