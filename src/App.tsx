import React from 'react';
import './App.css';

//import { Button } from './components/Button';
import { CounterManagement } from './components/CounterManagement';

interface AppState {
    change: boolean;
}

class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            change: true,
        };
    }

    clickButton = () => {
        this.setState({ change: !this.state.change });
    };

    render() {
        return (
            /* Or use: <></> */
            <React.Fragment>
                <h1>My App</h1>
                {/* <Button type="primary">Primary</Button>
            <Button>Default</Button> */}

                {this.state.change && <CounterManagement ownerName="Carlos" />}
                <button onClick={this.clickButton}>Change</button>
            </React.Fragment>
        );
    }
}

export default App;
