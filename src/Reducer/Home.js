import * as type from "../Constant"

const DEFAULT_STATE = {
    listProduct: [
        { a: '1' }
    ],
    discountProducts: [{
        b: '2'
    }],
    dataFetched: false,
    isFetching: false,
    error: false,
    errorMessage: null,
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case type.get_ads_product_request:
            return {
                ...state,
                isFetching: true,
            };
        case type.get_ads_product_success:
            return {
                ...state,
                listProduct: action.payload.product,
                discountProducts: action.payload.discount
            };
        case type.get_ads_product_failure:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            };
        default: // need this for default case
            return state
    }
}