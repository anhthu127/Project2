import * as types from "../Constant"

export function _clientLogin(payload) {
    return ({
        type: types.client_login_request,
        payload,
    })
}