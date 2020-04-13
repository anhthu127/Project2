import * as type from "../../Constant"
import AddUni from "../FetchAPI/UniProduct/AddUniProduct"
import GetUni from '../FetchAPI/UniProduct/GetUniProduct'
import UpdateUni from '../FetchAPI/UniProduct/UpdateUniProduct'
import { put, takeEvery } from 'redux-saga/effects';
import DeleteUni from '../FetchAPI/UniProduct/DelUniProduct'
function* getUniProduct(action) {
    try {
         const responseData = yield GetUni(action.payload);
         yield put({
            type: type.get_uni_product_success,
            payload: responseData,
            // httpStatus: response.status

        })

    } catch (error) {
        yield put({
            type: type.get_uni_product_failure,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* createUniProduct(action) {
    try {
        // Call API
        const responseData = yield AddUni(action.payload);
        yield put({
            type: type.create_uni_product_success,
            payload: responseData,

        })
        yield put({
            type: type.get_uni_product_request,
            payload: 1
        })
    } catch (error) {
        yield put({
            type: type.create_uni_product_failure,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function * updateUniProduct (action){
    try {
        // Call API
        const responseData = yield UpdateUni(action.payload);
        yield put({
            type: type.edit_uni_product_success,
            payload: responseData,

        })
        yield put({
            type: type.get_uni_product_request,
            payload: 1
        })
    } catch (error) {
        yield put({
            type: type.edit_uni_product_failure,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function * deleteUniProduct (action){
    try {
        // Call API
        const responseData = yield DeleteUni(action.payload);
        yield put({
            type: type.delete_uni_product_success,
            payload: responseData,

        })
        yield put({
            type: type.get_uni_product_request,
            payload: 1
        })
    } catch (error) {
        yield put({
            type: type.delete_uni_product_failure,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
export const UniSaga = [
    takeEvery(type.get_uni_product_request, getUniProduct),
    takeEvery(type.create_uni_product_request, createUniProduct),
    takeEvery(type.edit_uni_product_request, updateUniProduct),
    takeEvery(type.delete_uni_product_request, deleteUniProduct),

];
