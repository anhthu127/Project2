import * as types from "../../Constant"

export function _LoginAccount(payload) {
     return ({
        type: types.login_account_request,
        payload: payload
    })
};