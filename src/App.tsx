import React from 'react';
import './App.css';

import TrackClick from './components/TrackClick';
import Profile from './components/Profile';
import NewsFeed from './components/NewsFeed';

const App: React.FC = () => {
    return (
        <React.Fragment>
            <h1>My App</h1>
            {/* <TrackClick renderProps={(click) => <Profile click={click} />} />
            <TrackClick renderProps={(click) => <NewsFeed click={click} />} /> */}
            <Profile ownerName="Carlos" />
            <NewsFeed />
        </React.Fragment>
    );
};

export default App;
