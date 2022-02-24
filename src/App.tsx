import React from 'react';
import './App.css';

import MyPureComponent from './components/MyPureComponent';

const App: React.FC = () => {
    return (
        <React.Fragment>
            <h1>My App</h1>
            <MyPureComponent />
        </React.Fragment>
    );
};

export default App;
