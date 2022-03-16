import React from 'react';
import {
    connect,
    MapDispatchToPropsFunction,
    MapStateToProps,
} from 'react-redux';

import AllProductsSideBar from '../../components/AllProductsSideBar';
import Pagination from '../../components/Pagination';
import { ProductCard } from '../../components/ProductCard';
import ShopAction from '../../store/actions/shopAction';
import UserAction from '../../store/actions/userAction';
import { StoreStateType } from '../../store/rootReducer';
import { Button } from '../../ui-components/Button';
import {
    AllProductsDispatchToProps,
    AllProductsOwnProps,
    AllProductsPageProps,
    AllProductsStateProps,
} from './interface';

class AllProductsPage extends React.Component<AllProductsPageProps> {
    componentDidMount() {
        const { shopProducts } = this.props;

        if (!shopProducts.products.length) {
            this.props.fetchShopProductsAndFilters();
        }
    }

    renderAllProducts = () => {
        const { shopProducts } = this.props;
        return shopProducts.products.map(({ title, variants, id }) => {
            return (
                <div className="product-item-container" key={id}>
                    <ProductCard name={title} url={variants[0].image} />
                </div>
            );
        });
    };

    handlePageChange = (selectedPage: number) => {};

    render() {
        const { productFilters, userFilters, updateUserFilters } = this.props;

        return (
            <div className="all-products-page-container">
                <AllProductsSideBar
                    onUpdateUserFilters={updateUserFilters}
                    userFilters={userFilters}
                    productFilters={productFilters}
                />
                <div className="all-products-container">
                    <div className="all-products">
                        {this.renderAllProducts()}
                    </div>
                    <Pagination
                        onChange={this.handlePageChange}
                        numberOfPages={10}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps: MapStateToProps<
    AllProductsStateProps,
    AllProductsOwnProps,
    StoreStateType
> = (state) => {
    const { shopProducts, productFilters } = state.shop;
    const { filters } = state.user;

    return {
        shopProducts: shopProducts,
        productFilters: productFilters,
        userFilters: filters,
    };
};

const mapDispatchToProps: MapDispatchToPropsFunction<
    AllProductsDispatchToProps,
    AllProductsOwnProps
> = (dispatch) => {
    const { fetchShopProducts, fetchShopProductsAndFilters } = new ShopAction();
    const { updateUserFilters } = new UserAction();

    return {
        fetchShopProducts: (options) => dispatch(fetchShopProducts(options)),
        fetchShopProductsAndFilters: () =>
            dispatch(fetchShopProductsAndFilters()),
        updateUserFilters: (filters) => dispatch(updateUserFilters(filters)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllProductsPage);
