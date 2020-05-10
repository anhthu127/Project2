import * as types from "../Constant"

export function _clientLogin(payload) {
    return ({
        type: types.login_account_request,
        payload,
    })
}