import React from 'react';

import MyReactMemo from '../MyReactMemo';

import { MyPureComponentProps, MyPureComponentState } from './interface';

export default class MyPureComponent extends React.PureComponent<
    MyPureComponentProps,
    MyPureComponentState
> {
    constructor(props: MyPureComponentProps) {
        super(props);

        this.state = {
            name: 'Carlos',
            address: {
                city: 'MyCity',
                state: 'MyState',
            },
        };
    }

    handleSetState = () => {
        const newAddress = {
            city: 'NewCity',
            state: 'MyState',
        };
        this.setState({
            address: newAddress,
        });
    };

    render() {
        const { name, address } = this.state;
        return (
            <React.Fragment>
                <h1>Pure Component</h1>
                <MyReactMemo name={name} address={address} />
                <button onClick={this.handleSetState}>Set State</button>
            </React.Fragment>
        );
    }
}
