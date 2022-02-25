import React from 'react';
import './App.css';

import { Fruits } from './components/Fruits';

const App: React.FC = () => {
    return (
        <React.Fragment>
            <h1>My App</h1>
            <Fruits />
        </React.Fragment>
    );
};

export default App;
