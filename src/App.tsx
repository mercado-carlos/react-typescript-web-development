import React from 'react';
import './App.css';
import { Button } from './components/Button';

const App = () => {
    return (
        /* Or use: <></> */
        <React.Fragment>
            <h1>My App</h1>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
        </React.Fragment>
    );
};

export default App;
