import React from 'react';
import './style.css';

import { ShopQuality } from '../../components/ShopQuality';

class HomePage extends React.Component {
    render() {
        return (
            <div className="homepage-container">
                <div className="cover-image" />
                <ShopQuality />
            </div>
        );
    }
}

export default HomePage;
