import { RouteComponentProps } from 'react-router-dom';

import { GetProductsOptions } from '../../api/shopAPI';
import { FetchShopProductsAction } from '../../store/actions/shopAction';
import { ProductFilters, ShopProducts } from '../../store/reducers/shopReducer';

export interface AllProductsStateProps {
    shopProducts: ShopProducts;
    productFilters: ProductFilters;
    userFilters: ProductFilters;
    userSelectedPage: number;
}

export interface AllProductsOwnProps extends RouteComponentProps {}

export interface AllProductsDispatchToProps {
    fetchShopProducts(options: GetProductsOptions): FetchShopProductsAction;
    fetchShopProductsAndFilters(): any;
    updateUserFilters(filters: ProductFilters): any;
    updateUserShopProductsPage(shopProductsPage: number): any;
}

export type AllProductsPageProps = AllProductsStateProps &
    AllProductsOwnProps &
    AllProductsDispatchToProps;
