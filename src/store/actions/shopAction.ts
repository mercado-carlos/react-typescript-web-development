import { GetProductsOptions } from '../../api/shopAPI';
import { Product, ProductFilters, ShopProducts } from '../reducers/shopReducer';

export type ShopReducerAction =
    | SetShopProductsAction
    | FetchShopProductsAction
    | SetBestSellerProductsAction
    | FetchBestSellerProductsAction
    | SetShopProductAndFilterAction
    | FetchShopProductAndFilterAction;

export interface SetShopProductsAction {
    type: typeof ShopAction.SET_SHOP_PRODUCTS;
    shopProducts: ShopProducts;
}
export interface FetchShopProductsAction {
    type: typeof ShopAction.FETCH_SHOP_PRODUCTS;
    options: GetProductsOptions;
}

export interface SetBestSellerProductsAction {
    type: typeof ShopAction.SET_BEST_SELLER_PRODUCTS;
    bestSellerProducts: Product[];
}
export interface FetchBestSellerProductsAction {
    type: typeof ShopAction.FETCH_ALL_BEST_SELLER_PRODUCTS;
}

export interface SetShopProductAndFilterAction {
    type: typeof ShopAction.SET_SHOP_PRODUCTS_AND_FILTERS;
    shopProducts: ShopProducts;
    productFilters: ProductFilters;
}
export interface FetchShopProductAndFilterAction {
    type: typeof ShopAction.FETCH_SHOP_PRODUCTS_AND_FILTERS;
}

class ShopAction {
    static readonly SET_SHOP_PRODUCTS_AND_FILTERS =
        'SET_SHOP_PRODUCTS_AND_FILTERS';
    static readonly FETCH_SHOP_PRODUCTS_AND_FILTERS =
        'FETCH_SHOP_PRODUCTS_AND_FILTERS';

    static readonly SET_SHOP_PRODUCTS = 'SET_SHOP_PRODUCTS';
    static readonly FETCH_SHOP_PRODUCTS = 'FETCH_SHOP_PRODUCTS';

    static readonly SET_BEST_SELLER_PRODUCTS = 'SET_BEST_SELLER_PRODUCTS';
    static readonly FETCH_ALL_BEST_SELLER_PRODUCTS =
        'FETCH_ALL_BEST_SELLER_PRODUCTS';

    setShopProducts = (shopProducts: ShopProducts): SetShopProductsAction => {
        return {
            type: ShopAction.SET_SHOP_PRODUCTS,
            shopProducts,
        };
    };
    fetchShopProducts = (
        options: GetProductsOptions
    ): FetchShopProductsAction => {
        return {
            type: ShopAction.FETCH_SHOP_PRODUCTS,
            options,
        };
    };

    setBestSellerProducts = (
        bestSellerProducts: Product[]
    ): SetBestSellerProductsAction => {
        return {
            type: ShopAction.SET_BEST_SELLER_PRODUCTS,
            bestSellerProducts,
        };
    };
    fetchAllBestSellerProducts = (): FetchBestSellerProductsAction => {
        return {
            type: ShopAction.FETCH_ALL_BEST_SELLER_PRODUCTS,
        };
    };

    setShopProductsAndFilters = (
        shopProducts: ShopProducts,
        productFilters: ProductFilters
    ): SetShopProductAndFilterAction => {
        return {
            type: ShopAction.SET_SHOP_PRODUCTS_AND_FILTERS,
            shopProducts,
            productFilters,
        };
    };
    fetchShopProductsAndFilters = (): FetchShopProductAndFilterAction => {
        return {
            type: ShopAction.FETCH_SHOP_PRODUCTS_AND_FILTERS,
        };
    };
}

export default ShopAction;
