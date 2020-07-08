
import * as type from "../Constant";
import GetCart from "../FetchAPI/GetCart"
import updateCart from "../FetchAPI/updateCart"
import { put, takeEvery } from 'redux-saga/effects';

function* getCartInfo(action) {
    // console.log("cartSaga : "+JSON.stringify(action))

    try {
        let res;
        res = yield GetCart(window.sessionStorage.getItem('id'));
        console.log("res:" + res)
        yield put({
            type: type.get_cart_success,
            payload: res
        });
    } catch (error) {

    }
}
function* updateCartIfo(action) {
    console.log("cartSaga : " + JSON.stringify(action.payload))

    try {
        const res = yield updateCart(action.payload, action.payload.user_id);
        yield put({
            type: type.update_cart_success,
            payload: res
        });
        yield put({
            type: type.get_cart_request,
        })
    } catch (error) {
        yield put({
            type: type.update_cart_failure,
            payload: {
                errorMessage: error.message
            }
        });
    }
}
export const cartSaga = [
    takeEvery(type.get_cart_request, getCartInfo),
    takeEvery(type.update_cart_request, updateCartIfo)

];
