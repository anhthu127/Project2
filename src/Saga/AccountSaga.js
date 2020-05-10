import * as type from "../Constant";
import addAccount from "../FetchAPI/addAccount"
import loginAccount from "../FetchAPI/loginAccount"
import { put, takeEvery } from 'redux-saga/effects';

function* createAccount(action) {
    try {
        const res = yield addAccount(action.payload);
        yield put({
            type: type.add_new_account_success,
            payload: res
        });
    } catch (error) {
        yield put({
            type: type.add_new_account_failure,
            payload: {
                errorMessage: error.message
            }
        });
    }
}
function* LoginAccount(payload) {
    try {
        const res = yield loginAccount(payload.payload);
        console.log("res: ", JSON.stringify(res))
        yield put({
            type: type.client_login_success,
            payload: res
        });
    } catch (error) {
        yield put({
            type: type.client_login_failure,
            payload: {
                errorMessage: error.message
            }
        });
    }
}
export const CusAccountSaga = [
    takeEvery(type.add_new_account_request, createAccount),
    takeEvery(type.client_login_request, LoginAccount)
];