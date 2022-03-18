import { call, put, select, takeLatest } from 'redux-saga/effects';

import ShopAPI, { GetProductsOptions } from '../../api/shopAPI';
import { convertFiltersToCategories } from '../../utils/helper';
import ShopAction from '../actions/shopAction';
import UserAction, {
    UpdateUserFiltersAction,
    UpdateUserShopProductsPageAction,
} from '../actions/userAction';
import { ShopProducts } from '../reducers/shopReducer';
import { User } from '../reducers/userReducer';
import { StoreStateType } from '../rootReducer';

function* workerUpdateUserFiltersSaga(action: UpdateUserFiltersAction) {
    const shopAPI = new ShopAPI();
    const shopAction = new ShopAction();

    try {
        const response = yield call(shopAPI.getProducts, {
            category: convertFiltersToCategories(action.filters),
        });
        const shopProducts = response.data as ShopProducts;

        yield put(shopAction.setShopProducts(shopProducts));
    } catch (error) {
        console.log(error);
    }
}

function* workerUpdateUserShopProductsPageSaga(
    action: UpdateUserShopProductsPageAction
) {
    const shopAPI = new ShopAPI();
    const shopAction = new ShopAction();

    try {
        const user: User = yield select((state: StoreStateType) => state.user);

        const options: GetProductsOptions = {
            page: action.shopProductsPage,
            size: user.shopProductsSize,
            category: convertFiltersToCategories(user.filters),
        };

        const response = yield call(shopAPI.getProducts, options);
        const shopProducts = response.data as ShopProducts;

        yield put(shopAction.setShopProducts(shopProducts));
    } catch (error) {
        console.log(error);
    }
}

export function* watchUserSaga() {
    yield takeLatest(
        UserAction.UPDATE_USER_FILTERS,
        workerUpdateUserFiltersSaga
    );
    yield takeLatest(
        UserAction.UPDATE_USER_SHOP_PRODUCTS_PAGE,
        workerUpdateUserShopProductsPageSaga
    );
}
