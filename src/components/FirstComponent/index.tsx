import React from 'react';

import { FirstComponentProps, FirstComponentState } from './interface';

import { SecondComponent } from '../SecondComponent';

export class FirstComponent extends React.Component<
    FirstComponentProps,
    FirstComponentState
> {
    render() {
        console.log('render');
        return (
            <React.Fragment>
                <h1>First Component</h1>
                <SecondComponent />
            </React.Fragment>
        );
    }
}
