import React from 'react';

import { withTrackClick } from '../../higherOrderComponent/withTrackClick';

import { ProfileOwnProps, ProfileProps } from './interface';

const Profile: React.FC<ProfileProps> = ({ click, ownerName }) => {
    return (
        <React.Fragment>
            <h1>Profile</h1>
            <h2>Owner Name: {ownerName}</h2>
            <h3>Click: {click}</h3>
        </React.Fragment>
    );
};

export default withTrackClick<ProfileOwnProps>(Profile);
