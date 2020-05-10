import * as type from "../../Constant"
const DEFAULT_STATE = {
    payload: null
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case type.get_uni_product_request:
            return {
                ...state,
            };

        case type.get_uni_product_success:
            return {
                ...state,
                payload: action.payload
            };

        case type.get_uni_product_failure:
            return {
                ...state
            };

        case type.create_uni_product_request:
            return {
                ...state,
            };

        case type.create_uni_product_success:
            return {
                ...state,
            };
        case type.create_uni_product_failure:
            return {
                ...state
            };
        case type.edit_uni_product_request:
            return {
                ...state
            };
        case type.edit_uni_product_success:
            return {
                ...state
            };
        case type.edit_uni_product_failure:
            return {
                ...state
            };
        case type.delete_uni_product_request:
            return {
                ...state
            };
        case type.delete_uni_product_success:
            return {
                ...state
            };
        case type.delete_uni_product_failure:
            return {
                ...state
            };
        default:
            return state;
    }

}