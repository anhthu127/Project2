import * as type from "../Constant"

const DEFAULT_STATE = {
    res: null,
    isLoading: true,
    dataFetched: false,
    isFetching: false,
    isLogin: false,
    error: false,
    errorMessage: null,
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case type.add_new_account_request:
            return {
                ...state,
            };
        case type.add_new_account_success:
            console.log("reducer: "+JSON.stringify(action.payload.res ))
            return {
                ...state,
                res: action.payload.res,
                isLoading: false,
                isLogin: true,

            };
        case type.add_new_account_failure:
            return {
                ...state,
                isLoading: false,
                isLogin: false,
                errorMessage: action.payload.errorMessage
            };
        case type.client_login_request:
            return {
                ...state,

            }
        case type.client_login_success:
            return {
                ...state,
                isLoading: false,
                payload: action.payload
            };
        case type.client_login_failure:
            return {
                ...state,
                isLoading: true,
                res: null,
                errorMessage: action.payload.errorMessage
            };
        default: // need this for default case
            return state
    }
}