import * as types from "../Constant"

export function GetCart(payload) {
    return ({
        type: types.get_cart_request,
        payload
    })
}