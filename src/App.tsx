import React from 'react';
import './App.css';

//import { Button } from './components/Button';
import { CounterManagement } from './components/CounterManagement';

const App = () => {
    return (
        /* Or use: <></> */
        <React.Fragment>
            <h1>My App</h1>
            {/* <Button type="primary">Primary</Button>
            <Button>Default</Button> */}

            <CounterManagement ownerName="Carlos" />
        </React.Fragment>
    );
};

export default App;
