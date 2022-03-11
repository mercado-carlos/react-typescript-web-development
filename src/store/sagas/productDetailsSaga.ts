import { call, put, takeLatest } from 'redux-saga/effects';

import ProductDetailsAPI from '../../api/productsDetailsAPI';
import ProductDetailsAction, {
    FetchShopProductsAction,
} from '../actions/productDetailsAction';
import { ShopProducts } from '../reducers/productDetailsReducer';

function* workerFetchProductsDetailSaga(action: FetchShopProductsAction) {
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

export function* watchProductDetailsSaga() {
    yield takeLatest(
        ProductDetailsAction.FETCH_SHOP_PRODUCTS,
        workerFetchProductsDetailSaga
    );
}
