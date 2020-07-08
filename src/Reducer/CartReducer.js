import * as type from "../Constant"
const DEFAULT_STATE = {
    cart: null
}
export default (state = DEFAULT_STATE, action) => {
    console.log("cartREducer: " + JSON.stringify(action.payload))
    switch (action.type) {
        case type.get_cart_request:
            return {
                ...state,
            }
        case type.get_cart_success:
            return {
                ...state,
                cart: action.payload,
            };
        case type.get_cart_failure:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            };


        case type.update_cart_request:
            return {
                ...state,
            }
        case type.update_cart_success:
            return {
                ...state,
                cart: action.payload,
            };
        case type.update_cart_failure:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            };
        default: // need this for default case
            return state
    }
}