import { call, put, takeLatest } from 'redux-saga/effects';

import ProductDetailsAPI from '../../api/productsDetailsAPI';
import ProductDetailsAction, {
    FetchShopProductsAction,
} from '../actions/productDetailsAction';
import { ShopProducts } from '../reducers/productDetailsReducer';

function* workerFetchShopProductsSaga(action: FetchShopProductsAction) {
    const productsDetailsAPI = new ProductDetailsAPI();
    const productDetailsAction = new ProductDetailsAction();

    try {
        const response = yield call(
            productsDetailsAPI.getProducts,
            action.options
        );
        const shopProducts = response.data as ShopProducts;

        yield put(productDetailsAction.setShopProducts(shopProducts));
    } catch (error) {
        console.log('error');
    }
}

function* workerFetchBestSellerProductsSaga() {
    const productsDetailsAPI = new ProductDetailsAPI();
    const productDetailsAction = new ProductDetailsAction();

    try {
        const response = yield call(productsDetailsAPI.getProducts, {
            category: ['best seller'],
        });
        const { products } = response.data as ShopProducts;

        yield put(productDetailsAction.setBestSellerProducts(products));
    } catch (error) {
        console.log('error');
    }
}

export function* watchProductDetailsSaga() {
    yield takeLatest(
        ProductDetailsAction.FETCH_SHOP_PRODUCTS,
        workerFetchShopProductsSaga
    );
    yield takeLatest(
        ProductDetailsAction.FETCH_ALL_BEST_SELLER_PRODUCTS,
        workerFetchBestSellerProductsSaga
    );
}
