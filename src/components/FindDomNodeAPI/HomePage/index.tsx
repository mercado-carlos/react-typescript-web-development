import React from 'react';
import ReactDOM from 'react-dom';

import Profile from '../Profile';

class HomePage extends React.Component {
    profileRef: React.RefObject<Profile> = React.createRef();

    componentDidMount() {
        console.log(ReactDOM.findDOMNode(this.profileRef.current));
    }

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <Profile ref={this.profileRef} />
            </div>
        );
    }
}

export default HomePage;
