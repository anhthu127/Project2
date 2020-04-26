import * as type from "../../Constant"
import { put, takeEvery } from 'redux-saga/effects';
import GetAccount from "../FetchAPI/CustomerAccount/GetListAccount"

function* getListAccount(action) {

    try {
        const responseData = yield GetAccount(action.payload);
        // const profile = yield call(api.fetchProfile(action.payload.accountId));
         yield put({
            type: type.get_list_account_success,
            payload: responseData,
            // httpStatus: response.status

        })

    } catch (error) {
        yield put({
            type: type.get_list_account_failure,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
export const CustomerSaga = [
    takeEvery(type.get_list_account_request, getListAccount)
];