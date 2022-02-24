import React from 'react';
import './App.css';

import { CounterManagement } from './components/CounterManagement';

class App extends React.Component {
    render() {
        return (
            /* Or use: <></> */
            <React.Fragment>
                <h1>My App</h1>
                <CounterManagement ownerName="Carlos" />
            </React.Fragment>
        );
    }
}

export default App;
