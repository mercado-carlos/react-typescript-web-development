import React from 'react';

import { withTrackClick } from '../../higherOrderComponent/withTrackClick';

import { NewsFeedProps } from './interface';

const NewsFeed: React.FC<NewsFeedProps> = ({ click }) => {
    return (
        <React.Fragment>
            <h1>News Feed</h1>
            <h3>Click: {click}</h3>
        </React.Fragment>
    );
};

export default withTrackClick(NewsFeed);
