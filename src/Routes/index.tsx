import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import InnerContent from '../components/InnerContent';
import Dashboard from '../components/Dashboard';
import Settings from '../components/Settings';
import Login from '../components/Login';
import Users from '../components/Users';
import SingleUser from '../components/SingleUser';
import NewUser from '../components/NewUser';

import Tabs from '../components/Tabs';
import Tab1 from '../components/Tab1';
import Tab2 from '../components/Tab2';
import Tab3 from '../components/Tab3';

import PublicRoutes from '../components/PublicRoutes';
import ProtectedRoutes from '../components/ProtectedRoutes';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ProtectedRoutes />}>
                <Route path="/" element={<InnerContent />}>
                    <Route
                        path="/"
                        element={<Navigate replace to="dashboard" />}
                    />
                    <Route path="dashboard" element={<Dashboard />} />

                    <Route path="tabs" element={<Tabs />}>
                        <Route
                            path="/tabs"
                            element={<Navigate replace to="tab1" />}
                        />
                        <Route path="tab1" element={<Tab1 />} />
                        <Route path="tab2" element={<Tab2 />} />
                        <Route path="tab3" element={<Tab3 />} />
                    </Route>

                    <Route path="settings" element={<Settings />} />
                    <Route
                        path="users"
                        element={<Users extraItem={'testFromRouter'} />}
                    />
                    <Route path="users/new" element={<NewUser />} />
                    <Route path="users/:userId" element={<SingleUser />} />
                </Route>
            </Route>

            <Route path="login" element={<PublicRoutes />}>
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    );
};

export default MainRoutes;
