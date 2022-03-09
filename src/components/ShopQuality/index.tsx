import React from 'react';
import './style.css';

export const ShopQuality: React.FC = () => {
    return (
        <div className="shop-quality-container">
            <div className="quality-item-container">
                <div className="img-container support-local" />
                <h3>Support Local</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita, a?
                </p>
            </div>
            <div className="quality-item-container">
                <div className="img-container high-quality" />
                <h3>High Quality</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing. Greg</p>
            </div>
            <div className="quality-item-container">
                <div className="img-container eco-friendly" />
                <h3>Eco Friendly</h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Vero.
                </p>
            </div>
        </div>
    );
};
