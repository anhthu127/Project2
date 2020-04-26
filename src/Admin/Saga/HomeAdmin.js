import * as type from "../../Constant"
import { put, takeEvery } from 'redux-saga/effects';
import GetStaff from "../FetchAPI/HomeAdmin/StaffAcount"
function* getListStaff(action) {
    try {
        const responseData = yield GetStaff(action.payload);
        yield put({
            type: type.get_list_staff_success,
            payload: responseData,
        })
    } catch (error) {
        yield put({
            type: type.get_list_staff_failure,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

export const HomeAdminSaga = [
    takeEvery(type.get_list_staff_request, getListStaff),
];
