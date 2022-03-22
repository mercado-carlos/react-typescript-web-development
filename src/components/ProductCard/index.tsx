import React from 'react';
import { getProductVariantDetails } from '../../utils/products';

import { ProductCardModal } from '../ProductCardModal';
import { ProductCardProps, ProductCardState } from './interface';

export class ProductCard extends React.Component<
    ProductCardProps,
    ProductCardState
> {
    constructor(props: ProductCardProps) {
        super(props);

        this.state = {
            showDetails: false,
        };
    }

    onClickProductCard = () => {
        this.setState({ showDetails: true });
    };

    onClickOutsideModalBody = () => {
        this.setState({ showDetails: false });
    };

    render() {
        const { showDetails } = this.state;
        const { product } = this.props;
        const { initialVariant, variants } = getProductVariantDetails(product);

        return initialVariant ? (
            <div
                onClick={this.onClickProductCard}
                className="product-card-container"
            >
                <div
                    style={{ backgroundImage: `url(${initialVariant.image})` }}
                    className="product-image"
                />
                <div className="product-details">
                    <p>{initialVariant.title}</p>
                </div>
                <ProductCardModal
                    onClickOutsideModalBody={this.onClickOutsideModalBody}
                    show={showDetails}
                    initialVariant={initialVariant}
                    variants={variants}
                />
            </div>
        ) : null;
    }
}
