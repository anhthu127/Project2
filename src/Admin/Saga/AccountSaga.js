import * as type from "../../Constant"
import { put, takeEvery } from 'redux-saga/effects';
import LoginAccount from "../FetchAPI/Account/LoginAccount"

function* CheckLogin(action) {
    try {
        const responseData = yield LoginAccount(action.payload);
        yield put({
            type: type.login_account_success,
            payload: responseData,
        })
    } catch (error) {
        yield put({
            type: type.login_account_falure,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
export const AccountSaga = [
    takeEvery(type.login_account_request, CheckLogin),

];