import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const history = useNavigate();

    const goHome = (e: any) => {
        e.preventDefault();

        history('/');
    };

    return (
        <div>
            <h1>User Details</h1>
            <button onClick={goHome}>Go Home</button>
        </div>
    );
};

export default UserDetails;
