import * as types from "../Constant"

export function GetCart(payload) {
    return ({
        type: types.get_cart_request,
        payload
    })
}


export function UpdateCart(payload) {
    return ({
        type: types.update_cart_request,
        payload
    })
}