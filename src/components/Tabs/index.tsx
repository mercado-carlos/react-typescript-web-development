import React from 'react';
import { Outlet } from 'react-router-dom';

import TabNav from '../TabNav';

const Tabs = () => {
    return (
        <div className="tabs">
            <h1>Tabs</h1>
            <TabNav />
            <Outlet />
        </div>
    );
};

export default Tabs;
