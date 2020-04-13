import * as type from "../../Constant"

export function _GetListUniProduct() {
    return ({
        type: type.get_uni_product_request,

    })
};
export function _CreateUniProduct(payload) {
    return ({
        type: type.create_uni_product_request,
        payload: payload,
    })
};
export function _UpdateUniProduct(payload) {
    return ({
        type: type.edit_uni_product_request,
        payload: payload,
    })
};
export function _DeleteUniProduct(payload) {
    return ({
        type: type.delete_uni_product_request,
        payload: payload,
    })
}