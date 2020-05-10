import * as type from "../../Constant"

export function _GetListProduct() {
    return ({
        type: type.get_uni_product_request,

    })
};
export function _CreateProduct(payload) {
    return ({
        type: type.create_uni_product_request,
        payload: payload,
    })
};
export function _UpdateProduct(payload) {
    return ({
        type: type.edit_uni_product_request,
        payload: payload,
    })
};
export function _DeleteProduct(payload) {
    return ({
        type: type.delete_uni_product_request,
        payload: payload,
    })
}