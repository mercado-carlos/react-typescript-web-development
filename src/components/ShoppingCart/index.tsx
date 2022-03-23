import React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { StoreStateType } from '../../store/rootReducer';

import {
    ShoppingCartOwnProps,
    ShoppingCartProps,
    ShoppingCartStateProps,
} from './interface';

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cart }) => {
    const cartLength = cart.length;

    const notificationUI = cartLength ? (
        <div className="shop-cart-notification">{cartLength}</div>
    ) : null;

    return (
        <div className="shopping-cart-container">
            <i className="nav-item fa fa-shopping-cart"></i>
            {notificationUI}
        </div>
    );
};

const mapStateToProps: MapStateToProps<
    ShoppingCartStateProps,
    ShoppingCartOwnProps,
    StoreStateType
> = (state) => {
    const { cart } = state.user;

    return {
        cart,
    };
};

export default connect(mapStateToProps)(ShoppingCart);
