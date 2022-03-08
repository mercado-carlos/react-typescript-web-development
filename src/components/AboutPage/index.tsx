import React from 'react';

import Fruits from '../Fruits';
import Users from '../Users';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h1>About Page</h1>
                <Fruits ownerName="Carlos" />
                <Users ownerName="Carlos" />
            </div>
        );
    }
}

export default AboutPage;
