import React from 'react';

import { HomePageState } from './interface';

const EvenComponent = React.lazy(() => import('../EvenComponent'));
const OddComponent = React.lazy(() => import('../OddComponent'));

export default class HomePage extends React.Component<{}, HomePageState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            counter: 0,
            hasError: false,
        };
    }

    updateCounter = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
    };

    static getDerivedStateFromError() {
        return {
            hasError: true,
        };
    }

    render() {
        const { counter, hasError } = this.state;

        return (
            <div>
                <h1>Home Page</h1>
                {hasError ? (
                    <h1>Error Occurs</h1>
                ) : (
                    <React.Suspense fallback={<div>Loading...</div>}>
                        {counter % 2 === 0 ? (
                            <EvenComponent />
                        ) : (
                            <OddComponent />
                        )}
                    </React.Suspense>
                )}
                <button onClick={this.updateCounter}>Change Component</button>
            </div>
        );
    }
}
