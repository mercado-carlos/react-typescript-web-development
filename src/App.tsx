import React, { ErrorInfo } from 'react';
import './App.css';

import { FirstComponent } from './components/FirstComponent';
import { ErrorComponent } from './components/ErrorComponent';

interface AppProps {}

interface AppState {
    hasError: boolean;
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppState) {
        super(props);

        this.state = {
            hasError: false,
        };
    }
    static getDerivedStateFromError(error: Error) {
        console.log('getDerivedStateFromError', error);

        return {
            hasError: true,
        };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log('componentDidCatch', error);
        console.log('componentDidCatch', info);

        this.setState({
            hasError: true,
        });
    }

    render() {
        return (
            <React.Fragment>
                <h1>My App</h1>
                {this.state.hasError ? <ErrorComponent /> : <FirstComponent />}
            </React.Fragment>
        );
    }
}

export default App;
