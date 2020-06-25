import * as type from "../Constant";
import addAccount from "../FetchAPI/addAccount"
import loginAccount from "../FetchAPI/loginAccount"
import AddToCart from '../FetchAPI/AddToCart'
import { put, takeEvery } from 'redux-saga/effects';

function* createAccount(action) {
    try {
        const res = yield addAccount(action.payload);
        console.log("action: " + JSON.stringify(res))

          let data = {
            cart: {
                user_id: res.id,
                product: [
                    {
                        product_id: "",
                        product_name: "",
                        price: "",
                        color: "",
                        quantity: "",
                    }
                ],
                total_money: ""
            },
        }
        const cart = yield AddToCart(data.cart)

        // console.log("res: "+JSON.stringify(res))
        yield put({
            type: type.add_new_account_success,
            payload: {
                res,
                cart
            }

        });
    } catch (error) {
        yield put({
            type: type.add_new_account_failure,
            payload: {
                errorMessage: error.message,
            }
        });
    }
}
function* LoginAccount(action) {
    try {
        const res = yield loginAccount(action.payload);
        // console.log("res: ", JSON.stringify(res))
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