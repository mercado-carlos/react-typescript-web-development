import React from 'react';
import './App.css';

import Sidebar from './components/Sidebar';
import MainRoutes from './Routes';

const App = () => {
    return (
        <div className="App">
            <Sidebar />
            <MainRoutes />
        </div>
    );
};

export default App;
