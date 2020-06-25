
import * as type from "../Constant";
import GetCart from "../FetchAPI/GetCart"
import { put, takeEvery } from 'redux-saga/effects';

function* getCartInfo(action) {
    // console.log("cartSaga : "+JSON.stringify(action))
    
    try {
        const res = yield GetCart(action.payload);
        yield put({
            type: type.get_cart_success,
            payload: res
        });
    } catch (error) {
        yield put({
            type: type.get_cart_failure,
            payload: {
                errorMessage: error.message
            }
        });
    }
}

export const cartSaga = [
    takeEvery(type.get_cart_request, getCartInfo)
];
