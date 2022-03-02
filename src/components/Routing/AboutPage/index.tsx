import React from 'react';

import { useParams } from 'react-router-dom';

const AboutPage = () => {
    let { username } = useParams();

    return (
        <div>
            <h1>AboutPage</h1>
            <p>Name: {username}</p>
        </div>
    );
};

export default AboutPage;
